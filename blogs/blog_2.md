### method to handle asynchronous operations using async/await over callback/promise TypeScript.

asynchronus operation is the fundamental propertise of modren javascript and typescript. we use it for many reason and in various field of operations like waiting for user input, read a file form data base or some where else many settime function. actually where we have to wait for some time for a some reason to execute a programe we use asynchronous operations.

but we mostly use it for fetching data from external data base or server to get response and then data.

for and example:


const createPromise = ():Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'something';
        if(data) {
            resolve(data);
        } else {
            reject('failed to load data');
        }
    });
};

const showData = async () => {
    try {
        const data: string = await createPromise();
        console.log(data);
        return data;
    } catch(error) {
        console.error('Error: ', error );
    }
    
}

const result = showData();