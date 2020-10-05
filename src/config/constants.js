const dev = {
  MONGO_URL: "mongodb://localhost/conversiondb-dev",
};
const test = {
  MONGO_URL: "mongodb://localhost/conversiondb-dev",
};
const prod = {
  MONGO_URL: "mongodb://localhost/conversiondb",
};

const defaultConf = {
  PORT: process.env.PORT || 8080,
};

const buildConfig = (env) => {
  switch (env) {
    case "development":
      return dev;
      break;
    case "test":
      return test;
      break;
    default:
      return prod;
  }
};

export default {
  ...defaultConf,
  ...buildConfig(process.env.NODE_ENV),
};
