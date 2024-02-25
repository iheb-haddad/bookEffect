import { useState } from 'react'
import "./App.css"
import { PageDeGarde , IngredientsPage, ProcessesPage } from './components/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  // Boolean to check if the recipe is finished
  const [finished , setFinished] = useState(false);

  // Boolean to flip page 1
  const [flipPage1 , setFlipPage1] = useState(false);
  // Boolean to open page 2
  const [page2Opened , setPage2Opened] = useState(false);
  // Boolean to flip page 2
  const [flipPage2 , setFlipPage2] = useState(false);
  // Boolean to open page 1
  const [page1Opened , setPage1Opened] = useState(false);

  // function to reset the recipe
  const resetRecipe = () => {
    setFinished(false);
    setFlipPage1(false);
    setPage2Opened(false);
    setFlipPage2(false);
    setPage1Opened(false);
  }

  return (
    <div className={`app ${finished && 'sucessBox'}`}>
      {!finished ? 
        <div className="book">
          {/* If page 2 is opened, display the ingredients page */}
          <div className="page2">{!page1Opened && <IngredientsPage page2Opened={page2Opened} 
              setPage2Opened={setPage2Opened} setFlipPage2={setFlipPage2} flipPage2={flipPage2} 
              setFlipPage1={setFlipPage1} setPage1Opened={setPage1Opened}/> }
          </div>
          <div className="page1">
            {/* If page 1 is opened, display the page de garde */}
            {(!page2Opened) && <PageDeGarde setFlipPage1={setFlipPage1} flipPage1={flipPage1} 
            setPage2Opened={setPage2Opened} page1Opened={page1Opened}  setFlipPage2={setFlipPage2} 
             setPage1Opened={setPage1Opened}/>}
            {/* If page 2 is opened, display the processes page */}
            {(flipPage1 || flipPage2)  && <ProcessesPage setFinished={setFinished}/>}</div>
        </div>
      : 
      // If the recipe is finished, display a success message
      <div className="successfulMsg">
        <h1>Recette ajoutée avec succès</h1>
        <FontAwesomeIcon icon={faCircleCheck} className='checkIcon' onClick={resetRecipe}/>
      </div>
      }
    </div>
  )
}

export default App