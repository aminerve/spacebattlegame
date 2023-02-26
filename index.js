class Ship{
constructor(hull,firepower,accuracy){
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
}
    attack(){
const randomNum = math.random();

    }
}


class Alien{
constructor(hull,firepower,accuracy){
    this.hull = Math.round((Math.random()*3)+3)
    this.firepower = Math.round((Math.random()*2)+2);
    this.accuracy = (Math.round((Math.random()*2)+6))/10
}
    attack(){

    }
}
const ussAssemb = new Ship(20,5, 0.7)
const alien1 = new Alien()
const alien2 = new Alien()
const alien3 = new Alien()
const alien4 = new Alien()
const alien5 = new Alien()
console.log(alien1);
console.log(alien2);
console.log(alien3);
console.log(alien4);
console.log(alien5);
console.log(ussAssemb);

