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
    
    const addBtn: HTMLElement|null = document.getElementById('addBtn');

    // Eventlyssnare på knapp
    addBtn.addEventListener('click', () => {
        getInfo();
    })

};
/*
function addCourse(): void {
    //Hämta element från index.HTML
    const codeInput: HTMLElement|null = document.getElementById('courseCode') ;
    const nameInput: HTMLElement|null = document.getElementById('courseName');
    const progInput: HTMLElement|null = document.getElementById('courseProg');
    const urlInput: HTMLElement|null = document.getElementById('courseUrl');
    const tBody: HTMLElement|null = document.getElementById('tBody');

    // Skapa table-rad
    const trEl: HTMLTableRowElement = document.createElement('tr');

    // Skapa td med kurskod
    const codeTd: HTMLTableCellElement = document.createElement('td');
    let codeText = document.createTextNode(codeInput.value);
    codeTd.appendChild(codeText);


    // Lägg till celler i tr
    trEl.appendChild(codeTd);

    // Lägg till tr i tbody
    tBody?.appendChild(trEl);
}
*/
function getInfo():void {
    //Hämta element från index.html
    const codeInput: HTMLElement|null = document.getElementById('courseCode') as HTMLInputElement | null;
    const nameInput: HTMLElement|null = document.getElementById('courseName');
    const progInput: HTMLElement|null = document.getElementById('courseProg');
    const urlInput: HTMLElement|null = document.getElementById('courseUrl');
    const tBody: HTMLElement|null = document.getElementById('tBody');

    if(progInput.value === 'A' || progInput.value === 'B' || progInput.value === 'C') {
        let course: Course = {
            code: codeInput.value,
            name: nameInput.value,
            progression: progInput.value,
            syllabus: urlInput.value
        }

        console.log(course);
    } else {
        let errorDiv: HTMLDivElement | null = document.getElementById('error');
        errorDiv.innerHTML = '<p>Progressionen måste vara A, B eller C.'
    }
    
};