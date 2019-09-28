const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const ssl = require("heroku-ssl-redirect");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const boom = require("@hapi/boom");
const cors = require("cors");

const authRouter = require("./routes/auth/router");

// Load keys based on prod or dev env
const config = require("./config/keys");

// Connect database
mongoose.connect(
  config.mongoURI,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  },
  error => {
    if (error) {
      // eslint-disable-next-line no-console
      return console.log(error);
    }

    // eslint-disable-next-line no-console
    return console.log("Mongo connected");
  }
);

// Create the app
const app = express();

// Force https
app.use(ssl(["production"], 301));

// Helmet
app.use(helmet());

// Add rate limiter for brute force attacks
// Add trust proxy for Heroku
app.enable("trust proxy", 1);

// limit each IP to 150 requests per MS
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 150
});

// Apply to all requests
app.use(limiter);

// TODO Update CORS
app.use(cors());

// Morgan and bodyParser
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ****************
// LIST ROUTES HERE
authRouter(app);

if (process.env.NODE_ENV === "production") {
  // If request doesn't match any routes above, look for file
  // in client/build
  app.use(express.static("client/build"));

  // If file not found in client/build, then serve index.html

  // eslint-disable-next-line global-require
  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Universal error handler
// Keep next here, although it is not used
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err);

  if (boom.isBoom(err))
    return res.status(err.output.statusCode).send(err.output.payload.message);

  if (err.status === 401) return res.status(401).send("Unauthorized.");

  return res.status(500).send("An unhandled server error has occurred.");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on ${PORT}`);
});
