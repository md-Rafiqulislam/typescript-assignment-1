### The significance of union and intersection types in Typescript.

#### The union types in Typescript:
union types in Typescript are very powerful type. it gives us very usefull method to work with multiple types in a same time. Like if we have to work with a value that can be number or string or boolean or something else but don't know the types extact when it execute but we know what kinds of type it would be then we use union type in Typescript.

for an example:

type Data = string | number | boolean;
const data : Data = true;

here we don't know what kind of type is const data but we know that it can be string, number or boolean. so we use union data types.
and we use '|' sign to sperate types between two types.

#### The intersection types in Typescript:
intersection types in Typescript is also very powerful. if we sum of some types in one type we use intersection types. Like it is type of combination of many types.

for example:

type Id = string | number  -> this is union types
type Car = {
    name: string,
};

type CarWithId = Car & {id: Id} -> this is intersection types

const firstCar : CarWithId = {
    name: 'maybach',
    id: 12145101254002,
}


here we combine Id and Car types and make one type called CarWithId.