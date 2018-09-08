function Class(number_of_students_in_class,Room_number,Professor,){
    this.number_of_students_in_class = number_of_students_in_class;
    this.Room_number = Room_number;
    this.Professor = Professor;
    this.student_within_class = []
}
let Students = require('./Student.js');
module.exports = Class;