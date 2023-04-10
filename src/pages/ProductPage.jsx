import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { getProduct } from '../services/api';
import Loader from '../components/UI/Loader/Loader';
import ProductCard from '../components/ProductCard/ProductCard';

const ProductPage = () => {
	const id  = Number(useParams().id); 
	const [product, setProduct] = useState (null);
	const [fetchProductById, isProductLoading, productError] = useFetching ( async ()=>{ 
		const data = await getProduct (id) 
		data? setProduct(data): setProduct(null)
	}) 
	useEffect (()=>{ 
		fetchProductById()
		}, [id])

	return (
		<div className='productPage'>
			{productError && <h4 className='catalog-content_error'> произошла ошибка ${productError} </h4>}
			{isProductLoading 
				? <Loader />
				: (product === null) 
				? <h4> Товар не найден... </h4>
				: <ProductCard product={product} />
			}
		</div>
	);
}

export default ProductPage;
