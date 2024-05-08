{
    // problem - 5

    type Number = number;
    type Numbers = number[];
    type CalculateAverageGrade = (data:Student) => number;

    interface Student {
        name : string;
        age: Number;
        grades: Numbers;
    }

    const student1: Student = {     
        name: "Bob",     
        age: 17,     
        grades: [75, 80, 82, 88, 90],
    };

    const student2: Student = {     
        name: "Bob marley",     
        age: 37,     
        grades: [1, 2, 3, 4, 5],

    };

    const calculateAverageGrade: CalculateAverageGrade = (obj) => {

        const allTheGrades:Numbers = obj.grades;
        const subjects: Number = allTheGrades.length;
        const sumOfGrades: Number = allTheGrades.reduce((cur, acc) =>{
            return cur + acc;
        }, 0);

        const average:Number = sumOfGrades / subjects;
        console.log(average);
        return average;
    }

    const a = calculateAverageGrade(student1);
    const b = calculateAverageGrade(student2);


}