import express from "express";
/*
    Local imports
*/
import connectDB from "../db/config/connectDB.js";
import router from "../routes/todos.route.js";

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());

app.use("/api/todo", router);

app.listen(PORT, () => {
	connectDB();
	console.log(`Server running. Port: ${PORT}`);
});
