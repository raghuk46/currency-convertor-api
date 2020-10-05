import HTTPStatus from "http-status";

import Conversion from "models/Conversion";

export const getRate = async (req, res) => {
  try {
    let list = {};
    const query = req.query.q;
    if (query) {
      const conversionList = await Conversion.find({
        currencyQuery: { $in: [...query.split(",")] },
      })
        .populate("fromCurrency")
        .populate("toCurrency");

      if (conversionList) {
        conversionList.map((item) => {
          list[item.currencyQuery] = item.rate;
        });
      }

      return res.status(HTTPStatus.OK).json(list);
    }
  } catch (err) {
    return res.status(HTTPStatus.BAD_REQUEST).json(err);
  }
};

export const createRate = async (req, res) => {
  try {
    const rate = new Conversion(req.body);
    rate.save();

    return res
      .status(HTTPStatus.OK)
      .json({ message: "Successfully Created Rate" });
  } catch (err) {
    return res.status(HTTPStatus.BAD_REQUEST).json(err);
  }
};
