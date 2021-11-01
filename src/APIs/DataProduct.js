import axios from "axios";

const fetchDataProduct = () => {
	return axios.get("https://fakestoreapi.com/products");
};

export { fetchDataProduct };
