function DigitalPal(hungry,sleepy,bored,age) {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;



 



}

DigitalPal.prototype.feed = function(){
    if(this.hungry){
        console.log("That was yummy!");
        this.hungry = false;
        this.sleepy = true;

    }else{
        console.log("No thanks! I'm full.");
    }
}

DigitalPal.prototype.sleep = function(){
    if(this.sleepy){
        console.log('zzzz');
        this.sleepy = false;
        this.bored=true;
        increaseAge();
    }else{
        console.log('I am not sleepy');
    }
}

DigitalPal.prototype.play = function(){
    if(this.bored){
        console.log('lets play');
        this.bored =false;
        this.hungry = true;
    }else{
        console.log('later')
    }
}
DigitalPal.prototype.increaseAge = function(){
    this.age++
 console.log("Happy Birthday to me! I am "+age+" old!");
}


let dog = new DigitalPal()
dog.prototype.outside = false;
dog.prototype.bark=function(){
    console.log('woof woof woof');
}
dog.prototype.goOutside = function(){
    if(this.outside){
        console.log('yay I am outside')
        this.outside = true;
        bark()
    }else{
        console.log('we are already outside');
    }
}
dog.prototype.goInside = function(){
    if(this.gpOutside === true){
        console.log('do we have to');
        this.gpOutside = false;
    }else{
        console.log("I am alrady outside");

    }
}



let cat = new DigitalPal()
cat.prototype.houseCondition = 100;
cat.prototype.meow= function(){
    console.log('meow meow');
}
cat.prototype.destroyFurniture = function(){
    if(this.houseCondition !==0){
    this.houseCondition-=10
    console.log('MUAHAHAHAHA! take that furniture');
    }
}
cat.prototype.buyNewFurniture= function(){
    houseCondition+=50
    console.log("are you sure about that?")
}