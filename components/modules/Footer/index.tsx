import Link from 'next/link'
import Logo from '@/components/elements/Logo'
import { useLang } from '@/hooks/useLang'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import FooterLinks from './FooterLinks'
import FooterMobileLink from './FooterMobileLink'

const Footer = () => {
  const { translations, lang } = useLang()
  const isMedia950 = useMediaQuery(950)
  const isMedia640 = useMediaQuery(640)
  return (
    <footer className='footer'>
      <div className='footer__top'>
        <div className='container footer__top__container'>
          <div className='footer__logo'>
            <Logo />
          </div>
          <div className='footer__contacts'>
            <span>
              <a href='tel:+79998887766'>+7 (999) 888-77-66</a>
            </span>
            <span>
              <a href='mailto:test@gmail.com'>test@gmail.com</a>
            </span>
            {isMedia950 && <FooterLinks />}
          </div>
          {!isMedia950 && <FooterLinks />}
          <ul className='list-reset footer__socials'>
            <li className='footer__socials__item'>
              <a
                className='footer__socials__item__link'
                href='https://vk.com/'
              />
            </li>
            <li className='footer__socials__item'>
              <a
                className='footer__socials__item__link'
                href='https://vk.com/'
              />
            </li>
            <li className='footer__socials__item'>
              <a
                className='footer__socials__item__link'
                href='https://vk.com/'
              />
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__bottom'>
        <div className='container footer__bottom__container'>
          <div className='footer__copyright'>
            © 2023 ПАО {translations[lang].footer.copyright}
            <br />
            (18+)
          </div>
          <div className='footer__policy'>
            <div className='footer__policy__inner'>
              <Link href='/personal-data-policy'>
                {translations[lang].footer.policy}
              </Link>
              <Link href='/privacy-policy'>
                {translations[lang].footer.privacy}
              </Link>
            </div>
            {isMedia640 && (
              <FooterMobileLink text={translations[lang].footer.full_version} />
            )}
          </div>
          {!isMedia640 && (
            <FooterMobileLink text={translations[lang].footer.mobile_version} />
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
