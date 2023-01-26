import mongoose from 'mongoose'
const Schema = mongoose.Schema
const todoSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		tags: [
			{
				type: String,
			},
		],
	},
	{ timestamps: true }
)
export default mongoose.model('Todo', todoSchema)
