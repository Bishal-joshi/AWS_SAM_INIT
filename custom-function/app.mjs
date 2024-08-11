export const lambdaHandler = async (event, context) => {
  const method = event.httpMethod;

  if (method === "GET") {
    // Handle GET request
    const queryParams = event.queryStringParameters || {};
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "GET request received",
        data: queryParams,
      }),
    };
  } else if (method === "POST") {
    // Handle POST request
    const requestBody = JSON.parse(event.body || "{}");
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "POST request received",
        data: requestBody,
      }),
    };
  } else {
    // Handle unsupported method
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }
};
