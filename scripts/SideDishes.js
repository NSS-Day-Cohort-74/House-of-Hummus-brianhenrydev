import { setSide } from "./TransientState.js";

const handleSideChange = ({ target: { name, value } }) => {
	name === "side-choice" && setSide(value);
};
document.addEventListener("change", handleSideChange);
export const Sides = async () => {
	const res = await fetch("http://localhost:8088/sides");
	const sides = await res.json();
	return sides
		.map(
			({ title, price, id }) =>
				`<div class="radio-btn"><input type="radio" name="side-choice" data-price="${price}" value="${id}"/> ${title}<div>`,
		)
		.join("");
};
