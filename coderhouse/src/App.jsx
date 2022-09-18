import React from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import './App.css'
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return (
        //fragment 
        <>        
        <Navbar/>
        <ItemListContainer/>
      </>

    );
}

export default App;

