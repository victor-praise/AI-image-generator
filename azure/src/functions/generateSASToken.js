const { app } = require("@azure/functions");
const generateSASToken = require("../../lib/generateSASToken");

app.http("generatesastoken", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    sasToken = await generateSASToken();

    return { body: sasToken };
  },
});