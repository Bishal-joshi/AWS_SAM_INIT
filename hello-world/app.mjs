/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
// http://127.0.0.1:3000/hello?param1=value1&param2=value2
export const lambdaHandler = async (event, context) => {
  const queryParams = event.queryStringParameters;
  try {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Query Recieved", data: queryParams }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }
};
