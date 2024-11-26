import "dotenv/config";
import express from "express";
import cors from 'cors';






const app = express();
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 8080;



app.listen(PORT, (err) => {
  console.log(`app is listening at http://localhost:${PORT}`);
});
