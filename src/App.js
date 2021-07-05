import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Contexts
import { CartContext } from './contexts/CartContext';
import { ProductContext } from './contexts/ProductContext';

function App() {
//data being passed
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
//2. Wrap component tree in provider component
//3. Pass data to the value property 👆
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={cart}>
				<div className="App">
					<Navigation cart={cart} />

					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>

					<Route
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
					/>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>

	);
}

export default App;
