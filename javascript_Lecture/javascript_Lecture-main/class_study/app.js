let player1 = new Object();

player1.name = '이재황 더 슬레이어'
player1.job = '슬.레.이.어.'
player1.race = '얼라이언스트리퍼'
player1.stats = {
    STR: 15, //힘
    DEX: 70, //민첩
    CON: 20, //체력
    INT: 10, //지능
    WIS: 10, //지혜
    CHA: 2000 //매력
}

let player2 = {
    name: '이재황 더 슬레이어',
    job: '슬.레.이.어.',
    race: '얼라이언스트리퍼',
    stats: {
        STR: 15, //힘
        DEX: 70, //민첩
        CON: 20, //체력
        INT: 10, //지능
        WIS: 10, //지혜
        CHA: 200000 //매력
    }
}

function playerFunc(name, job, race, stats) {
    this.name = name;
    this.job = job;
    this.race = race;
    this.stats = stats;
    this.getName = function() { return this.name; }
    this.getJob = function() { return this.job; }
    this.getRace = function() { return this.race; }
    this.getName = function(name) { return this.name = name; }
    this.getJob = function(job) { return this.job = job; }
    this.getRace = function(race) { return this.race = race; }
}

let player3 = new playerFunc(
    "이재황",
    "슬.레.이.어.",
    "얼라이언스트리퍼",
    {
        STR: 15, //힘
        DEX: 70, //민첩
        CON: 20, //체력
        INT: 10, //지능
        WIS: 10, //지혜
        CHA: 200000 //매력
    }
)

let now = new Date();
console.log(now)

player1.age = 200
player2.age = 200
player3.age = 200

console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

player1.age = 100
player2.age = 100
player3.age = 100

console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

delete player1.age;
delete player2.age;
delete player3.age;

console.log(player1.age)
console.log(player2.age)
console.log(player3.age)

player1.sayHello = function() {
    console.log("hello")
}
player2.sayHello = function() {
    console.log("hello")
}
player3.sayHello = function() {
    console.log("hello")
}

player1.sayHello();
player2.sayHello();
player3.sayHello();

console.log(player3.getName())

let person = {
    name: "Jhon Doe",
    age: 18,
    city: "Chung-Ju"
}

for (let key in person) {
    console.log(key + ": " + person[key])
}

for (let stat in player3.stats) {
    console.log(stat)
}

function show(obj, key) {
    console.log(obj[key])
}
show(player3,"job");

let cars = [
    {brand: "페라리", model: "911"},
    {brand: "포드", model: "머스탱"},
    {brand: "닷지", model: "차저"},
]

for(let i = 0; i>cars.length; i++) {
    console.log(cars[i].model)
}