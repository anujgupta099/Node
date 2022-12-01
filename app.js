const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

// your code
console.log("Hello world");

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
