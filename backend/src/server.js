import express from "express";
import mongoose from "mongoose";

/*
    Local imports
*/
import connectDB from "../db/config/connectDB.js";
import todoModel from "../db/models/todos.model.js";

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());

app.post("/api/todo", async (req, res) => {
	// Extract posted data from the request body
	const taskDetails = req.body;

	// Validate incoming data
	if (
		!taskDetails.task ||
		!taskDetails.category ||
		!taskDetails.priority ||
		!taskDetails.complete
	) {
		return res
			.status(400)
			.json({ success: false, message: "Please provide all details" });
	}

	const newTask = new todoModel(taskDetails);

	try {
		await newTask.save();
		res.status(201).json({ success: true, data: newTask });
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
});

app.listen(PORT, () => {
	connectDB();
	console.log(`Server running. Port: ${PORT}`);
});
