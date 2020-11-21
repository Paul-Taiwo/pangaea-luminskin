import React from "react";
import styled from "styled-components";

const CartItem = () => {
	return (
		<Product>
			<ProductDescription>
				<ProductName>Dark Circle Defence</ProductName>

				<Quantity>
					<Selector>
						<CounterAction className="cursor-pointer">-</CounterAction>
						<Count> 1 </Count>
						<CounterAction className="cursor-pointer">+</CounterAction>
					</Selector>
					<Price>US$57.29</Price>
				</Quantity>
			</ProductDescription>
			<ProductImage>
				<Image
					src="https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/classic-maintenance.png"
					alt="Product"
				/>
			</ProductImage>
		</Product>
	);
};

const Product = styled.div`
	height: 150px;
	margin-bottom: 20px;
	display: flex;
	display: flex;
	align-items: center;

	background-color: #fff;
`;

const ProductDescription = styled.div`
	color: #1e2d2b;
	width: 65%;
	line-height: 18px;
	font-size: 10px;
	padding: 15px 13px 13px 21px;
	letter-spacing: 0.02px;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: space-between;
`;

const ProductName = styled.h6`
	font-size: 13px;
	letter-spacing: 0.03px;
	line-height: 1.5;
`;

const Quantity = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Selector = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px;
	border: 0.5px solid #bcbcbc;
	width: 76px;
`;

const CounterAction = styled.span`
	color: #000;
	font-size: 15px;
`;

const Count = styled.span`
	padding: 0 10px;
	font-size: 14px;
`;

const Price = styled.p`
	padding: 0 10px;
	font-size: 14px;
	margin-bottom: 0;
	letter-spacing: 0.03px;
`;

const ProductImage = styled.div`
	width: 30%;
`;

const Image = styled.img`
	width: 100%;
`;

export default CartItem;
