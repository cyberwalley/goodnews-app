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
  //const recordId = event.queryStringParameters.id;
  //try {
  /* const query = await productTable.selectRecordsAsync({
      fields: [],
    }); */

  /* const query = await productTable.selectRecordsAsync({
      fields: ['Products'],
    });
    const records = query.records.filter(record => {
      return record.title === 'Product1';
    }); */
  //const recordId = event.queryStringParameters.id;
  /*  const query = await productTable.selectRecordsAsync({
    fields: ['title'],
  });
  const records = query.records.find(
    //record => record.getCellValue('title') !== recordId,
    rec => rec.title === 'Product1',
  );

  if (records) {
    return formattedReturn(200, records);
  } */

  /* var Airtable = require('airtable');
  var base = new Airtable({
    apiKey:
      'patnbhqWq2NCxewM8.1567c84c1d9e1854ad31f96fc3a557d0bf1359cde295a63bcacf32459e398d6c',
  }).base('appcIC8f0Eb96WxcK');
  const gen = base.getTable('products');
  let query = await gen.selectRecordsAsync();

  let exampleValue = query.records[0].getCellValue('title');
  return formattedReturn(200, exampleValue); */

  /* roductTable

  //const match = query.records.find(record => record.title === 'Lefant');
  //const match = query.records[0].getCellValue('title');

  /* productTable
    .select({
      filterByFormula: "title = 'Product1'",
    })
    .eachPage(function page(err, records) {
      // This function (`page`) will get called for each page of records.
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        return console.log('retreived', record.get('title'));
      });
    }); */
  /*  .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: 'Grid view',
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
          console.log('Retrieved', record.get('title'));
          return formattedReturn(200, record.get('title'));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      },
    ); */

  //return formattedReturn(200, records);
  /* } catch (err) {
    console.error(err);
    return formattedReturn(500, {});
  } */
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
