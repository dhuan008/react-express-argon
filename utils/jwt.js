const jwt = require("jwt-simple");
const config = require("../config/keys");

// Create JWT for regular user cases
const genJwt = user => {
  const timestamp = new Date().getTime();

  return jwt.encode(
    {
      sub: user.id,
      iat: timestamp
    },
    config.jwtCode
  );
};

const extractJwt = token => {
  let tokenParams;

  try {
    tokenParams = jwt.decode(token, jwtCode);
  } catch (error) {
    return error;
  }

  return tokenParams;
};

module.exports = { genJwt, extractJwt };
