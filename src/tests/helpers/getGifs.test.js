import { getGifs } from '../../helpers/getGifs'

describe('Testing the getGifs', () => {
  test('should have to get 10 elements', async () => {
    const gifs = await getGifs('Cats')

    expect(gifs.length).toBe(10)
  })

  test('should have to get 0 if return null', async () => {
    const gifs = await getGifs('')

    expect(gifs.length).toBe(0)
  })
})
