import React, {useContext} from 'react';

//Context
//4. consume data in child component
import { ProductContext } from '../contexts/ProductContext'

// Components
import Product from './Product';

//change every instance of props so that this is getting data solely from the Context API.

const Products = () => {

	const { products, addItem } = useContext(ProductContext);

	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
