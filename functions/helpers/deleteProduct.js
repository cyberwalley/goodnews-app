const { productTable } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async event => {
  const { id } = JSON.parse(event.body);
  try {
    const deletedProduct = await productTable.destroy(id);
    return formattedReturn(200, deletedProduct);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};
