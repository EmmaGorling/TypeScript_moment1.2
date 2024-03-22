//Hämta element från index.html
const codeInput = document.getElementById('courseCode') as HTMLInputElement;
const nameInput = document.getElementById('courseName') as HTMLInputElement;
const progInput = document.getElementById('courseProg') as HTMLInputElement;
const urlInput = document.getElementById('courseUrl') as HTMLInputElement;

window.onload = init;

function init():void {
    const addBtn = document.getElementById('addBtn') as HTMLButtonElement;

    // Eventlyssnare på knapp
    addBtn.addEventListener('click', () => {
        getInfo();
    })
}

function getInfo():void {
    let newCourse = {
        code:codeInput.value
    };

    writeToTable(newCourse);
};

function writeToTable(course) {

    const tBody = document.getElementById('tBody') as HTMLInputElement;

    tBody.innerHTML += `
    <tr class='courseTr'>
        <td class='tdCode>${course.code}</td>
    </tr>`

    //storeCourses();
}

