import { gql } from "@apollo/client";
import client from "client";
import React, { createContext, useContext, useEffect, useState } from "react";
import currencyFormatter from "utils/currencyFormatter";

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
	const [loadingProducts, setLoadingProducts] = useState(true);
	const [products, setProducts] = useState([]);
	const [currency, setCurrency] = useState("USD");

	const updateCurrency = (e) => {
		setCurrency(e.target.value);
	};

	useEffect(() => {
		client
			.query({
				query: gql`
					query Products {
						products {
							id
							title
							image_url
							price(currency: ${currency})
						}
					}
				`,
			})
			.then((result) => {
				const formattedProducts = result.data.products.map((product) => ({
					...product,
					priceRaw: product.price,
					price: currencyFormatter(product.price, currency),
				}));

				setProducts(formattedProducts);
				setLoadingProducts(false);
			});
	}, [currency]);

	return (
		<ProductContext.Provider
			value={{ products, currency, updateCurrency, loadingProducts }}
		>
			{children}
		</ProductContext.Provider>
	);
};

export default function useProducts() {
	const context = useContext(ProductContext);

	return context;
}
