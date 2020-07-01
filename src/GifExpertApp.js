import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

export default function GifExpertApp() {
  const [categories, setCategories] = useState([])

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr className="mt-2"/>
      <ol>
        {categories.length > 0 ? (
          categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))
        ) : (
          <h1 className="center mt-10">No hay busquedas</h1>
        )}
      </ol>
    </>
  )
}
