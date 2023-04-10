import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CatalogPage from '../pages/CatalogPage';
import ProductPage from '../pages/ProductPage';

const AppRoute = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<CatalogPage />}/>
				<Route path='/:id' element={<ProductPage />}/>
			</Routes>
		</div>
	);
}

export default AppRoute;
