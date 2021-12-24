require('dotenv').config();
const express = require('express')
require('./config/dbConnect')();
const userRoute = require('./routes/userRoute')
const codekataRoute = require('./routes/codekataRoute')
const driveRoute = require('./routes/driveRoute')
const mentorRoute = require('./routes/mentorRoute')
const courseRoute = require('./routes/courseRoute')
const courseActivated = require('./routes/courseActivated')


const app = express()
app.use(express.json())
app.use("/api/user", userRoute)
app.use("/api/codekata", codekataRoute)
app.use("/api/drive", driveRoute)
app.use("/api/mentor", mentorRoute)
app.use("/api/course", courseRoute)
app.use("/api/courseActivated", courseActivated)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});