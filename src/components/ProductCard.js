import React from "react";
import styled from "styled-components";

const ProductCard = () => {
	return (
		<Card>
			<ProductImageBox>
				<a href="/#">
					<ProductImage
						src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/age-management.png"
						alt=""
					/>
				</a>
			</ProductImageBox>
			{/* <ProductImage>card</ProductImage> */}
			<ProductTitle>Age Management Set </ProductTitle>
			<ProjectPrice>
				From <span data-product-code="10">$52.00</span>
			</ProjectPrice>

			<ProductBtn>Add to cart</ProductBtn>
		</Card>
	);
};

const Card = styled.div`
	text-align: center;
`;

const ProductImageBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	padding: 0 14px;
	min-height: 180px;
	text-align: center;
	width: 90%;

	@media screen and (min-width: 500px) {
		width: 60%;
		margin-left: auto;
		margin-right: auto;
	}

	@media screen and (min-width: 768px) {
		min-height: 220px;

		/* margin-top: -47px; */
	}

	@media screen and (min-width: 992px) {
		width: 53.5%;
	}

	@media screen and (min-width: 1200px) {
		width: 70%;
	}
`;

const ProductImage = styled.img`
	width: 100%;
	object-fit: contain;
	max-height: 180px;
`;

const ProductTitle = styled.h3`
	margin-bottom: 6px;
	height: 50px;

	font-size: 13px;
	line-height: 25px;
	color: var(--heavy-metal);

	@media screen and (min-width: 768px) {
		height: unset;
	}
`;

const ProjectPrice = styled.p`
	margin-bottom: 20px;
	font-size: 13px;
	color: #0b0c0d;

	@media screen and (min-width: 768px) {
		/* min-height: 220px; */
		margin-bottom: 20px;
		font-size: 16px;
	}
`;

const ProductBtn = styled.button`
	padding: 16px 12px;
	border: 0.5px solid #4b5548;
	text-align: center;
	cursor: pointer;
	width: 100%;
	font-size: 13px;
	background-color: #4b5548;
	color: #fcfcf9;
`;

export default ProductCard;
