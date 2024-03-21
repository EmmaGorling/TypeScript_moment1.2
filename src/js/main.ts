// Interface för kurser
interface Course {
    code: string;
    name: string;
    progression: Progression;
    syllabus: string;
}
// De värden som progression kan ha
enum Progression {
    A = 1,
    B,
    C
}

window.onload = () => init();

function init(): void {
    //Hämta element från index.HTML
    const codeInput: HTMLElement = document.getElementById('courseCode');
    const nameInput: HTMLElement = document.getElementById('courseName');
    const progInput: HTMLElement = document.getElementById('courseProg');
    const urlInput: HTMLElement = document.getElementById('courseUrl');
    const addBtn: HTMLElement = document.getElementById('addBtn');

    // Eventlyssnare på knapp
    addBtn.addEventListener('click', () => {
        addCourse();
    })

};

function addCourse(): void {
    console.log('Hej');
}