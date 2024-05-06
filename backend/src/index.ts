import { app } from "./app";
import { config } from "./config/config";
import mongoConnection from "./model/mongoConnection";
(async function () {
  try {
    await mongoConnection();
    app.listen(config.port, () =>
      console.log(`Database sync and server listening on port ${config.port}!`)
    );
  } catch (error) {
    console.error("*****Connection failed!*****");
  }
})();
