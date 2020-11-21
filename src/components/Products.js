import React from "react";
import styled from "styled-components";

import useProducts from "context/products";
import ProductCard from "./Product";

const Products = () => {
	const { products } = useProducts();

	return (
		<ProductsSection>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</ProductsSection>
	);
};

const ProductsSection = styled.section`
	padding: 25px;
	background-color: #e2e6e3;
	display: grid;
	grid-gap: 0.75rem;
	margin-left: auto;
	margin-right: auto;
	grid-template-columns: repeat(2, 1fr);

	@media screen and (min-width: 768px) {
		padding: 4%;
		grid-gap: 3.4rem;

		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: 992px) {
		padding: 4% 6%;
	}

	@media screen and (min-width: 1200px) {
		column-gap: 14rem;
		row-gap: 8rem;
		padding: 4% 10%;
	}
`;
export default Products;
