const formattedReturn = require('./helpers/formattedReturn');
//const getProducts = require('./helpers/getProducts');
const getProduct = require('./helpers/getProduct');
const createProduct = require('./helpers/createProduct');
const deleteProduct = require('./helpers/deleteProduct');
const updateProduct = require('./helpers/updateProduct');
exports.handler = async event => {
  if (event.httpMethod === 'GET') {
    return await getProduct(event);
  } else if (event.httpMethod === 'POST') {
    return await createProduct(event);
  } else if (event.httpMethod === 'PUT') {
    return await updateProduct(event);
  } else if (event.httpMethod === 'DELETE') {
    return await deleteProduct(event);
  } else {
    return formattedReturn(405, {});
  }
};