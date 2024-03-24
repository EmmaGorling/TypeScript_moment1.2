//Hämta input-element från index.html
const codeInput = document.getElementById('courseCode') as HTMLInputElement;
const nameInput = document.getElementById('courseName') as HTMLInputElement;
const progInput = document.getElementById('courseProg') as HTMLInputElement;
const syllInput = document.getElementById('courseSyll') as HTMLInputElement;

// Hämta div för utskrift
let coursesDiv = document.getElementById('courses') as HTMLDivElement;

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
    // Lägga till -knapp
    const addBtn = document.getElementById('addBtn') as HTMLButtonElement;
    addBtn?.addEventListener('click', () => {
        getInput();
    });
    // Rensa -knapp
    const clearBtn =document.getElementById('clearBtn');
    clearBtn?.addEventListener('click', () => {
        clearCourses();
    })

    loadCourses();
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
    // Kontrollera om kurskoden redan finns i arrayen
    const codeExists = courseArr.some(course => course.code === newCourse.code);
    if (codeExists) {
        alert("Kurskoden finns redan i listan.");
        return; // Avbryt funktionen om kurskoden redan finns
    }

    // Lägg till i array
    courseArr.push(newCourse);

    writeCourse(newCourse);
    storeCourses(courseArr);
}

function writeCourse(course:any):void {

    // Rensa input-fält
    codeInput.value = '';
    nameInput.value = '';
    syllInput.value = '';

    // Article-element
    const article = document.createElement('article');
    
    // Lägg till i article
    article.innerHTML = `
        <h3>${course.name}</h3>
        <p>Kurskod: ${course.code}</p>
        <p>Progression: ${course.progression}</p>
        <a href='${course.syllabus}' target='_blank'>Kursplan för ${course.name}</a>
        <button type='submit' class='editBtn'><i class="fa-solid fa-pen-to-square"></i></button>
        <button type='submit' class='deleteBtn'><i class="fa-regular fa-trash-can"></i></button>
        `;

    //Lägg till article till div
    coursesDiv.appendChild(article);

    // Redigera - knapp
    const editBtn = article.querySelector('.editBtn') as HTMLButtonElement;
    editBtn.addEventListener('click', () => {
        editCourse(article, course);
    });
    // Radera- knapp
    const deleteBtn = article.querySelector('.deleteBtn');
    deleteBtn?.addEventListener('click', () => {
        deleteCourse(article, course);
    })
    
};

function storeCourses(courses: courseInfo[]):void {
    const jsonStr = JSON.stringify(courses);

    localStorage.setItem('courseList', jsonStr);
};

// LAdda local Storage
function loadCourses(): void {
    const storedCourses = localStorage.getItem('courseList');
    if (storedCourses) {
        courseArr = JSON.parse(storedCourses);
        // Loopa genom varje sparad kurs och skriv ut den
        courseArr.forEach(course => {
            writeCourse(course);
        });
    }
};

// Rensa localStorage
function clearCourses():void {
    coursesDiv.innerHTML = '';
    localStorage.clear();
    courseArr = [];
};

function editCourse(article:HTMLElement, course:courseInfo):void {

    // Prompt för att ändra kursen
    const editedCourse: courseInfo = {
        code: prompt('Ny kurskod:', course.code) || course.code,
        name: prompt('Nytt kursnamn:', course.name) || course.name,
        progression: prompt('Ny progression', course.progression) || course.progression,
        syllabus: prompt('Ny kursplan', course.syllabus) || course.syllabus
    };

    // Uppdatera innehåll i article
    article.innerHTML = `
        <h3>${editedCourse.name}</h3>
        <p>Kurskod: ${editedCourse.code}</p>
        <p>Progression: ${editedCourse.progression}</p>
        <a href='${editedCourse.syllabus}' target='_blank'>Kursplan för ${editedCourse.name}</a>
        <button type='submit' class='editBtn'><i class="fa-solid fa-pen-to-square"></i></button>
        <button type='submit' class='deleteBtn'><i class="fa-regular fa-trash-can"></i></button>
    `;
    // Redigera - knapp OBS! För att kunna redigera flera gånger
    const editBtn = article.querySelector('.editBtn') as HTMLButtonElement;
    editBtn.addEventListener('click', () => {
        editCourse(article, editedCourse);
    });
    // Radera- knapp OBS! För att kunna radera efter redigering
    const deleteBtn = article.querySelector('.deleteBtn');
    deleteBtn?.addEventListener('click', () => {
        deleteCourse(article, editedCourse);
    })

    // Uppdatera kursinformationen i array
    const index: number = courseArr.findIndex(c => c.code === course.code);
    courseArr[index] = editedCourse;

    // Spara ändringarna
    storeCourses(courseArr);
};

function deleteCourse(article: HTMLElement, course:courseInfo):void {
    // Ta bort articel-elementet
    coursesDiv.removeChild(article);

    //Ta bort kurs från array
    courseArr = courseArr.filter(c => c.code !== course.code);

    // Spara borttagning
    storeCourses(courseArr);
};