import dotenv from 'dotenv';
dotenv.config();

export const ENV = {
  PORT: process.env.PORT,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  GOOGLE_CLOUD_CLIENT_ID: process.env.GOOGLE_CLOUD_CLIENT_ID,
  GOOGLE_CLOUD_CLIENT_SECRET: process.env.GOOGLE_CLOUD_CLIENT_SECRET,
};
