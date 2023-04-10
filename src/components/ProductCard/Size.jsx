import React, { useState } from 'react';
import Select from '../UI/Select/Select';

const Size = ({sizes}) => {
	return (
		<div className='productCard__size_wrapper'>
			{sizes.length 
				? <p className='productCard__size' >
						<span className='productCard__size_title' >Размер :</span> 
						{sizes.map(size => <span key = {size} className='productCard__size_value'>{size}</span>)}
					</p>
				: <p className='productCard__size_empty'> Нет в наличии </p>
			}
		</div>
	);
}

export default Size;
