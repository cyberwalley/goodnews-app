const { productTable } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    try {
        const products = await productTable.select().firstPage();
        const formattedProducts = products.map((product) => ({
            id: product.id,
            ...product.fields,
        }));
        return formattedReturn(200, formattedProducts);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {});
    }
};