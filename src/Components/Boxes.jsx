import React from 'react'

const Boxes = ({inputValue, onChangeInputValue, words}) => {

  return (
    <div className='Boxes'>
        <input type="text" className="input_text" 
          value={inputValue}
          onChange={onChangeInputValue}
        />
        <div className="translate_box">
          {
            words.map(item => (
              <h2 className='text'>
                {item.word.toLowerCase() == inputValue.toLowerCase() ? item.translate : ''}
              </h2>
            ))
          }
        </div>
    </div>
  )
}

export default Boxes