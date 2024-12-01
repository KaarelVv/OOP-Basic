const Person = require('./Person')
class Student extends Person {
    constructor(name) {
        super(name);
        this.grades = [];
        this.id = null;
    }
    setId() {
        if(this.id === null ){
            this.id = Math.ceil(Math.random()*10);
        }  
    }
    getId() {
        return this.id;
    }
    getGrades() {
        return this.grades;
    }
    addGrade(grade){
        this.grades.push(grade);
    } 
    getAverageGrade() {
        if (this.getGrades === 0) {
            return -1;
        }
        else {
            let totalGrade = 0;
            for (let i = 0; i < this.grades.length; i++) {
                totalGrade += this.grades[i];;
            }
            let avg = totalGrade / this.grades.length
           return avg;
        }
    }
} 


module.exports = Student;