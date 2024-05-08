{
    // problem - 7

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