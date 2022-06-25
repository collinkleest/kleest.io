import React from 'react';
import './App.css';
import { Button, Container } from '@mui/material';

function App() {
  return (
    <div>
      <Container maxWidth="lg">
        <h1>Collin <b>Kleest</b></h1>
        <h2>Full Stack Software Engineer</h2>

        <p>
          Hello my name is Collin Kleest, I am an avid software engineer that loves to program.
        </p>
        <h4>Live, Learn, Invent, and Repeat</h4>

        <Button variant="outlined">About Me</Button>
        <Button variant="outlined">Resume</Button>
        <Button variant="outlined">My Work</Button>
        <Button variant="outlined">Projects</Button>

      </Container>
    </div >
  );
}

export default App;
