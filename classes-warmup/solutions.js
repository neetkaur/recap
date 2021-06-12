class Cat{
  constructor(name,age){
    this.name = name,
    this.age = age
  }
}
const milly = new Cat('Milly', 2)
const ruby = new Cat('ruby',3)

function altercat(obj, newname){
  obj.name = newname
}
console.log()
console.log(milly)
console.log(ruby)
altercat(milly,'diamond')
console.log(milly)

let catArray = []
let catName = ['cat1','cat2','cat3','cat4','cat5','cat6']
catAge=[1,2,3,4,5,6]
for(let i=0;i<6;i++){
  catArray[i]=new Cat(catName[i],catAge[i])
}
console.log(catArray[3])

const catPerson = {
  name:"I am CatPerson",
  cats:catArray
}
console.log(catPerson)

class Pirate{
  constructor(name,age,weapon){
    this.name = name,
    this.age = age,
    this.weapon = weapon
  }
  greet(){
    console.log("Hi , I am a pirate")
  }

  attack(){
    console.log("Dishum")
  }

  retire(){
    concole.log("I am old, so Bye Bye ")
  }
}

let PiratesforShip1 = []
let pirateName = ['p1','p2','p3']
let pirateAge = [44,45,46]
let pirateWeapon = ['gun','missile','knife']
for(let i=0; i<3;i++){
  PiratesforShip1[i] = new Pirate(pirateName[i],pirateAge[i],pirateWeapon[i])
}
console.log(PiratesforShip1)
let PiratesforShip2 = []
let pirateName2 = ['pirate2-1','pirate -2','pirate2-3']
let pirateAge2 = [33,34,35]
let pirateWeapon2 = ['w1','w2','w3']
for(let i=0; i<3;i++){
  PiratesforShip2[i] = new Pirate(pirateName2[i],pirateAge2[i],pirateWeapon2[i])
}
console.log(PiratesforShip2)

function logpirates(){
  console.log(PiratesforShip1)
  console.log(PiratesforShip2)
}
