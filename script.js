/*
COMPLETE THE FOLLOWING TASKS WITHOUT MODIFYING ANY OF THE CODE IN THE HTML OR CSS FILE.

You should only write code in the JavaScript functions below, as well as the object with your student information.

Each function is annotated with a comment explaining what it should do.

By the end of the lab, there shouldn't be any question marks left on the report card.
*/

const studentInformation = {
  name: "Diego Saldonid",
  grade: "Sophomore",
  advisor: "Advisor here",
  major: "Computer Science",
  graduationYear: "2023",
  imageUrl: "data:image/jpeg;base64,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",
}

let semester = "Spring Semester"

const studentData = {
  "Spring Semester": [
    { code: "LIT 101", name: "English Literature 101", semester: "Spring 2021", credits: 5, grade: "B+" },
    { code: "CS 50", name: "Intro to Computer Science", semester: "Spring 2021", credits: 5, grade: "A-" },
    { code: "WD 140", name: "Modern Web Development", semester: "Spring 2021", credits: 5, grade: "A+" },
    { code: "JS 2.0", name: "Serverside JavaScript", semester: "Spring 2021", credits: 10, grade: "A-" },
  ],
  "Fall Semester": [
    { code: "Math 600", name: "Differential Equations", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "CS 10", name: "Python Programming", semester: "Fall 2020", credits: 5, grade: "A" },
    { code: "History 99", name: "History of Computers", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "MD 00", name: "Meditation and Mindfullness", semester: "Fall 2020", credits: 5, grade: "A+" },
  ],
  "Winter Term": [
    { code: "PHYS ED", name: "Physical Activity", semester: "Winter 2020", credits: 5, grade: "A-" },
    { code: "GEN ED", name: "General Education Requirement", semester: "Winter 2020", credits: 5, grade: "A+" },
  ],
}

const gpaPointsLookup = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
}

/**
 * QUERY SELECTORS VARIABLES GO HERE
 */
const dropdown          = document.querySelector(".dropdown")
const studentNam        = document.getElementById("student-name")
const studentAdvis      = document.getElementById("student-advisor")
const studentMaj        = document.getElementById("student-major")
const studentGrade      = document.getElementById("student-grade-level")
const studentGradDate   = document.querySelector("#student-graduation-year")
const studentImg        = document.getElementById("student-image")
const semesterDropdown  = document.querySelector(".semester-dropdown")
const semesterDropLabel = document.querySelector(".dropdown-label")
const fallSemester      = document.querySelector("#fall-semester")
const springSemster     = document.querySelector("#spring-semester")
const winterTerm        = document.querySelector("#winter-term")
const reportCardTable   = document.querySelector("#report-card-table")
const dropButton        = document.querySelector(".dropdown-button")
// ADD more query selectors here

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String} studentName - the name of the student
 */
function updateStudentName(studentName) {
  // code goes here
  studentNam.innerHTML = studentName
}

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String|Number} studentGradeLevel - the grade level of the student
 */
function updateStudentGradeLevel(studentGradeLevel) {
  // code goes here
  studentGrade.innerHtml = studentGradeLevel
}

/**
 * Modify the report card to display the correct advisor from the lookup table above.
 *
 * @param {String} studentAdvisor - the advisor of the student
 */
function updateStudentAdvisor(studentAdvisor) {
  // code goes here
  studentAdvis.innerHTML = studentAdvisor
}

/**
 * Modify the report card to display the correct major from the lookup table above.
 *
 * @param {String} studentMajor - the major of the student
 */
function updateMajor(studentMajor) {
  // code goes here
  studentMaj.innerHTML = studentMajor
}

/**
 * Modify the report card to display the correct graduation year from the lookup table above
 *
 * @param {Number} graduationyear - the year the student graduates
 */
function updateStudentGraduationYear(graduationyear) {
  // code goes here
  studentGradDate.innerHTML = graduationyear
}

