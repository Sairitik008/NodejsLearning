//object destructuring in react and js library

const course = {
    name: "Javascript",
    price: 399,
    courseIntructor: "Sairitik"
}

// course.courseIntructor

//new syntax


//destructur course instructor from course 
const { courseIntructor } = course
console.log(courseIntructor);


//another destructor way
const { courseIntructor: Instructor } = course
console.log(Instructor)


//json
const data = {
    "name": "Sairitik",
    "course": "Python programming",
    "price": 499


}
console.log(data)
