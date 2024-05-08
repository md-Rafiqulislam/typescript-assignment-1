{
    // problem - 6

    type Number = number;
    type Book = {
        title: string;
        author: string;
        publishedYear: Number;
    }
    type IsRecentBook = (data: Book) => boolean;


    const date = new Date();
    const presentYear : Number = date.getFullYear();

    const book1: Book = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 1022
    };

    const isRecentBook: IsRecentBook = (obj) => {

        const publishedYear: Number = obj.publishedYear;
        if(presentYear - publishedYear <= 5) {
            return true;
        }
        return false;
    }

    const a = isRecentBook(book1);
    console.log(a);

}