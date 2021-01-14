"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./config/app");
const PORT = 8080;
app_1.default.listen(PORT, () => {
    console.log("server is in running mode !");
});
