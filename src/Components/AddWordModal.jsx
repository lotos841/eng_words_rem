import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

const AddWordModal = ({addWordModalIsActive, setAddWordModalIsActive, setWords}) => {

    const [wordValue, setWordValue] = useState('')
    const [translateValue, setTranslateValue] = useState('')

    const addWord = () => {
        if (wordValue.length > 0 && translateValue.length > 0) {
            setWords(prev => [{word: wordValue, translate: translateValue} ,...prev])
            setWordValue('')
            setTranslateValue('')
            setAddWordModalIsActive(false)
        }
    }

    return (
        <div className={`AddWordModal ${addWordModalIsActive && 'visible'}`}>
            <h2 className='title'>Добавьте слово</h2>
            <div className="inputs">
                <input 
                    type="text" 
                    placeholder='слово'
                    value={wordValue}
                    onChange={event => {setWordValue(event.target.value)}}
                />
                <input 
                    type="text" 
                    placeholder='перевод'
                    value={translateValue}
                    onChange={(event) => {setTranslateValue(event.target.value)}}
                />
            </div>
            <div 
                className={`add_word_button ${(wordValue.length > 0 && translateValue.length > 0 ) ? 'possibility' : ''}`} 
                onClick={addWord}>
                    <IoIosAddCircle className="icon"/> Добавить
                </div>
            <IoIosCloseCircle className='close_modal_btn' onClick={() => {setAddWordModalIsActive(false)}}/>
        </div>
    )
}

export default AddWordModal