
export const MONGODB_CONNECTION = "mongodb://localhost:27017/E-Commerce-RestAPI"; // Connection String is from MongoDB Atlas Cluster.
export const JWT_SECRET =
    "e5c843c644b2beaf141e4ed0cdae3d4cf2092f68a5d999335e5ec8d1b1cfddb4"; // JWT Secret string is generated from JWT secret generator . it will use to encode or decode JWT Token.
export const JWT_EXPIRATION_DURATION = 60 * 60 * 24; // It will use to encode or decode JWT Token.


export const URL_ENCODING = true;
export const MAX_JSON_SIZE = "50mb";

export const REQUEST_LIMIT_TIME = 15 * 60 * 1000;
export const REQUEST_LIMIT_NUMBER = 3000;

export const WEB_CACHE = false;
export const PORT = 1234;
