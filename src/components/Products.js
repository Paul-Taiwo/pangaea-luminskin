import React, { useEffect, useState } from "react";
import { gql } from "@apollo/client";
import styled from "styled-components";

import client from "client";
import ProductCard from "./Product";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		client
			.query({
				query: gql`
					query Products {
						products {
							id
							title
							image_url
							price(currency: USD)
						}
					}
				`,
			})
			.then((result) => setProducts(result.data.products));
	}, []);

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
	grid-template-columns: repeat(2, 1fr);

	@media screen and (min-width: 768px) {
		padding: 4%;
		grid-gap: 3.4rem;

		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: 992px) {
		padding: 4% 8%;
	}

	@media screen and (min-width: 1200px) {
		column-gap: 14rem;
		row-gap: 8rem;
	}
`;
export default Products;
