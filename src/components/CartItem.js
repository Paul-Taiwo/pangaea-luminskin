import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useCart from "context/cart";
import currencyFormatter from "utils/currencyFormatter";
import useProducts from "context/products";

const CartItem = ({ item }) => {
	const { updateQuantity, removeFromCart } = useCart();
	const { currency } = useProducts();

	return (
		<Product>
			<Close
				className="cursor-pointer"
				onClick={(e) => removeFromCart(e, item.id)}
			>
				X
			</Close>
			<ProductDescription>
				<ProductName>{item.title}</ProductName>

				<Quantity>
					<Selector>
						<CounterAction
							className="cursor-pointer"
							onClick={() => updateQuantity(item.id, "decrement")}
						>
							-
						</CounterAction>
						<Count> {item.quantity} </Count>
						<CounterAction
							className="cursor-pointer"
							onClick={() => updateQuantity(item.id, "increment")}
						>
							+
						</CounterAction>
					</Selector>
					<Price>
						{currencyFormatter(item.priceRaw * item.quantity, currency)}
					</Price>
				</Quantity>
			</ProductDescription>
			<ProductImage className="text-center">
				<Image src={item.image_url} alt={item.title} />
			</ProductImage>
		</Product>
	);
};

const Product = styled.div`
	height: 150px;
	margin-bottom: 20px;
	display: flex;
	position: relative;
	align-items: center;
	background-color: #fff;
	/* width: 100%; */
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
	max-height: 100px;
	max-width: 100px;
	object-fit: contain;
`;

const Close = styled.button`
	position: absolute;
	top: 5px;
	right: 10px;
	border: none;
	background-color: #fff;
`;

CartItem.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		image_url: PropTypes.string.isRequired,
		quantity: PropTypes.number.isRequired,
		price: PropTypes.string.isRequired,
		priceRaw: PropTypes.number.isRequired,
	}).isRequired,
};

export default CartItem;
