import React from 'react'
import '@testing-library/jest-dom'
import GifGrid from '../../components/GifGrid'
import { shallow } from 'enzyme'
import useFetchGifs from '../../hooks/useFetchGifs'

jest.mock('../../hooks/useFetchGifs')

describe('Testing <GifGrid />', () => {
  const category = 'Cats'

  test('Should show the component correctly', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    })
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should show items when images are loaded from useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://bluecatencode.com',
        title: 'Hell yeah',
      },
      {
        id: '232s',
        url: 'https://bluecatencode.com/cool',
        title: 'Hell cats',
      },
    ]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    })
    const wrapper = shallow(<GifGrid category={category} />)

    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })
})
