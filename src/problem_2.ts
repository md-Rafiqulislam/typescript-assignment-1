{

    // problem - 2

    type Number = number;
    type Numbers = number[];
    type FindLargestNumber = (data: Numbers) => Number;

    const findLargestNumber: FindLargestNumber = (arr) => {
        const largestNumber: Number = Math.max(...arr);
        console.log(largestNumber);
        return largestNumber;
    }

    const numbers: Numbers = [10, 5, 8, 20, 3];
    const num = findLargestNumber(numbers);

}