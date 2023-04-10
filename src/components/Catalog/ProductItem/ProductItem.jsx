import React from 'react';
import "./ProductItem.scss"
import { Link } from 'react-router-dom';

const ProductItem = ( {product} ) => {
	console.log(product.colors)
	return (
		<div className='productItem'>
			<h4 className='productItem__title'> {product.name}</h4>
			{!product.colors.length > 1
				? <h2> только 1 </h2>
				:  <Link to={`${product.id}`} className="productItem__colors">
						{product.colors.map((color) => <img key={color.id} src={color.images[0]} alt="" />)}
					</Link>
			}
		</div>
	);
}

export default ProductItem;
