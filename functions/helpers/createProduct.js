const { productTable } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async event => {
  const fields = JSON.parse(event.body);
  try {
    const createdProduct = await productTable.create([{ fields }]);
    return formattedReturn(200, createdProduct);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};
