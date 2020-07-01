import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats])
      setInputValue('')
    }
  }

  return (
    <>
      <h3>Agregar Categoria</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Realiza una busqueda..."/>
      </form>
    </>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}
