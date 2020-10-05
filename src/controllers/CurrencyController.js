import HTTPStatus from "http-status";

import Currency from "models/Currency";

export const createCurrency = async (req, res) => {
  try {
    const currency = new Currency(req.body);
    currency.save();

    return res
      .status(HTTPStatus.OK)
      .json({ message: "Currency Saved Succesfully" });
  } catch (err) {
    return res.status(HTTPStatus.BAD_REQUEST).json(err);
  }
};
