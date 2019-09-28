let ROOT_URL;

if (process.env.NODE_ENV === "production") {
  ROOT_URL = "";
} else {
  ROOT_URL = "http://localhost:5000";
}

export { ROOT_URL };
