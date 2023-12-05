const app = require("./app");
const { connectDatabase } = require("./config/database");

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Service is running on port ${process.env.PORT}`);
});
