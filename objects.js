// 1.objects
const car = {
    make: "Toyota",
    model: "Corolla",
    color: "blue",

    describe: function () {
        return `This is a ${this.color} ${this.make} ${this.model}.`;
    }, //refers to the object that called the method. .adding a method to an object.

    updateColor: function (newColor) {
        this.color = newColor;
        console.log(`The car color has been updated to ${this.color}.`);
    }
};

console.log(car.describe());

car.updateColor("red");

console.log(car.describe());
   


//Exercise 2 (Medium — Application): Book Tracker 

const bookTracker = {
    books: [],

    addBook(title, author) {
        this.books.push({
            title: title,
            author: author,
            isRead: false,
        });
    }, // creates a new  book object. Add it to the books array. The isRead property is set to false by default.

    markAsRead(title) {
        const book = this.books.find(book => book.title === title);

        if (book) {
            book.isRead = true;
        }
    },

    getUnreadBooks() {
        return this.books
            .filter(book => book.isRead === false)
            .map(book => book.title);
    }
};

// Testing code
bookTracker.addBook("Dune", "Frank Herbert");
bookTracker.addBook("Educated", "Tara Westover");

bookTracker.markAsRead("Dune");

console.log(bookTracker.getUnreadBooks()); // ["Educated"]



//3.class average calculator.
const students = [
    { name: "Wei", score: 88 },        //Array of objects representing students and their scores
    { name: "Fatima", score: 95 },
    { name: "Diego", score: 72 },
    { name: "Nia", score: 64 },
    { name: "Sam", score: 91 }
];

function getAboveAverageStudents(students) {

    // 1. Calculate the total score. . reduce adds all  the students scores together and returns the total score.
    const totalScore = students.reduce((sum, student) => sum + student.score, 0); // calculate total score.

    // 2. Calculate the average score
    const average = Math.round((totalScore / students.length) * 100) / 100;  //The Math.round(... * 100) / 100 part rounds the result to 2 decimal places if needed.

    // 3. Filter students above the average and return only their names
    const aboveAverage = students
        .filter(student => student.score > average)  //The filter method creates a new array with all students whose score is greater than the average score.
        .map(student => student.name);    //The map method creates a new array containing only the names of students. transforms the array of student objects into an array of names.

    console.log(`Class average: ${average}`);

    return aboveAverage;
}

console.log(getAboveAverageStudents(students));

