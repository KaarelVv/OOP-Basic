const Student = require("./Student")
class Course extends Student {
    constructor(name) {
        super(name);
        this.courseGrades = [];
        this.id = Math.random();
        }
        addCourse(name) {
            this.name = name;
        }
        addCourseGrades(grade) {
            this.courseGrades.push(grade);
        }
        getGrades() {
            return this.courseGrades;
        }
        getAverageGrade() {
            if (this.getGrades === 0) {
                return -1;
            }
            else {
                let totalGrade = 0;
                for (let i = 0; i < this.courseGrades.length; i++) {
                    totalGrade += this.courseGrades[i];;
                }
                let avg = totalGrade / this.courseGrades.length
               return avg;
            }
        }
    }
module.exports = Course;