import mongoose, { Schema } from "mongoose";

const CurrencySchema = new Schema(
  {
    code: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    symbol: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Currency", CurrencySchema);
