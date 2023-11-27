import React from 'react'

function Item({title, deleteItem}) {
  return (
    <article>
        <h3>{title}</h3>
        <button onClick={deleteItem}>Done</button>
    </article>
  )
}

export default Item