import "dotenv/config";
import express from "express";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 5050;

// app.use((req,res,next) => {


// app.use('/api/recipes',recipesRoute);
// app.use('/api/users',usersRoute);

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
