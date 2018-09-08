function Student(name,favorite_subject,current_GPA){
    this.name = name;
    this.favorite_subject = favorite_subject;
    this.current_GPA = current_GPA;
}
let Class = require("./Class.JS");

module.exports = Student;