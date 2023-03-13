import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { Table } from 'antd'

// components
import { TopNavigation } from '../components/header/TopNavigation'


export const Home = ({handleAnswer, data:{question, correct_answer, answers}}) => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (answer) => {
    setClickedButton(answer);
    handleAnswer(answer);
  }

  useEffect(() => {
    const buttonElements = document.getElementsByClassName('normal-button');
    for(let i = 0; i < buttonElements.length; i++) {
      if(buttonElements[i].innerHTML === clickedButton) {
        buttonElements[i].classList.add('clicked-button');
      } else {
        buttonElements[i].classList.remove('clicked-button');
      }
    }
  }, [clickedButton]);

  return (
    <>
      <TopNavigation />
      <div className="App">
        <div className="template">
          <h1>Home Page</h1>

          <div className='questionClass'>
            <h2 dangerouslySetInnerHTML={{__html:question}}/>
          </div>
          <div className='button-overall'>
            {answers.map((answer,idx) => {
              return(
                <button key={idx} className={`normal-button${answer === clickedButton ? ' clicked-button' : ''}`}
                onClick={() => handleButtonClick(answer)}
                dangerouslySetInnerHTML={{__html:answer}}/>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
