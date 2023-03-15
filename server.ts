import { Environment } from "./config/env";
import { config } from "./config";
import app from "./app/app";

Environment.setup();


app.listen(config.SERVER_PORT, () => {
    console.log(`Listening on port ${config.SERVER_PORT} in ${config.NODE_ENV} mode`);
});

process.on("uncaughtException", e => {
    console.log(e);
    process.exit(1);
});

process.on("unhandledRejection", e => {
    console.log(e);
    process.exit(1);
});
