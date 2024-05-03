// BASIC ---------------------------------------------------------------------------------------

// string
let firstName = "Toan Nguyen"
let lastName: string;

lastName = ""

// number

let age: number
age = 30

// boolean
let isValid = true;
isValid = false;

// undifined, null
let u: undefined
let m: null

// any type
let anyType: any
anyType = 30
anyType = true
anyType = ""

// OBJECT TYPE ---------------------------------------------------------------------------------------
let singer = { name: "", age: 1 }
singer.name = "hello"


// ? is optional 
let actor: { name: string, age?: number } = { name: "Tom Cruise" }


// ARRAY TYPE ---------------------------------------------------------------------------------------

let blogs: { title: string, body: string }[];

blogs.push({ body: "", title: "" })


// FUNCTION ---------------------------------------------------------------------------------------

const sum = (num1: number, num2: number): number => {
    return num1 + num2
}

// Function not return value
const hello = (): void => {
    console.log("Hello World")
}

// UNION TYPE AND ENUM TYPE ---------------------------------------------------------------------------------------

// union
let size: string | number;

size = "XL"
size = 30

let size1: string | string[]

// enum
enum Colors {
    RED = "RED",
    BLUE = "BLUE",
    GREEN = "GREEN"
}

let color = Colors.BLUE

// INTERFACE TYPE ---------------------------------------------------------------------------------------

interface IPerson {
    name: string
    age?: number
}

let actor: IPerson = { name: "Tom Cruise" };


// GENERIC TYPe ---------------------------------------------------------------------------------------

const hello1 = <T>(a: T) => {
    console.log(a)
    return a
}

hello<string>("")

// CLASS ---------------------------------------------------------------------------------------

// public --------------------------
// class Car {
//     name: string
//     year: number
//     constructor(name: string, year: number) {
//         this.name = name
//         this.year = year
//     }
// }

// let car1 = new Car("Audi", 2021)

// car1.name = "Mazda"

//private ---------------------------
// class Car {
//     private name: string
//     private year: number
//     constructor(name: string, year: number) {
//         this.name = name
//         this.year = year
//     }
// }

// let car1 = new Car("Audi", 2021)

// car1.name = "Mazda"


// readonly --------------------------
// class Car {
//     readonly name: string
//     year: number
//     constructor(name: string, year: number) {
//         this.name = name
//         this.year = year
//     }
// }

// let car1 = new Car("Audi", 2021)
// car1.name = "masda"

// short version ------------------------
class Car {
    constructor(public name: string, readonly year: number) { }
}

let car1 = new Car("Audi", 2021)
car1.name = ""