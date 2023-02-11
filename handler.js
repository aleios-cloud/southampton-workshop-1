const { DynamoDBClient, PutItemCommand } = require('@aws-sdk/client-dynamodb');

module.exports.hello = async (event) => {
  const ddbClient = new DynamoDBClient({region: 'us-east-1'});

  const params = {
    TableName: "Josh-Hackathon-Table",
    Item: {
      name: { S: JSON.parse(event.body).name},
    },
  };

  const data = await ddbClient.send(new PutItemCommand(params));

  return {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Hello from building 16!',
        data
      },
      null,
      2,
    ),
  }
};