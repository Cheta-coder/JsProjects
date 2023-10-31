// JS BREAK AND CONTINUE

// The js 'break' is used to stop a code from executing
// The js 'continue' is used to skip through something while executing a block of code

let paragragh = document.querySelector('.p')
let strArray = ['Jethro', 'Cheta', 'Dominion', 'Emmanuel']

// for (let str of strArray){
//     if(str === 'Jethro') {continue}
//     paragragh.innerHTML += str
// }
let data = document.querySelectorAll('.courses');
let submit = document.querySelector('button')
let dataCollect = []

submit.addEventListener('click', (e) => {
    dataCollect = []
    console.log(dataCollect)
    data.forEach((datum) => {
        dataCollect = [...dataCollect, datum.value]
    })
    console.log(dataCollect)
    let course = new courses(dataCollect[0],dataCollect[1],dataCollect[2],dataCollect[3])
    console.log(course.courseDetails())
    e.preventDefault()
})

// CONSTRUCTOR
function courses(courseName, coursePrice, courseDuration, instructor){
    this.courseName = courseName;
    this.coursePrice = coursePrice;
    this.courseDuration = courseDuration;
    this.courseInstructor = instructor

    this.courseDetails = () =>{
        return `courseName: ${this.courseName}, coursePrice: ${this.coursePrice}, courseDuration: ${this.courseDuration}, Instructor: ${this.courseInstructor}`
    }
}    