{
    // problem - 4

    const reverseArray = <T>(arr: T[]): T[] => {
        const result = arr.reverse();
        console.log(result);
        return result;
    }

    const res1 = reverseArray(["cherry", "banana", "apple"]);
    const res2 = reverseArray([10, 20, 30]);

}