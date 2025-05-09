const router = require('express').Router();
const {
    getAllCourses,
    getCourseById,
    addCourse,
    updateCourse,
    deleteCourse
} = require('../controllers/courses.controller')

router.get('/',getAllCourses);
router.get('/:id',getCourseById);
router.post('/',addCourse);
router.put('/:id',updateCourse);
router.delete('/:id',deleteCourse);

module.exports = router