const express = require("express");

const app = express();

app.set("port", process.env.PORT || 8001);

app.use("/", (req, res) => {
  res.redirect("https://www.faves.co.kr");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트 대기 중");
});
