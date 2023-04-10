import React,  { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
import ProductList from '../components/Catalog/ProductList/ProductList';

const CatalogPage = () => {
	const [products, setProducts] = useState([]);
	const [fetchProducts, isProductsLoading, productsError ] = useFetching(async ()=> {
		const data = await getProducts()
		setProducts(data)
	})
	useEffect(()=>{
		fetchProducts();
	},[])
	return (
		<div className='catalog'>
			<main className='catalog__content'>
				{productsError && <h4 className='catalog-content_error'> произошла ошибка ${productsError} </h4>}
				{isProductsLoading 
					? <Loader />
					: <ProductList products={products} />
				}
			</main>
		</div>
	);
}

export default CatalogPage;
