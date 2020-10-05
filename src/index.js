import express from "express";

import constants from "config/constants";
import middleware from "config/middleware";

import "config/database";
import routes from "routes";

const app = express();

middleware(app);
routes(app);

app.listen(constants.PORT, (err) => {
  if (err) console.log("Something Went Wrong", err);

  console.log(`Server is listening at http://localhost:${constants.PORT}`);
});
