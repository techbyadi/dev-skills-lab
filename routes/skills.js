import { Router } from 'express'
import * as skillsCntrl from '../controllers/skills.js';

const router = Router()

// GET localhost:3000/skills
router.get('/', skillsCntrl.index)

//GET localhost:3000/skills/new
router.get('/new', skillsCntrl.new)

//POST localhost:3000/skills/
router.post('/', skillsCntrl.create)

export { router }
