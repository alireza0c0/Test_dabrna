const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());

io.on("connection", (socket) => {
  console.log("یک کاربر متصل شد");

  socket.on("disconnect", () => {
    console.log("یک کاربر خارج شد");
  });
});

app.get("/", (req, res) => {
  res.send("سرور بازی دبرنا آنلاین است!");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`سرور روی پورت ${PORT} اجرا شد`);
});
