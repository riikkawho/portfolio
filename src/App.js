import React from 'react'
import './App.css'
import { Container } from '@mui/material';
import Comment from './components/comment';
import Info from './components/info';
import QuestAns from './components/questAns';
import RepoDetails from './components/repodetails';

const App = () => {
return (
<div>
  <div style={{ 
    display: "grid", 
    gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, height: "100%"}}>
    <div > 
    <Container 
      sx={{ height: '100%', width: '30' }} 
      style={{backgroundColor: "whitesmoke", borderRadius: "10px"}}>
      <Info /> 
      <RepoDetails/> 
    </Container>
  </div>
  <div>
    <Container 
      sx={{ height: '100%' }} 
      style={{ backgroundColor: "lightgrey", borderRadius: "10px" }}>
      <QuestAns />
    </Container>
  </div>  
  <div>
    <Container sx={{ height: '100%' }} 
      style={{ backgroundColor: "whitesmoke", borderRadius: "10px" }}>
      <Comment />
    </Container>
    </div>
  </div> 
</div>
  )
}

export default App;

