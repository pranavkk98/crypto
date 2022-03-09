import { makeStyles } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import CoinPage from './Pages/CoinPage'
import HomePage from './Pages/HomePage'

const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "black",
      color: "blue",
      minHeight: "100vh",
    },
  }));
  
  function App() {
    const classes = useStyles();
  
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Route path="/" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} exact />
        </div>
      </BrowserRouter>
    );
  }
  
  export default App;