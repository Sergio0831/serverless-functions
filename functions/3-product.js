const Airtable = require("airtable-node");
require("dotenv").config();

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appi0AGYV9RNsYnYY")
  .table("products");

// domain/.netlify/functions/1-hello
exports.handler = async (event, context) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const product = await airtable.retrieve(id);
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id: ${id}`
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product)
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Server error"
      };
    }
  }
  return {
    statusCode: 400,
    body: "Please provide product id"
  };
};
