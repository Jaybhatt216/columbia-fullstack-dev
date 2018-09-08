function programmers(name,job_title,age,favorite_language){//constructor with parameters 
    this.name= name;
    this.job_title = job_title;
    this.age=age;
    this.favorite_language =favorite_language
    this.print_my_info = function(){
        console.log(programmers)
    }

}

let programmer =  new programmers('name','System Enginner','50','C');
console.log(programmer);
let programmer2 =  new programmers('name2','FrontEnd Enginner','50','JS');
console.log(programmer2);
let programmer3 =  new programmers('name3','Backend Enginner','50','Python');
console.log(programmer3);
//programmer.print_my_info() making your own protoype 
/* constructor.prototype.printinfo - function() {
    console.log(whater)
} */
