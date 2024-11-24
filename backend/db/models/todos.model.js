import mongoose from "mongoose";

// Define data scheme
const todoSchema = new mongoose.Schema(
	{
		task: {
			type: String,
			required: true,
		},
		priority: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		complete: { type: Boolean },
	},

	{
		timestamps: true,
	}
);

// Define model
const todoModel = new mongoose.model("Todo", todoSchema);

export default todoModel;
