export const initialState = {
	basket: [],
};

export const getBasketTotal = (basket) => {
	return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case "DELETE_FROM_CHECKOUT":
			const newBasket = state.basket.filter((item) => item.id !== action.id);
			return {
				...state,
				basket: newBasket,
			};
		default:
			return state;
	}
};

export default reducer;
