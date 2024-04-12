import { createEffect } from 'effector'
import api from './apiInstance'

export const getNewProductsFx = createEffect(async () => {
  const { data } = await api.get('/api/goods/new')
  console.log(data)
  return data
})

export const getBestsellerProductsFx = createEffect(async () => {
  const { data } = await api.get('/api/goods/bestsellers')

  return data
})
