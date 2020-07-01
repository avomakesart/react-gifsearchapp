import React from 'react'
import '@testing-library/jest-dom'
import GifExpertApp from '../GifExpertApp'
import { shallow } from 'enzyme'

describe('Testing <GifExpertApp />', () => {
  const wrapper = shallow(<GifExpertApp />)

  test('Should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should show a categories list', () => {
    const categories = ['Cats', 'Dogs']
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })
})
