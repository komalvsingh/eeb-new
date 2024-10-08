import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

let onlineUser = [];

const addUser = (userId, socketId) => {
  const userExits = onlineUser.find((user) => user.userId === userId);
  if (!userExits) {
    onlineUser.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log(`A user connected: ${socket.id}`);

  // Handle new user connection
  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
    console.log(`User connected: ${userId}, Socket ID: ${socket.id}`);
    console.log("Online users:", onlineUser);
  });

  // Handle sending messages
  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
    } else {
      console.log(`Receiver not found: ${receiverId}`);
    }
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    removeUser(socket.id);
    console.log(`A user disconnected: ${socket.id}`);
    console.log("Online users:", onlineUser);
  });
});

io.listen(4000, () => {
  console.log("Socket.IO server running on port 4000");
});
