const { productTable } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async event => {
  const { id, ...fields } = JSON.parse(event.body);
  try {
    const updatedProduct = await productTable.update([{ id, fields }]);
    return formattedReturn(200, updatedProduct);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};
