// JS BREAK AND CONTINUE

// The js 'break' is used to stop a code from executing
// The js 'continue' is used to skip through something while executing a block of code

let paragragh = document.querySelector('.p')
let tableDiv = document.getElementById('tableDiv')
let strArray = ['Jethro', 'Cheta', 'Dominion', 'Emmanuel']

let data = document.querySelectorAll('.courses');
let submit = document.querySelector('button')
let dataCollect = []

// Populate the data into a table
let table = document.createElement('table');
let populate = ()=>{
    for(i = 0; i<dataCollect.length; i++){
        let trow = document.createElement('tr');
        
        table.append(trow);
        console.log('he')
    
    }
    tableDiv.append(table)
}

submit.addEventListener('click', (e) => {
    dataCollect = []
    console.log(dataCollect)
    data.forEach((datum) => {
        dataCollect = [...dataCollect, datum.value]
    })
    console.log(dataCollect)
    let course = new courses(dataCollect[0],dataCollect[1],dataCollect[2],dataCollect[3])
    console.log(course.courseDetails())
    populate()
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
