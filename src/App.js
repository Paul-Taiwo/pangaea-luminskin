import Cart from "components/Cart";
import HeroSection from "components/HeroSection";
import Portal from "components/Portal";
import Products from "components/Products";
import React from "react";
// import styled from "styled-components";
// import logo from "./logo.svg";
import "./App.css";

const App = () => {
	return (
		<>
			<Portal>
				<Cart open />
			</Portal>
			<HeroSection />
			<Products />
		</>
	);
};

export default App;
