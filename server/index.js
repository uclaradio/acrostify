import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Need to set up DB if we're going to be storing user information

// const CONNECTION_URL = "";
// const PORT = process.env.PORT || 5000;

// mongoose
//     .connect(CONNECTION_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() =>
//         app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
//     )
//     .catch((error) => console.log(error.message));