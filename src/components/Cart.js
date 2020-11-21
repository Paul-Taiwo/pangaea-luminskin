import React, { useEffect, useState } from "react";
import styled from "styled-components";
import client from "client";
import { gql } from "@apollo/client";

import useCart from "context/cart";
import useProducts from "context/products";
import CartItem from "./CartItem";

const Cart = () => {
	const { isCartOpen, hideCart, cartTotal, cartItems } = useCart();
	const { currency, updateCurrency } = useProducts();

	const [currencyList, setCurrencyList] = useState([]);

	useEffect(() => {
		client
			.query({
				query: gql`
					query Currency {
						currency
					}
				`,
			})
			.then((result) => setCurrencyList(result.data.currency));
	}, []);

	useEffect(() => {
		if (isCartOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	}, [isCartOpen]);

	return (
		<Overlay open={isCartOpen}>
			<Form>
				<Header>
					<Col>
						<CloseButton onClick={hideCart}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 492.004 492.004"
								style={{
									height: "15px",
									width: "10px",
									fill: "rgb(43, 46, 43)",
								}}
							>
								<path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12    c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028    c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265    c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z" />
							</svg>
						</CloseButton>
					</Col>
					<Col>
						<HeaderText>YOUR CART</HeaderText>
					</Col>
					<Col />
				</Header>

				<CurrencySelectContainer>
					<CurrencySelect value={currency} onChange={updateCurrency}>
						{currencyList &&
							currencyList.map((currencyValue) => (
								<option key={currencyValue} value={currencyValue}>
									{currencyValue}
								</option>
							))}
					</CurrencySelect>
				</CurrencySelectContainer>

				<CartBody>
					<div>
						{cartItems.length !== 0 &&
							cartItems.map((item) => <CartItem key={item.id} item={item} />)}

						{cartItems.length === 0 && (
							<p className="text-center">No item in your cart</p>
						)}
					</div>
				</CartBody>

				<CartFooter>
					<CartSubTotal>
						<p>Subtotal</p>
						<p>{cartTotal}</p>
					</CartSubTotal>

					<Proceed className="cursor-pointer">Proceed to Checkout</Proceed>
				</CartFooter>
			</Form>
		</Overlay>
	);
};

const Overlay = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(110, 123, 112, 0.4);
	pointer-events: ${(props) => (props.open ? "auto" : "none")};
	z-index: ${(props) => (props.open ? 500 : 0)};
	opacity: ${(props) => (props.open ? 1 : 0)};
	transition: all 0.4s ease-in-out;
`;

const Form = styled.form`
	top: 0;
	left: auto;
	right: 0;
	display: flex;
	position: fixed;
	background-color: #f2f2ef;
	flex-direction: column;
	height: 100%;
	width: 100%;
	max-width: 550px;
	z-index: 1500;
	overflow-x: auto;
	transition: opacity 0.4s ease-in-out 0.1s,
		-webkit-transform 0.4s cubic-bezier(0.28, 0.47, 0.29, 0.86);
	opacity: 1;
	/* transform: translateX(100%); */
	transform: translateX(0%);
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	padding: 20px 0;
`;

const Col = styled.div`
	width: calc(100% / 3);
`;

const HeaderText = styled.div`
	color: #696969;
	font-weight: 400;
	letter-spacing: 1px;
	font-style: normal;
	font-size: 10px;
	text-align: center;
	margin-bottom: 0;
	line-height: 1.2;
`;

const CloseButton = styled.div`
	width: 25px;
	height: 25px;
	border-radius: 50%;
	border: 1px solid rgb(198, 204, 199);
	align-items: center;
	display: flex;
	justify-content: center;
	margin-left: 24px;
`;

const CurrencySelectContainer = styled.div`
	padding: 10px 20px 0;
`;

const CurrencySelect = styled.select`
	background-color: #fff;
	padding: 8px 13px 5px 10px;
	background-position: 100% 60%;
	border: none;
`;

const CartBody = styled.div`
	padding-left: 20px;
	padding-right: 20px;
	flex: 1;
	overflow-y: auto;
	margin-top: 20px;
	margin-bottom: 20px;
`;

const CartFooter = styled.div`
	border-top: 1px solid #d0d0d0;
	box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.15);
	z-index: 1;
	padding: 0 20px 20px;
`;

const CartSubTotal = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
	padding-top: 15px;
	margin-bottom: 10px;
`;

const Proceed = styled.button`
	margin-top: 15px;
	font-size: 12px;
	border: none;
	text-align: center;
	font-weight: 400;
	color: #fff;
	letter-spacing: 2px;
	padding: 16px 20px;
	width: 100%;
	background-color: #4b5548;
`;

export default Cart;
