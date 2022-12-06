class governor {
    constructor(age, party, hometown, pollRating){
    this.age = age;
    this.party = party;
    this.hometown = hometown;
    this.pollRating = pollRating;
    }

    static partyAffs() {
        return ['democrat', 'republican', 'green']
    }
    static polls() {
        if (pollRating > 50){
            console.log('Great job');
        } else {
            console.log('your polls could be better')
        }
    }
    static seniority(){
        if (this.age > 80){
            console.log('Maybe its time to retire ' + this.hometown)
        } else {
            console.log("You're a great " + this.party)
        }
    }
}
const gov1 = new Governor(90, Governor.partyAffs([2], "Boston", 51))
console.log(gov1);
console.log(Governor.partyAffs()[0])


/* class Person {
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }
    getName(){
        return `${this.name}`;
    }
    getAge(){
        return `${this.age}`;
    }
    getHeight(){
        return `${this.height}`
    }
}

class Postalworker extends Person{
    abc(){
        console.log("This is the postal worker method.")
    }
}

class Chef extends Person{
    cde(){
        console.log("This is the chef worker method.")
    }
}

let Jack = new Postalworker("Jim, 50, 120");
let Bob = new Postalworker("Bill", 60, 140);

console.log(Jack)

let chef1 = new Chef("Ronald", 20, 100);
let chef2 = new Chef("King", 30, 200);
console.log(chef2);
 */