import "regenerator-runtime/runtime.js";
import { Router } from "express";

import { createCurrency } from "controllers/CurrencyController";
import { getRate, createRate } from "controllers/ConversionController";

const routes = new Router();

routes.post("/create", createCurrency);
routes.post("/createRate", createRate);
routes.get("/convert", getRate);

export default (app) => {
  app.use("/api/v1", routes);
};
