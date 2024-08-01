import { Router } from 'express'
import * as skillsCntrl from '../controllers/skills.js';

const router = Router()

// GET localhost:3000/skills
router.get('/', skillsCntrl.index)

//GET localhost:3000/skills/new
router.get('/new', skillsCntrl.new)

//POST localhost:3000/skills/
router.post('/', skillsCntrl.create)

//GET localhost:3000/skills/:skillId
router.get('/:skillId', skillsCntrl.show)

//GET localhost:3000/skills/:skillId/edit
router.get('/:skillId/edit', skillsCntrl.edit)

//PUT localhost:3000/skills/:skillId/update
router.put('/:skillId', skillsCntrl.update)

//DELETE localhost:3000/skills/:skillId/delete
router.delete('/:skillId', skillsCntrl.delete)

export { router }
