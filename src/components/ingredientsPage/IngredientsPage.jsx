import React from 'react'
import './IngredientsPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Ingredient from '../ingredient/Ingredient'
const IngredientsPage = (props) => {
    // Destructuring the props
    const { setFlipPage1, flipPage2, setPage2Opened, page2Opened, setFlipPage2 , setPage1Opened } = props;
    // Array of ingredients
    const ingredients = [
        {name: 'Lait entier', quantity: '535 g' , price: '0.25€'},
        {name: 'Eau', quantity: '535 g' ,price: '0.25€'},
        {name: 'Sucre semoule', quantity: '45 g' ,price: '0.25€'},
        {name: 'Sel fin', quantity: '20 g' ,price: '0.25€'},
        {name: 'Beurre doux', quantity: '470 g' ,price: '0.25€'},
        {name: 'Farine T45 Gruau', quantity: '290 g' ,price: '0.25€'},
        {name: 'Farine T55', quantity: '285 g' ,price: '0.25€'},
        {name: 'Oeufs entiers', quantity: '950 g' ,price: '0.25€'},
      ];

    // Function to flip the page
      const handlePreced = () => {
        setFlipPage1(false);
        setFlipPage2(true);
        setTimeout(() => {
            setPage1Opened(true);
            setPage2Opened(false);
        }, 500);
    }
  return (
    <div className={(page2Opened && !flipPage2) ? 'isOpening2' : flipPage2 ? 'isClosing2' : 'initialPosition'}>
    <div className='page'>
        <div className="pageBody">
        <div className='headPage'>
        <div className="title">Ingrédients</div>
        <div className="searchBox">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='searchIcon'/>
            <input type="text" placeholder=""/>
        </div>
        </div>
        <div className="ingredientsList">
            <div className="ingredientHeadList">
                <div className="ingredientName">Ingrédients</div>
                <div className="ingredientQuantity">Poids</div>
                <div className="ingredientPrice">Coût</div>
            </div>
            {ingredients.map((ingredient,index) => (
                <Ingredient key={index} {...ingredient} index = {index} length={ingredients.length}/>
            ))}
        </div>
        <div className="pageFooter">
            <label htmlFor="">Coût au kg</label>
            <div className="total">3.56€</div>
        </div> 
        <FontAwesomeIcon icon={faPlay} className="iconPreced" onClick={handlePreced}/>
        </div>           
        <div className="pageMarge"></div>
    </div>
    </div>
  )
};

export default IngredientsPage