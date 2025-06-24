console.log("Hello, World");

let halo = "Hallo Dunia";
let pesan;

halo = "Hallo Willman"; //variabel let bisa diubah

// pesan = halo;

console.log(pesan); //undefines

const halo2 = "Hello there";

// halo2 = "Hello these"; error

pesan = null;

console.log(pesan); // null

console.log(halo2);

const arr = [1,2,3]; // List

arr.map((arr)=>console.log(arr))

console.log(arr);
console.log(...arr);

const myObj = {
    name : "Willman",
    age : 23
}; // objek

console.log(myObj);

console.log(myObj.name);

const myList = [
    {
        name : "Willman",
        age : 23
    },
    {
        alamat : "Lebak Bulus"
    }
]; //array of obj

console.log(myList[1].alamat)

// Operator

let a = 2
let b = 3

console.log(a%=b)
console.log(a**=b) // a = a**b

// Aritmatika

let x = '3'

console.log(b==x)
console.log(b===x)

console.log(x>2?true:false) // ternery operator

console.log(x>2 && x<2 ? 'bukan 2'
    : x=2? "ini dua" 
    : 'undifined')


//Function

const hello= (nama, umur) =>{
    console.log(`Hallo ${nama} umur kamu ${umur} tahun`)
}

hello("Willman",23)

// Rest argumen

function contohRest(...arg){
    console.log(arg)
}

contohRest(1,2,3,4)

const user = {name:"Willman", age:25}
const location = {city:"Jakarta"}
const address = ["lebak bulus", "bintaro"]

const profile = {user : user.name,...location,...address}

console.log(user.name)
console.log(profile)

const fruit = ['banana','apple','manggo']

fruit.pop()

console.log(fruit)






