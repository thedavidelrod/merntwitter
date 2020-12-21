const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("It's a glizzy world"));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
