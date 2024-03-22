import React from 'react'
import { IoIosAddCircle } from "react-icons/io";

const Tab = ({words, setInputValue, setAddWordModalIsActive}) => {

  return (
    <div className='Tab'>
      <div className="addword" onClick={() => {setAddWordModalIsActive(true)}}><IoIosAddCircle className="icon"/> Добавить</div>
      <ul className="list">
        {
          words.map((item) =>(
            <li className="item" onClick={() => {setInputValue(item.word)}}>
              {item.word}
            </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Tab