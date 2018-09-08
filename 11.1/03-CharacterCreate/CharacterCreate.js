//a constructor is a function that creates objects then other objects inherit from it
//make a child class use new
function character(name,job,gender,age,strength,hp,printStats) {
    this.name = name;
    this.job = job;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.printStats = function() {
        console.log(this);
    };
    this.isAlive = function(){
        if(this.hp > 0){
            console.log(this.name + 'is alive')
            return true 
        }
        console.log(this.name + 'is dead');
        return false
    }
    this.attack = function(char2){
        char2.hp -= this.strength
        console.log('char was attached by char ' + char2.hp)


    }
    this.level_up = function(){
        this.strength += 5
        this.hp +=25
        console.log('char has level up ' + char1.hp + ' ' + char1.strength);  

    }
  
  }
  let char1 =  new character('char1','worker','male',3,100,100);
  let char2 = new character('char2','worker','male',3,100,100);

  /*function isAlive(){
      if(this.HP > 0 || this.HP > 0){
          console.log('is alive');
      }

  }*/
  //char2.isAlive()

  //char1.isAlive()
  char1.isAlive();
  char2.isAlive();
  char1.attack(char2);
  char1.level_up();
  char2.attack(char1);
  char2.level_up();

  