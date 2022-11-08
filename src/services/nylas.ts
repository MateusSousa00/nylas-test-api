import Nylas from 'nylas';

Nylas.config({
  clientId: process.env.CLIENT_ID as string,
  clientSecret: process.env.CLIENT_SECRET as string,
});

const HEADERS = {
  headers: {
    Authorization: `Basic ${process.env.ACCESS_TOKEN}`,
  },
};

export class NylasServiceClass {
  
}