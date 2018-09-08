let dogs = {
    raining:true,
    noise:"woof!",
    makeNoise:function makeNoise(){
        if(this.raining === true){
            console.log(this.noise);
        }
    }


};
let cats = {
    raining:false,
    noise:"Meow!",
    makeNoise:function makeNoise(){
        if(this.raining ===true){
            console.log(this.noise);

        }
    }
};
dogs.makeNoise()
cats.raining = true;
cats.makeNoise()

function massHysteria(dogs,cats){
    if(dogs.raining === true && cats.raining === true){
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
   else{
       console.log("its all good");
   }

}
massHysteria(dogs,cats)