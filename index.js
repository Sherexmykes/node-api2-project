const express = require("express");
const cors = require("cors");
const postRouter = require("./Routes/postRouter");
const commentRouter = require("./Routes/commentRouter");
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('<h1>App is running</h1>');
});

app.use(express.json()); 
app.use(cors());

app.use("/api/posts", postRouter);
app.use("/api/comments", commentRouter);

const port = 8000;


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});