import React, { useState } from 'react'


const Menu = () => {
    const menulist = useState([{name:"abgosh"},{name:"gormesabzi"}])

  return (
    <div>{ menulist.map(item=><h1 key={item.name}> {item.name}</h1>)}</div>
    // <h1>s</h1>
  )
}

export default Menu