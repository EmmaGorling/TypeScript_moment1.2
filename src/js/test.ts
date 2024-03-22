window.onload = init;

// Interface för kurser
interface Course {
    code: string;
    name: string;
    progression: string;
    syllabus: string;
}

let courseArr:any [] = [];

function init():void {

    const addBtn: HTMLElement|null = document.getElementById('addBtn');
    addBtn?.addEventListener('click', () => {
        checkInputs();
    })
    loadStorage();
};

function checkInputs(): void {
    //Hämta element från index.html
    const codeInput = document.getElementById('courseCode') as HTMLInputElement;
    const nameInput = document.getElementById('courseName') as HTMLInputElement;
    const progInput = document.getElementById('courseProg') as HTMLInputElement;
    const urlInput = document.getElementById('courseUrl') as HTMLInputElement;
    const tBody = document.getElementById('tBody') as HTMLInputElement;
    const errorDiv = document.getElementById('error') as HTMLInputElement;

    let newCourse: Course = {
        code: codeInput.value,
        name: nameInput.value, 
        progression: progInput.value,
        syllabus: urlInput.value
    }

    writeCourse(newCourse);
};

function writeCourse(course:any):void {
    const tBody = document.getElementById('tBody') as HTMLInputElement;

    const errorDiv = document.getElementById('error') as HTMLInputElement;

    tBody.innerHTML += `
    <tr class='courseTr'>
        <td>${course.code}</td>
        <td>${course.name}</td>
        <td>${course.progression}</td>
        <td>${course.syllabus}</td>
    </tr>`
    courseArr.push(course);
    storeCourse(); 
};

function storeCourse():void {
    let jsonstr = JSON.stringify(courseArr);

    localStorage.setItem('courseList', jsonstr);

};

function loadStorage():void {
    const courses = JSON.parse(localStorage.getItem('courseList'));
    
    for(let i = 0; i < courses.length; i++) {
        console.log(courses[i]);
    }
};

