### Why are Type Guards Necessary?

typescript is a statically typed programming language. it helps us to improve our code for more readability and catch the most of the error in run time. but some code can not be declared initially. so we need to define their types by type guard.
like if we use union types then we need type guard to define the types.

and if we call or get some data from external server or source we can not define their types in statical way then we need type guard.


### Discuss Various Types of Type Guards and Their Use Cases.
there are several kinds of type guard in typescript
1. typeof: 
    this is mostly use for straightforward types like string, number, boolean etc.
    we do not use it for complex type
{

    type LogString = (data: any) => string;
    type String = string;

    const logString: LogString = (input) => {

        let result: String = '';
        const errorMsg: String = 'Error: Input is not a string.';

        if (typeof input === 'string') {
            result = input;
        } else {
            result = errorMsg;
        }
        console.error(result);
        return result;
    };


    const res1 = logString("Hello, TypeScript!");
    const res2 = logString(42);
}

2. instanceof: 
    this is mostly use for a object that is created from a class to define their types.

    {
            class Animal {
                name: string;
                species: string;

                constructor(name: string, species: string) {
                    this.name = name;
                    this.species = species;
                }
                makeSound() {
                    console.log('i am making sound');
                }
            }



            class Dog extends Animal {
                constructor(name: string, species: string) {
                    super(name, species);
                }

                makeBark() {
                    console.log('i am barking');
                }
            }

            class Cat extends Animal {
                constructor(name: string, species: string) {
                    super(name, species);
                }

                makeMeaw() {
                    console.log('i am sound like meaw meaw');
                }
            }

            const isDog = (animal: Animal): animal is Dog =>{
                return animal instanceof Dog;
            };


            const isCat = (animal: Animal): animal is Cat =>{
                return animal instanceof Cat;
            }


            const getAnimal = (animal: Animal) => {
                if (isDog(animal)) {
                    animal.makeBark();
                } else if (isCat(animal)) {
                    animal.makeMeaw();
                } else {
                    animal.makeSound();
                }
            }


            const dog = new Dog('tommy', 'jarman');
            const cat = new Cat('pilu', 'cat');

            getAnimal(dog);
            getAnimal(cat);
    }