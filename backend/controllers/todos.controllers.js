import todoModel from "../db/models/todos.model.js";

const createTask = async (req, res) => {
	const taskDetails = req.body;

	if (
		!taskDetails.task ||
		!taskDetails.priority ||
		!taskDetails.category ||
		!taskDetails.complete
	) {
		return res.status(400).json({
			success: false,
			message: "Please provide all necessary details",
		});
	}

	const newTask = new todoModel(taskDetails);

	try {
		await newTask.save();
		res.status(201).json({ success: true, data: newTask });
	} catch (error) {
		console.log(`Error: ${error.message}`);
		res.status(400).json({ success: false, message: "Server error" });
	}
};

export default createTask;
