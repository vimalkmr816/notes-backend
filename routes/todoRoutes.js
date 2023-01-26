import express from 'express'
import { createTodo, deleteTodo, getAllTodo, getTodo, updateTodo } from '../controllers/controller.js'

const router = express.Router()

router.get('/', getAllTodo)
router.get('/:id', getTodo)
router.post('/', createTodo)
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo)

export default router
