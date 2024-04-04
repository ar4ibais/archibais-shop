const ContactsListItems = () => {
  return (
    <>
      <li className='nav-menu__accordion__item'>
        <a
          href='tel:+79998887766'
          className='nav-menu__accordion__item__link nav-menu__accordion__item__title'
        >
          +7 (999) 888 - 77 - 66
        </a>
      </li>
      <li className='nav-menu__accordion__item'>
        <a
          href='mailto:test@gmail.com'
          className='nav-menu__accordion__item__link'
        >
          Email: test@gmail.com
        </a>
      </li>
    </>
  )
}

export default ContactsListItems
