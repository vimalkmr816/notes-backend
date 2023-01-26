import mongoose from 'mongoose'
import Todo from '../models/todoModel.js'

const isValidId = id => !mongoose.Types.ObjectId.isValid(id)

export const getTodo = async (req, res) => {
	const { id } = req.params
	if (isValidId(id)) return res.status(400).json({ error: 'No Such Workout' })

	const todo = await Todo.findById(id)
	if (!todo) return res.status(400).json({ error: 'No Such Workout' })

	res.status(200).json(todo)
}
export const getAllTodo = async (req, res) => {
	const allTodo = await Todo.find({}).sort({ createdAt: -1 })

	res.status(200).json(allTodo)
}
export const createTodo = async (req, res) => {
	const { title, content, tags } = req.body

	try {
		const todo = await Todo.create({ title, content, tags })
		res.status(200).json(todo)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}
export const deleteTodo = async (req, res) => {
	const { id } = req.params
	if (isValidId(id)) return res.status(400).json({ error: 'No Such Workout' })

	const todo = await Todo.findByIdAndDelete({ _id: id })
	if (!todo) return res.status(400).json({ error: 'No Such Workout' })

	res.status(200).json(todo)
}
export const updateTodo = async (req, res) => {
	const { id } = req.params

	if (isValidId(id)) return res.status(400).json({ error: 'No Such Workout' })
	const updatedTodo = await Todo.findOneAndUpdate({ _id: id }, { ...req.body })

	if (!updateTodo) return res.status(400).json({ error: 'No Such Workout' })
	res.status(200).json(updatedTodo)
}
