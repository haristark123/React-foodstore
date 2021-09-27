import Header from "./components/Layout/Header";
import React from "react";
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import {useState} from 'react'
import CartProvider from './store/ContextProvider'
import booty from './booty'
const App =()=>{
    const [cartAvailable,SetCartAvailable]=useState(false);

    function openCart(){
         SetCartAvailable(true)
         return
    }
     function closeCart(){
         SetCartAvailable(false)
         return 
    }
        return (
        <React.Fragment>
            <CartProvider>
                {cartAvailable && <Cart oncloseCart={closeCart}/>}
                <Header onCartOpen={openCart}/>
                <Meals />
                
                    
            </CartProvider>
            
        </React.Fragment>)
}
export default App;