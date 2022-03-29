const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose')



const authRoutes = require('./routes/auth');
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/list");



mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Connected to MongoDB");
}
);


app.use(express.json());

app.use('/api/auth', authRoutes);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);



const port = 7000;

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
})