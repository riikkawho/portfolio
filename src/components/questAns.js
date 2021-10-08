import React, { useState } from "react"
import questSheetPersonal from '../sheets/questionsPersonal'
import questSheetProf from '../sheets/questionsProf'
import { Button, ListItemButton, ListItemText, Card } from '@mui/material'

  const QuestAns = () => {
    const [questions, setQuestions] = useState([])
    const [personal, setPersonal] = useState(0)
    const [professional, setProfessional] = useState(0)
    const [toShow, setToShow] = useState()
      
  const onClickPersonal = (event) => {
    event.preventDefault()
    setPersonal(1)
    setProfessional(0)
    setToShow()
    setQuestions(questSheetPersonal)
  }
  
  const onClickProf = (event) => {
    event.preventDefault()
    setProfessional(1)
    setPersonal(0)
    setToShow()
    setQuestions(questSheetProf)
  }
  
  const onClickAnswer = (index) => { 
    toShow === index 
     ? setToShow()
     : setToShow(index)
  }

    return (
      <div>
        <h2>Mock interview</h2>
          {personal === 0 && professional === 0
            ? <><Button onClick={onClickPersonal} type="click">Personal</Button>
              <Button onClick={onClickProf} type="click">Professional</Button>
              <br/>Select a topic to discuss</>
              
            : <><Button onClick={onClickPersonal} type="click">Personal</Button>
              <Button onClick={onClickProf} type="click">Professional</Button>

              <br/> {questions.map((question, index) => 
                      toShow === index
                        ? <Card key={question.question} style={{backgroundColor: "whitesmoke"}}>
                          <ListItemButton onClick={() => onClickAnswer(index)}>
                          <ListItemText  primary={question.question} secondary={question.answer}/>
                          </ListItemButton>
                          </Card>
            
                        : <ListItemButton key={question.question} onClick={() => onClickAnswer(index)}>
                          <ListItemText primary={question.question} />
                          </ListItemButton>)}</>
          }
      </div>
    )
  }

  export default QuestAns;