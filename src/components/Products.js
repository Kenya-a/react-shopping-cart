import React from 'react';

// Components
import Product from './Product';

const { products, addItem } = useContext(ProductContext);

const Products = props => {
	return (
		<div className="products-container">
			{props.products.map((
				<Product
					key={id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
