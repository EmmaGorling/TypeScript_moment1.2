//Hämta element från index.html
const codeInput = document.getElementById('courseCode') as HTMLInputElement;
const nameInput = document.getElementById('courseName') as HTMLInputElement;
const progInput = document.getElementById('courseProg') as HTMLInputElement;
const syllInput = document.getElementById('courseSyll') as HTMLInputElement;


// Inteface för ny kurs
interface courseInfo {
    code: any
    name: any
    progression: any
    syllabus: any
}

let courseArr: any[] = [];

// När sidan laddas
window.onload = init;

function init():void {
    // Lägga till knapp
    const addBtn = document.getElementById('addBtn') as HTMLButtonElement;
    addBtn?.addEventListener('click', () => {
        getInput();
    });
}

// Hämta input
function getInput(): void {
    // Lägg till input i newCourse
    let newCourse: courseInfo = {
        code: codeInput.value,
        name: nameInput.value,
        progression: progInput.value,
        syllabus: syllInput.value
    };

    // Lägg till i array
    courseArr.push(newCourse);

    writeCourse(newCourse);
}

function writeCourse(course:any):void {
    // Hämta div för utskrift
    let coursesDiv = document.getElementById('courses') as HTMLDivElement;

    coursesDiv.innerHTML += `
    <article>
        <h3>${course.name}</h3>
        <p>Kurskod: ${course.code}</p>
        <p>Progression: ${course.progression}</p>
        <p>Kursplan: ${course.syllabys}</p>
    </article>`;
    
};
