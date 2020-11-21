const currencyFormatter = (number, currencyName = "USD") =>
	new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: currencyName,
		currencySign: "accounting",
		currencyDisplay: "symbol",
	}).format(number);

export default currencyFormatter;
