import React from "react";
import styled from "styled-components";

import useProducts from "context/products";
import Product from "./Product";

const Products = () => {
	const { loadingProducts, products } = useProducts();

	return (
		<>
			{loadingProducts && (
				<Loader className="text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						style={{
							margin: "auto",
							background: "rgb(226, 230, 227)",
							display: "block",
							shapeRendering: "auto",
						}}
						width="200px"
						height="200px"
						viewBox="0 0 100 100"
						preserveAspectRatio="xMidYMid"
					>
						<path
							d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
							fill="#4b5548"
							stroke="none"
						>
							<animateTransform
								attributeName="transform"
								type="rotate"
								dur="1s"
								repeatCount="indefinite"
								keyTimes="0;1"
								values="0 50 51;360 50 51"
							/>
						</path>
					</svg>
				</Loader>
			)}

			{!loadingProducts && (
				<ProductsSection>
					{products.map((product) => (
						<Product key={product.id} product={product} />
					))}
				</ProductsSection>
			)}
		</>
	);
};
const Loader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: #e2e6e3;
	min-height: 500px;
`;

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
