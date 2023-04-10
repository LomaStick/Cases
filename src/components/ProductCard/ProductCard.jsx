import React, { useMemo, useState } from 'react';
import Select from '../UI/Select/Select';
import './ProductCard.scss'
import Size from './Size';
import { useColors } from '../../hooks/useProduct';
const ProductCard = ({product}) => {
	const [selected, setSelected] = useState(product.colors[0]);

	// const color = useMemo (()=>{
	// 	return product.colors.find((color) => color === selected)
	// },[selected])
	const color = useColors(product, selected)
	console.log(color)

	return (
		<div className='productCard'>
				<div className="productCard__wrapper">
					<div key={color.id} className='productCard__img'>
						<img src={color.images[0]} alt="" />
						<img src={color.images[1]} alt="" />
					</div>
					<div className='productCard__content'>
						<h2 className='productCard__title'>{product.name}</h2>
						<Size sizes = {color.sizes} />
						<div className='productCard__color'>Цвет: 
							<Select value = {selected} options = {product.colors}  onChange ={(color)=>setSelected(color)} />
						</div>
						<p>Описание: {color.description}</p>
						<p>Цена: {color.price}</p>
					</div>
				</div>
		</div>	
	);
}

export default ProductCard;
