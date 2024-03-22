import './App.scss'
import { useState } from 'react';
import Header from './Components/Heade';
import Tab from './Components/Tab';
import Boxes from './Components/Boxes';
import Main from './Components/Main';
import AddWordModal from './Components/AddWordModal';

function App() {

  const [words, setWords] = useState([
    {
      word: 'word',
      translate: 'слово'
    },
    {
      word: 'One',
      translate: 'один'
    },
    {
      word: 'Sun',
      translate: 'солнце'
    },
    {
      word: 'Moving',
      translate: 'движение'
    },
    {
      word: 'right',
      translate: 'право'
    },
    {
      word: 'left',
      translate: 'лево'
    },
    {
      word: 'knife',
      translate: 'нож'
    },
    {
      word: 'yesterday',
      translate: 'вчера'
    },
    {
      word: 'agg',
      translate: 'яйцо'
    },
    {
      word: 'keyboard',
      translate: 'клавиатура'
    },
    {
      word: 'laptop',
      translate: 'ноутбук'
    },
    {
      word: 'trust',
      translate: 'доверять'
    },
    {
      word: 'simple',
      translate: 'просто'
    },
    {
      word: 'strawbary',
      translate: 'клубника'
    },
    {
      word: 'Family',
      translate: 'семья'
    },
    {
      word: 'Home',
      translate: ' дом'
    },
    {
      word: 'Love',
      translate: 'любовь'
    },
    {
      word: 'Friend ',
      translate: 'друг'
    },
    {
      word: 'Work',
      translate: 'работа'
    },
    {
      word: 'School',
      translate: 'школа'
    },
    {
      word: 'Game',
      translate: 'игра'
    },
    {
      word: 'Car',
      translate: 'автомобиль'
    },
    {
      word: 'Cat',
      translate: 'кот'
    },
    {
      word: 'Dog',
      translate: 'собака'
    },
    {
      word: 'Book',
      translate: 'книга'
    },
    {
      word: 'Computer',
      translate: 'клюкомпьютер'
    },
    {
      word: 'Coffee',
      translate: 'кофе'
    },
    {
      word: 'key',
      translate: 'ключ'
    },
    {
      word: 'Music',
      translate: 'музыка'
    },
    {
      word: 'Dance',
      translate: 'танец'
    },
    {
      word: 'Sky',
      translate: 'небо'
    },
    {
      word: 'Tree',
      translate: 'дерево'
    },
    {
      word: 'Happy',
      translate: 'счастливый'
    },
    {
      word: 'bird',
      translate: 'птица'
    },
    {
      word: 'fish',
      translate: 'рыба'
    },
    {
      word: 'cow',
      translate: 'корова'
    },
    {
      word: 'sheep',
      translate: 'овца'
    },
    {
      word: 'goat',
      translate: 'коза'
    },
    {
      word: 'monkey',
      translate: 'обезьяна'
    },
    {
      word: 'lion',
      translate: 'лев'
    },
    {
      word: 'bee',
      translate: 'пчела'
    },
    {
      word: 'ant',
      translate: 'муравей'
    },
    {
      word: 'snail',
      translate: 'улитка'
    },
    
  ])

  const [inputValue, setInputValue] = useState('')

  const onChangeInputValue = (event) => {
    setInputValue(event.target.value)
  }

  const [addWordModalIsActive, setAddWordModalIsActive] = useState(false)

  return (
    <div className='App'>
      <Header/>
      <Main 
        words={words}
        setInputValue={setInputValue}
        inputValue={inputValue}
        onChangeInputValue={onChangeInputValue}
        setAddWordModalIsActive={setAddWordModalIsActive}
      />
      <AddWordModal 
        addWordModalIsActive={addWordModalIsActive}
        setAddWordModalIsActive={setAddWordModalIsActive}
        setWords={setWords}
      />
    </div>
  );
}

export default App;
