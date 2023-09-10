/********************* Hi my name is Shreyas Kulkarni and I am a ReactJS developer with 2 years of Experience. *****************************
 
 * Lets go through this project and understand in detail the basics of props, how to access the data object using map, how to build your projects breaking each part into a component.
 * You can find all the images in assets folder in public and we are just using two files index.js and index.css.
 
 * 1st Component is the APP component which renders the other components Heading, Menu and Footer
 
 * 2nd Component is Heading => This component renders the heading of the app. In this I have give a style as an object to the tag to pass the css effects which is called as Inline CSS.
 
 * 3rd Component is Menu => This is the most important component let's understand this component in detail
       1. we have the pizza data in form of JSON Object and we are checking the length of that object. Using ternary operator we are rendering the pizza data on basis of length.
       2. Now we have created another component as Pizza and we are passing the props to this component from the parent component. And this Pizza component is 
          rendering those properties.
       3. Using map function we are mapping the json object. 

 * 4th Component is Footer => This component gets the time in hours using Date function and calculates the the opening and closing of the shop. 
        We also have created another component ORDER which will get the openhour and closehour from its parent and display the result as per the logic. 
  
*/

import React from 'react';
import './index.css';
import ReactDom from 'react-dom/client';

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "assets/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "assets/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "assets/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "assets/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "assets/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "assets/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return <div className='container'>
        <Heading />
        <Menu />
        <Footer />
    </div>
}

function Heading() {
    // const style = { color: 'red' };  in this way we can pass the inline CSS too or else inside the tag for which we need the CSS.
    const style = {};
    return <header className='header'>
        <h1 style={style}>Welcome to Shreyas's Kitchen</h1>
    </header>
}

function Menu() {
    const pizzas = pizzaData;
    const numPizza = pizzas.length;
    return <main className='menu'>
        <h2>Our Pizza Menu</h2>

        {numPizza > 0 ? (
            <>
                <p>
                    Authentic Italian cuisine. 6 creative dishes to choose from. All
                    from our stone oven, all organic, all delicious.
                </p>
                <ul className='pizzas'>
                    {pizzas.map((pizza) => <Pizza pizzaObj={pizza} key={pizza.name} />)}
                </ul>
            </>
        ) : (<>
            <p>We're still working on our menu. Please come back later :)</p>
        </>)}

    </main>
}

function Pizza({ pizzaObj }) {
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return <footer>
        {isOpen ? (
            <Order closeHour={closeHour} openHour={openHour} />
        ) : (
            <p>
                We're happy to welcome you between {openHour}:00 and {closeHour}:00.
            </p>
        )}
    </footer>

}

function Order({ closeHour, openHour }) {
    return (
        <div className="order">
            <p>
                We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
                online.
            </p>
            <button className="btn">Order</button>
        </div>
    )

}
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>)


