const { Router } = require('express');
const { getToDo, savetoDo, updateToDo, deleteToDo } = require('../controllers/ToDoController');
const router = Router();

router.get('/', getToDo);
router.post('/save',savetoDo);
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)

module.exports = router;
