import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
	return (
		<ProductsSectionContainer>
			{[...new Array(12).keys()].map(() => (
				<ProductCard />
			))}
		</ProductsSectionContainer>
	);
};

const ProductsSectionContainer = styled.section`
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
export default ProductsSection;
