import axios from 'axios';

export const getProducts = () => {
  return axios.get('/api/products').then(res => res.data);
};

export const getProduct = id => {
  return axios.get(`/api/single-product?id:${id}`).then(res => res.data);
};

export const createProduct = ({ title, body }) => {
  return axios
    .post('https://api.netlify.com/api/v1/sites', {
      title,
      body,
    })
    .then(res => res.data);
};
