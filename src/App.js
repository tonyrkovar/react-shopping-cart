import React, { useState, useContext } from 'react';
import { Route } from 'react-router-dom';
import { useParams } from 'react-router';
import data from './data';

import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	// const { id } = useParams();

	const addItem = item => {
		setCart([...cart, item])
	};

	const removeItem = id => {
		setCart(cart.filter((item) => item.id !== id))
		console.log('triggered')
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, removeItem }}>
					<Navigation />
					<Route
						exact
						path="/"
						component={Products}
					/>
					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
