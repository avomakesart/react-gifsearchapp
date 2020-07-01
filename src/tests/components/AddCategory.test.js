import React from 'react'
import '@testing-library/jest-dom'
import AddCategory from '../../components/AddCategory'
import { shallow } from 'enzyme'

describe('Testing <AddCategory />', () => {
  const setCategories = jest.fn()
  let wrapper = shallow(<AddCategory setCategories={setCategories} />)

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })

  test('Should show the component correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should change the text input', () => {
    const input = wrapper.find('input')
    const value = 'Hello world'

    input.simulate('change', { target: { value } })
  })

  test('should not post the info with submit fn', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} })

    expect(setCategories).not.toHaveBeenCalled()
  })

  test('should call setCategories and clean the text input', async () => {
    const input = wrapper.find('input')
    const value = 'Hello world'

    input.simulate('change', { target: { value } })

    wrapper.find('form').simulate('submit', { preventDefault() {} })

    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toHaveBeenCalledTimes(1)
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function))

    expect(input.prop('value')).toBe('')
  })
})
