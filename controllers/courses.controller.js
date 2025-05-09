const Courses = require("../models/course.model")

const getAllCourses =async (req,res) => {
    try {
        const courses = await  Courses.find();
        res.status(200).json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
    
    
}
const getCourseById =async (req,res) => {
    try {
        const {id} = req.params;
        const course = await Courses.findById(id);
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.status(200).json(course)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }

}
const addCourse =async (req,res) => {
    try {
        const data = req.body;
        const course = await Courses.create(data);
        res.status(201).json(course);
    }catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }

}
const updateCourse =async (req,res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const course = await Courses.findByIdAndUpdate(id,data,{new:true});
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.status(200).json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }

}
const deleteCourse =async (req,res) => {
    try {
        const {id} = req.params;
        const course = await Courses.findByIdAndDelete(id);
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }
        res.status(302).json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
}





module.exports ={
    getAllCourses,
    getCourseById,
    addCourse,
    updateCourse,
    deleteCourse
}