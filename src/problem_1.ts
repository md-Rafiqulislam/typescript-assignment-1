{
    // problem : 1

    type ReapeatString = (data: string, numberOfData: number) => string;
    type I = number;
    type FullDataArray = string[];
    type FullData = string;

    const repeatString: ReapeatString = (data, numberOfData) => {
        let fullDataArray: FullDataArray = [];
        for (let i: I = 0; i < numberOfData; i++) {
            fullDataArray.push(data);
        }
        let fullData: FullData = '';
        fullDataArray.map((value: string) => {
            fullData += value + ' ';
        });
        const result = fullData.trim();
        console.log(result);
        return result;
    };

    repeatString('hello', 5);

}