import Switch from "react-switch";
import "./PageDeGarde.css"
import  React  from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown , faCaretUp , faPlay} from '@fortawesome/free-solid-svg-icons'

const PageDeGarde = (props) => {
    // Destructuring the props
    const { setFlipPage1, flipPage1, setPage2Opened, page1Opened, setFlipPage2 , setPage1Opened } = props;
    // Boolean to check if the recipe is used in other recipes
    const [checked, setChecked] = useState(false);

    const handleChange = nextChecked => {
      setChecked(nextChecked);
    };
    // State to store the conservation value
    const [value, setValue] = useState(0);
    const handleIncrement = () => {
      setValue(value + 1);
    };
    const handleDecrement = () => {
        value > 0 && setValue(value - 1);
    };

    // Function to flip the page
    const handleFlip = () => {
        setFlipPage1(true);
        setPage1Opened(false);
        setFlipPage2(false);;
         setTimeout(() => {
            setPage2Opened(true);;
        }, 500);
    }

  return (
    <div className={(flipPage1 && !page1Opened) ? "isClosing1" : page1Opened ? "isOpening1" : ""}>
    <div className="page">
    <div className="pageMarge"></div>
    <div className='pageBody' >
        <select name="catégorie" id="catSelect">
            <option value="">Catégorie</option>
            <option value="">Garnitures chaudes</option>
            <option value="">Garnitures froides</option>
            <option value="">Décors et autres</option>
        </select>
        <input placeholder='Nom'/>
        <div className="toggleBox">
            <Switch className="switcher" onChange={handleChange} checked={checked} onColor="#286c36" offColor="#d3d3d3" 
            uncheckedIcon = {false} checkedIcon = {false} handleDiameter= {15} height={20} />
            <label >Recette utilisée dans d'autres recettes</label>
        </div>
        <div className="conservationBox">
            <label >Conservation</label>
            <div className="conservationBody">
                <div className="icons">
                    <FontAwesomeIcon icon={faCaretUp} className="consIcon" onClick={handleIncrement}/>
                    <FontAwesomeIcon icon={faCaretDown} className="consIcon" onClick={handleDecrement}/>
                </div>
                <p style={{width : '20px',userSelect : 'none'}}>{value}</p>
                <select name="" id="unitSelect">
                    <option value="">Unité</option>
                    <option value="">Kg</option>
                    <option value="">L</option>
                </select>
            </div>
        </div>
        <div className="notesBox">
            <label >Notes</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Annuler</button>
        <FontAwesomeIcon icon={faPlay} className="iconNext" onClick={handleFlip}/>
    </div>
    </div>
    </div>
  )
};

export default PageDeGarde