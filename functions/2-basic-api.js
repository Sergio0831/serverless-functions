const items = require("../assets/data");
// domain/.netlify/functions/1-hello
exports.handler = async (event, context) => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    statusCode: 200,
    body: JSON.stringify(items)
  };
};