/**
 * Modify the img element using `setAttribute` so that that the src attribute
 * stores the link to your image.
 *
 * @param {String} url - a link to an image
 */
function updateStudentImage(imageUrl) {
  // code goes here
  studentImg.scr = imageUrl
}

/**
 * This function should run as soon as the page loads and update the correct student info
 */
function populateStudentInfo({ name, grade, advisor, major, graduationYear, imageUrl }) {
  updateStudentName(name)
  updateStudentGradeLevel(grade)
  updateStudentAdvisor(advisor)
  updateMajor(major)
  updateStudentGraduationYear(graduationYear)
  updateStudentImage(imageUrl)
}

/**
 * This function should add a headers row to the report card table
 */
function addReportCardHeaders() {
  // update the code here
  reportCardTable.innerHTML += `
  <div class='table-header'>
    <h4>Number</h4>
    <h4>Code</h4>
    <h4>Name</h4>
    <h4>Semester</h4>
    <h4>Credit</h4>
    <h4>Letter</h4>
  </div>
  `
}


/**
 * This function should take in a single course and create a row with the
 * course code, course name, course semester, course credits, course letter grade, and course points columns.
 *
 * @param {Object} course
 * @param {Number} rowNum
 */
function addCourseRowToReportCard(course, rowNum) {
  // update the code here with information about the course passed to this function
  reportCardTable.innerHTML += `
  <div class='table-row'>
    <h4 class= "rowNum-col">${rowNum}</h4>
    <h4 class= "code-col">${course.code}</h4>
    <h4 class= "name-col">${course.name}</h4>
    <h4 class= "sen-col">${course.semester}</h4>
    <h4 class= "credits-col">${course.credit}</h4>
    <h4  class= "letter-col">${course.letter}</h4>
  </div>
  `
}


/**
 * This is the primary function used to update the report card when the semester changes.
 * It should call the other functions responsible for creating the necessary HTML
 */
function updateReportCard() {
  updateDropdownLabel()
  reportCardTable.innerHTML = ``

  // add your code here
  addReportCardHeaders();
  let i = 1;
  studentData[semester].forEach(element => {
    addCourseRowToReportCard(element,i);
    i++;
  });
  // addCourseRowToReportCard(studentData[semester][0],1);

}
updateReportCard();


/**
 * This function should toggle the dropdown.
 *
 * If the dropdown classList contains the "closed" class, it should remove it.
 * If the dropdown classList doesn't contain the "closed" class, it should add it.
 */
function toggleDropdown() {
  // code goes here
    if (dropdown.classList.contains("closed")) {
      dropdown.classList.remove("closed")
    } else {
      dropdown.classList.add("closed")
    }
}

/**
 * This function should update the inner html of the dropdown label to be the current
 * value stored in the `semester` variable.
 */
function updateDropdownLabel() {
  // code goes here
  semesterDropLabel.innerHTML = semester
}

/**
 * This function should updates the `semester` variable.
 */
 function updateSemester(clicked) {
  // code goes here
  semester = clicked.innerHTML
}

// Add an event listener for the dropdown button that calls the toggleDropdown button
dropButton.addEventListner("click", (a) => toggleDropdown());
// {
  //add function code here!;
  // toggleDropdown()
  // console.log('clickkkk')
// }); 

// Add 3 event listeners - one for the fall semester option, the spring semester option, and the winter term option
// Each callback function one should update the `semester` variable,
// call the `updateReportCard` function and toggle the dropdown
fallSemester.addEventListener("click",()=>{
  updateSemester(fallSemester)
})

springSemester.addEventListener("click",()=>{
  updateSemester(springSemester)
})

winterTermSemester.addEventListener("click",()=>{
  updateSemester(winterTerm)
})
/*
* Add functions here to make it execute as soon as the page loads
*/
window.onload = function () {
  // run your function here to make it execute as soon as the page loads
  populateStudentInfo(studentInformation)
}
