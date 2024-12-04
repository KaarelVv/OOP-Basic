const Course = require("./Course");
class School extends Course {
    constructor(name) {
        super(name);
        this.students = [];
        this.courses = [];
        this.id = Math.random();
    }
    getName() {
        return this.name;
    }
    addCourse(course) {
        if (this.courses.indexOf(course) === -1) //indexOf kas on listis olemas
            this.courses.push(course);
    }
    addStudent(student) {
        if (student.age() > 18) {
            if (this.students.indexOf(student) === -1) {
                student.setId()
                this.students.push(student);
            }
        }
    }
    addStudentGrade(student, course, grade) {
        this.students.forEach(element => {
            if (element === student) {
                student.addGrade(grade)
                course.addCourseGrades(grade)
            }
        });
    }
    getStudents() {
        return this.students;
    }
    getCourses() {
        return this.courses;
    }
    getStudentsOrderedByAverageGrade() {
        let orderByAvg = []
        this.students.forEach(student => {
            orderByAvg.push({
                name: student.getName(),
                averageGrade: student.getAverageGrade()
            });
        })
        orderByAvg.sort((a, b) => b.averageGrade - a.averageGrade)
        return orderByAvg;
    }

    description() {
        let name = `${this.name}  School klassi nimi`
        return name;
    };
}
module.exports = School;