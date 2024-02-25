import React from 'react'
import "./ProcessesPage.css"
import { Process } from '../index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

const ProcedesPage = ({setFinished}) => {
  return (
    <div>
    <div className="page">
        <div className="pageMarge"></div>
        <div className="pageBody">
            <div className="headPage">
                <div className="headTitle">Pâte à choux</div>
                <div className="title">Procédé</div>
            </div>
        <div className="processesList">
            { 
                Array.from({ length: 10 }, (_, index) => (
              <Process key={index} index={index}/>
            ))
            }
            <FontAwesomeIcon icon={faCirclePlus} className='plus'/>
        </div>
        <div className="buttons">
            <button className="button">Annuler</button>
            <button className="ajouter" onClick={() => setFinished(true)}>Ajouter</button>
        </div>
        </div>
    </div>
    </div>
  )
};

export default ProcedesPage