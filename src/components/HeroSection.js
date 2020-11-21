import React from "react";
import styled from "styled-components";

const HeroSection = () => {
	return (
		<HeroSectionContainer>
			<HeroHeader>
				<HeroHeaderText>All Products</HeroHeaderText>
				<HeroHeaderSubText>A 360° look at Lumin</HeroHeaderSubText>
			</HeroHeader>

			<HeroFilterContainer>
				<Select placeholder="Filter by">
					<option value="single-product" disabled selected>
						Filter by
					</option>
					<option value="all-products">All Products</option>
					<option value="new-products">New Products</option>
					<option value="sets">Sets</option>
					<option value="skincare">Skincare</option>
					<option value="hair-and-body">Hair &amp; Body Care</option>
				</Select>
			</HeroFilterContainer>
		</HeroSectionContainer>
	);
};

const HeroSectionContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 70px 25px 25px;
	background-color: #fcfcf9;
	border: 1px solid red;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		min-height: 321px;
		align-items: flex-end;
	}
`;

const HeroHeader = styled.section`
	@media screen and (min-width: 768px) {
		padding-right: 20px;
		max-width: 500px;
		margin: 0 auto;
		width: 50%;
	}
`;

const HeroHeaderText = styled.h2`
	font-size: 32px;
	letter-spacing: 0.19px;
	margin-bottom: 10px;

	@media screen and (min-width: 768px) {
		font-size: 48px;
		margin-bottom: 26px;
		letter-spacing: 0px;
	}
`;

const HeroHeaderSubText = styled.p`
	font-size: 16px;
	letter-spacing: 0.03px;
	text-transform: none;
	color: var(--heavy-metal);
	margin-bottom: 20px;

	@media screen and (min-width: 768px) {
		margin-bottom: 36px;
	}
`;

const HeroFilterContainer = styled.div`
	@media screen and (min-width: 768px) {
		max-width: 333px;
		width: 50%;
		margin: 0 auto;
	}
`;

const Select = styled.select`
	width: 100%;
	border: 1px solid #cdd1ce;
	background: transparent
		url(https://cdn.shopify.com/s/files/1/0044/1237/5107/files/down.png?v=1583510959)
		no-repeat;
	background-size: 10px;
	background-position: 95%;
	background-color: transparent;
	padding: 20px;
	font-size: 13px;
	letter-spacing: 0.03px;
	font-family: FF Bau Medium, san-serif;
	margin-bottom: 35px;
	color: #4b5548;
	appearance: none;
`;
export default HeroSection;
