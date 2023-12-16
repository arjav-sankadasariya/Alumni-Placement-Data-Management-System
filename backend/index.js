require ("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const adminauthRoutes = require("./routes/adminauth");
const adminuserRoutes = require("./routes/adminusers");
const uploadRoutes = require("./routes/upload");
const viewRoute = require("./routes/viewdata");

const app = express();
connection();
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/adminusers", adminuserRoutes);
app.use("/api/adminauth", adminauthRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/viewdata", viewRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
