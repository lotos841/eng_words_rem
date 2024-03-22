import React from 'react'
import Tab from './Tab'
import Boxes from './Boxes'

const Main = ({words, inputValue, setInputValue, onChangeInputValue, setAddWordModalIsActive}) => {
  return (
    <div className='Main_content'>
        <Tab 
          words={words}
          setInputValue={setInputValue}
          setAddWordModalIsActive={setAddWordModalIsActive}
        />
        <Boxes 
          inputValue={inputValue}
          onChangeInputValue={onChangeInputValue}
          words={words}
        />
    </div>
  )
}

export default Main