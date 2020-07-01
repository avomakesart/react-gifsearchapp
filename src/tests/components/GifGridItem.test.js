import React from 'react'
import '@testing-library/jest-dom'
import GifGridItem from '../../components/GifGridItem'
import { shallow } from 'enzyme'

describe('Testing <GifGridItem />', () => {
  const title = 'Demo title'
  const url = 'https://bluecatencode.com'
  const wrapper = shallow(<GifGridItem title={title} url={url} />)

  test('Should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should we get a paragraph with the title', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(title)
  })

  test('should we need to have img with the correct props', () => {
    const img = wrapper.find('img')

    expect(img.prop('src')).toBe(url)
    expect(img.prop('alt')).toBe(title)
  })

  test('should we need to have the correct className', () => {
    const div = wrapper.find('div')
    const className = div.prop('className')

    expect(className.includes('card animate__animated animate__fadeIn')).toBe(
      true
    )
  })
})
