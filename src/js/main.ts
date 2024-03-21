// Interface för kurser
interface Course {
    code: string;
    name: string;
    progression: string;
    syllabus: string;
}


window.onload = () => init();

function init(): void {
    
    const addBtn = document.getElementById('addBtn') as HTMLButtonElement;

    // Eventlyssnare på knapp
    addBtn.addEventListener('click', () => {
        getInfo();
    })

};

function getInfo():void {
    //Hämta element från index.html
    const codeInput = document.getElementById('courseCode') as HTMLInputElement;
    const nameInput = document.getElementById('courseName') as HTMLInputElement;
    const progInput = document.getElementById('courseProg') as HTMLInputElement;
    const urlInput = document.getElementById('courseUrl') as HTMLInputElement;

    let newCourse: Course = {
        code: codeInput.value,
        name: nameInput.value,
        progression: progInput.value,
        syllabus: urlInput.value
    };
    
    addCourse(newCourse);
    storeCourse(newCourse);
};

function addCourse(course:any):void {
    const tBody: HTMLElement|null = document.getElementById('tBody');

    // Skapa table-rad
    const trEl: HTMLTableRowElement = document.createElement('tr');

    // Skapa td med kurskod
    const codeTd: HTMLTableCellElement = document.createElement('td');
    let codeText = document.createTextNode(course.code);
    codeTd.appendChild(codeText);
    // Skapa td med kursnamn
    const nameTd: HTMLTableCellElement = document.createElement('td');
    let nameText = document.createTextNode(course.name);
    nameTd.appendChild(nameText);
    // Skapa td med progression
    const progTd: HTMLTableCellElement = document.createElement('td');
    let progText = document.createTextNode(course.progression);
    progTd.appendChild(progText);
    // Skapa td med URL
    const urlTd: HTMLTableCellElement = document.createElement('td');
    let urlText = document.createTextNode(course.syllabus);
    urlTd.appendChild(urlText);


    // Lägg till celler i tr
    trEl.appendChild(codeTd);
    trEl.appendChild(nameTd);
    trEl.appendChild(progTd);
    trEl.appendChild(urlTd);

    // Lägg till tr i tbody
    tBody?.appendChild(trEl);
}

function storeCourse(course:object):void {

};