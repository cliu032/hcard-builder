import React from 'react';
import './App.css';
import { theme } from './components/UI/theme'
import { ThemeProvider } from '@material-ui/core'
import { HCard } from './components/HCard';

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <HCard />
      </ThemeProvider>
    </div>
  );
}

export default App;
