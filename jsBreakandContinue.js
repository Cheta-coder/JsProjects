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
    
    let trhead = document.createElement('tr')
    let th1 = document.createElement('th')
    let th2 = document.createElement('th')
    let th3 = document.createElement('th')
    let th4 = document.createElement('th')

    th1.innerText = 'Course Name'
    th2.innerText = 'Course Price'
    th3.innerText = 'Course Duration'
    th4.innerText = 'Course Instructor'

    trhead.append(th1, th2, th3, th4,)
    table.append(trhead)

    for(i = 0; i<dataCollect.length; i++){
        let trow1 = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');

        td1.innerHTML = dataCollect[0];
        td2.innerHTML = dataCollect[1];
        td3.innerHTML = dataCollect[2];
        td4.innerHTML = dataCollect[3];

        trow1.append(td1, td2, td3, td4);
        table.append(trow1,);
        
    }
    console.log(table)
        tableDiv.innerHTML = ""
    tableDiv.append(table)
}

submit.addEventListener('click', (e) => {
    dataCollect = []
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
    this.courseInstructor = instructor;

    this.courseDetails = () =>{
        return `courseName: ${this.courseName}, coursePrice: ${this.coursePrice}, courseDuration: ${this.courseDuration}, Instructor: ${this.courseInstructor}`
    }
}
