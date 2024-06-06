import axios from "axios";

const URL_API="https://api.escuelajs.co/api/v1/products";

export const getProductos = async () => {
    return axios.get(URL_API);
}

export const getProductoById = async (id) => {
    return axios.get(URL_API + "/" + id);
}

export const postProducto = async (producto) => {
    const response = await axios.post(`${URL_API}/`, producto);
    return response;
};

export const putProducto = async (id, producto) => {
    const response = await axios.put(`${URL_API}/${id}`, producto);
    return response;
};