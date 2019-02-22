import React from 'react'

const MenuBar = (props) => {
  return (
    <div className="ui four item menu">
      <a className={props.selected === "profile" ? "item active" : "item"} id="profile" onClick={props.handler}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={props.selected === "photo" ? "item active" : "item"} id="photo" onClick={props.handler}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={props.selected === "cocktail" ? "item active" : "item"} id="cocktail" onClick={props.handler}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={props.selected === "pokemon" ? "item active" : "item"} id="pokemon" onClick={props.handler}>
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )
}

export default MenuBar
