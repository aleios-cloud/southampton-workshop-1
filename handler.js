module.exports.hello = async () => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: 'Hello from building 16!',
    },
    null,
    2,
  ),
});
