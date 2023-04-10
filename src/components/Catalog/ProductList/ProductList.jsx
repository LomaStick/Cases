import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.scss'

const ProductList = ({products}) => {

	return (
		<div className='product__list'>
			{!products.length 
				? <h4>Каталог пуст</h4>
				: products.map((product) => 
					<ProductItem key={product.id} product={product} /> 
				)}
		</div>
	);
}

export default ProductList;
