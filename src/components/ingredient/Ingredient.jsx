import React from 'react'
import './Ingredient.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Ingredient = ({name , quantity , price , index , length}) => {
  return (
    <div className='ingredient ingredientHeadList'>
        <div className="ingredientName">{name}</div>
        <div className="ingredientQuantity">
            {index === 0 && <div className="gradientTop"></div>}
            {index === length - 1 && <div className="gradientBottom"></div>}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
            </svg>
            {quantity+'g'}</div>
        <div className="ingredientPrice">{price}</div>
    </div>
  )
}

export default Ingredient