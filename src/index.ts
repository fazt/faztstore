import app from "./app";
import { connectDB } from "./db";

connectDB();
app.listen(3000);
console.log("Server running on port 3000");
