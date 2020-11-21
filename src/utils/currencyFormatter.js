const currencyFormatter = (number, currency) =>
	new Intl.NumberFormat("en-US", {
		style: "currency",
		currency,
		currencySign: "accounting",
		currencyDisplay: "narrowSymbol",
	}).format(number);

export default currencyFormatter;
