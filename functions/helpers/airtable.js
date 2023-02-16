require('dotenv').config();
var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
);
const productTable = base(process.env.AIRTABLE_PRODUCTS_TABLE_ID);

module.exports = { productTable };