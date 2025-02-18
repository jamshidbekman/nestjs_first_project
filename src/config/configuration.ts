const configuration = () => {
  return {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    DB_NAME: process.env.DB_NAME,
    JWT_KEY: process.env.JWT_KEY,
  };
};

export default configuration;
