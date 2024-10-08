import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import dotenv from "dotenv";
import bodyParser from 'body-parser';


dotenv.config(); 

const app = express();
app.use(bodyParser.json()); 

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://komalvsingh1111:RyfxkX2XmMRyQjAi@cluster0.r46ybzo.mongodb.net/estate?retryWrites=true&w=majority&appName=Cluster0";


console.log("CLIENT_URL:", CLIENT_URL);
console.log("DATABASE_URL:", DATABASE_URL);
console.log("JWT_SECRET_KEY:", process.env.JWT_SECRET_KEY);  // Add this line

app.use(cors({
  origin: CLIENT_URL,
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

// Logging routes to verify they are loaded
app._router.stack.forEach(function(r) {
  if (r.route && r.route.path) {
    console.log(`Route: ${r.route.path}`);
  }
});

app.listen(8800, () => {
  console.log(`Server is running on port 8800! Client URL: ${CLIENT_URL}`);
});
