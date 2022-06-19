import express from "express";

// Start express server
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("hello!");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
