// Interface för kurser
interface Course {
    code: string;
    name: string;
    progression: string;
    syllabus: string;
}

window.onload = init;

function init(): void {
    
    const addBtn = document.getElementById('addBtn') as HTMLButtonElement;

    // Eventlyssnare på knapp
    addBtn.addEventListener('click', () => {
        getInfo();
    })

};

// Hämta från inputs
function getInfo():void {
    //Hämta element från index.html
    const codeInput = document.getElementById('courseCode') as HTMLInputElement;
    const nameInput = document.getElementById('courseName') as HTMLInputElement;
    const progInput = document.getElementById('courseProg') as HTMLInputElement;
    const syllInput = document.getElementById('courseSyll') as HTMLInputElement;

    // Lägg ttil värden i nytt objekt
    let newCourse: Course = {
        code: codeInput.value,
        name: nameInput.value,
        progression: progInput.value,
        syllabus: syllInput.value
    };
    
    // Anropa viewCourse
    viewCourse(newCourse, codeInput);
};

function viewCourse(course:any, codeInput: HTMLInputElement): void {
    const tBody = document.getElementById('tBody') as HTMLInputElement;

    const errorDiv = document.getElementById('error') as HTMLInputElement;

    tBody.innerHTML += `
    <tr class='courseTr'>
        <td class='tdCode'>${course.code}</td>
        <td class='tdName'>${course.name}</td>
        <td class='tdProg'>${course.progression}</td>
        <td class='tdSyll'>${course.syllabus}</td>
    </tr>`

    storeCourses(course);
}

function storeCourses(course): void {

    let courseTr = document.getElementsByClassName('courseTr');
    let tdCode = document.getElementsByClassName('tdCode');

    console.log(tdCode.data);

}

