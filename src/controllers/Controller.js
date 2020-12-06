export default {
  hello: async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({
        serverOn: true,
        accessedAt: Date()
      }),
    };
  },

};