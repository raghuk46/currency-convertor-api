import mongoose, { Schema } from "mongoose";

const ConversionSchema = new Schema(
  {
    fromCurrency: {
      type: Schema.Types.ObjectId,
      ref: "Currency",
    },
    toCurrency: {
      type: Schema.Types.ObjectId,
      ref: "Currency",
    },
    currencyQuery: {
      type: String,
      trim: true,
    },
    rate: {
      type: Number,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Conversion", ConversionSchema);
