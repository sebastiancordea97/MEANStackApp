//Basic Types
let id: number = 5; 
let company: string = "stting";

//Array
let ids: number[] = [1,2,3,4];

//Tuple
let person: [number, string, boolean] = [1, 'Brad', true];

//Tuple Array
let employee: [number, string][];
console.log("🚀 ~ file: index.ts ~ line 13 ~ employee", id);

//Union
let pId: string | number = 22;

//Enums
enum Direction1 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

//Objs
type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: 'Alex',
}

//Type Assertion
let cid: any = 1;
let cid2 = <number>cid
let cid3 = cid as number;

//Functions
function addNum(x: number,y: number): number {
    return x + y;
}

//Interfaces
interface IUser {
    readonly id: number // upu can t modify it
    name: string
    age?: number
    //? = type | undefined #optional
}

const User2: IUser = {
    id: 2,
    name: 'John',
}

interface IMathFunction  {
    (x: number, y: number):number
}

const add: IMathFunction = (x: number, y: number):number => x + y;

//Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['string', 'string', 'string']);