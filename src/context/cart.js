import React, { createContext, useContext, useEffect, useState } from "react";
import currencyFormatter from "utils/currencyFormatter";
import useProducts from "./products";

const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

	const { currency, products } = useProducts();

	const showCart = () => setIsCartOpen(true);
	const hideCart = () => setIsCartOpen(false);

	const calculateToTal = () => {
		const total = cartItems.reduce((acc, item) => {
			const price = item.quantity * item.priceRaw;
			return acc + price;
		}, 0);

		const formattedPrice = currencyFormatter(total, currency);

		setCartTotal(formattedPrice);
	};

	const updateQuantity = (itemId, updateType) => {
		if (!updateType) return;

		// Duplicate Cart
		const oldCartItems = [...cartItems];

		// Find the product and the product index
		const product = oldCartItems.find((x) => x.id === itemId);
		const productIndex = oldCartItems.findIndex((x) => x.id === itemId);

		if (updateType === "increment") {
			// Increase quantity
			product.quantity += 1;
			oldCartItems[productIndex] = product;
		}

		if (updateType === "decrement") {
			if (product.quantity === 1) {
				// Remove from cart
				oldCartItems.splice(productIndex, 1);
			} else {
				// Increase quantity
				product.quantity -= 1;
				oldCartItems[productIndex] = product;
			}
		}

		const newItems = [...oldCartItems];

		setCartItems(newItems);
	};

	const removeFromCart = (event, itemId) => {
		event.preventDefault();
		const newItems = [...cartItems];
		const itemIndex = newItems.findIndex((item) => item.id === itemId);

		newItems.splice(itemIndex, 1);

		setCartItems([...newItems]);
	};

	const addToCart = (product) => {
		// check if item is already in cart
		const found = cartItems.find((item) => item.id === product.id);

		// if found update quantity
		if (found) {
			updateQuantity(product.id, "increment");
			return showCart();
		}

		const productItem = {
			...product,
			quantity: 1,
		};

		setCartItems([...cartItems, productItem]);
		return showCart();
	};

	useEffect(() => {
		calculateToTal();
	}, [cartItems]);

	useEffect(() => {
		/**
		 * When currency changes and product has been updated with
		 * new price, update items in cart
		 */
		const newItems = cartItems.map((cartItem) => {
			const found = products.find((item) => cartItem.id === item.id);

			const newCartItem = {
				...cartItem,
				priceRaw: found.priceRaw,
				price: found.price,
			};

			return newCartItem;
		});

		setCartItems(newItems);
	}, [products]);

	const value = {
		isCartOpen,
		cartItems,
		cartTotal,
		updateQuantity,
		showCart,
		hideCart,
		addToCart,
		removeFromCart,
	};

	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default function useCart() {
	const context = useContext(CartContext);

	return context;
}
