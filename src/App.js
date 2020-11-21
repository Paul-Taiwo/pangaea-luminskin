import React from "react";

import Cart from "components/Cart";
import HeroSection from "components/HeroSection";
import Portal from "components/Portal";
import Products from "components/Products";
import { CartProvider } from "context/cart";
import "./index.css";
import { ProductProvider } from "context/products";

const App = () => {
	return (
		<ProductProvider>
			<CartProvider>
				<Portal>
					<Cart />
				</Portal>
				<HeroSection />
				<Products />
			</CartProvider>
		</ProductProvider>
	);
};

export default App;
