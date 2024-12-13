export const Sales = async () => {
	const res = await fetch(
		"http://localhost:8088/orders?_expand=entree&_expand=vegetable&_expand=side",
	);
	const orders = await res.json();
	return orders
		.map(
			({
				id,
				entree: { price: entreePrice },
				vegetable: { price: vegetablePrice },
				side: { price: sidePrice },
			}) => {
				const price = (entreePrice + vegetablePrice + sidePrice).toLocaleString(
					"en-US",
					{
						style: "currency",
						currency: "USD",
					},
				);
				return `<div><h3>Receipt # ${id} = ${price}</h3></div>`;
			},
		)
		.join("");
};
