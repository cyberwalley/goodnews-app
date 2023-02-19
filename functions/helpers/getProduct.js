const { productTable } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async event => {
  /*  const recordId = event.queryStringParameters.id;
  try {
    const record = productTable.find(recordId);
    return formattedReturn(200, record);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  } */
  const recordId = event.queryStringParameters.id;
  try {
    /* const query = await productTable.selectRecordsAsync({
      fields: [],
    }); */

    const query = await productTable.selectRecordsAsync({
      fields: ['Products'],
    });
    const records = query.records.filter(record => {
      return record.title === 'Product1';
    });

    //const match = query.records.find(record => record.title === 'Lefant');
    //const match = query.records[0].getCellValue('title');
    return formattedReturn(200, records);
  } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  }
};

/* try {
  const products = await productTable.select().firstPage();
  const formattedProducts = products.map(product => ({
    id: product.id,
    ...product.fields,
  }));
  return formattedReturn(200, formattedProducts);
} catch (err) {
  console.error(err);
  return formattedReturn(500, {});
} */
/* 
let vendorTable = base.getTable('Vendors');
let query = await vendorTable.selectRecordsAsync();

let exampleValue = query.records[0].getCellValue('Quoted Parts'); */
