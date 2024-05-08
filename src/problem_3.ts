{
    // problem - 3

    type Number = number;
    type Numbers = number[];
    type FilterEvenNumbers = (data: Numbers) => Numbers;

    const filterEvenNumbers: FilterEvenNumbers = (arr: Numbers) => {
        const evenArray: Numbers = arr.filter((value: Number) => {
            if(value !== 0 && value % 2 === 0){
                return value;
            }
        });
        console.log(evenArray);
        return evenArray;
    };

    const numbers: Numbers = [1, 2, 3, 4, 5, 6];
    const evenNumbers = filterEvenNumbers(numbers);
}