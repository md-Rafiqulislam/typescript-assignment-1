{
    // problem - 8

    type DisplayInfo = () => string;

    class Car {
        brand: string;
        model: string;
        year: number;
    
        constructor(brand: string, model: string, year: number) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
    
        displayInfo: DisplayInfo = () => {
            return `Your car model is: ${this.year} ${this.brand} ${this.model}`;
        }
    }
    

    const car1 = new Car("Toyota", "Corolla", 2020);
    console.log(car1.displayInfo());
    
    
}