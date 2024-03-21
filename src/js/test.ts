window.onload = init;

function init():void {

    const addBtn: HTMLElement|null = document.getElementById('addBtn');
    addBtn?.addEventListener('click', () => {
        checkInputs();
    })
};

function checkInputs(): void {
    //Hämta element från index.html
    const codeInput: HTMLElement|null = document.getElementById('courseCode') as HTMLInputElement | null;
    const nameInput: HTMLElement|null = document.getElementById('courseName');
    const progInput: HTMLElement|null = document.getElementById('courseProg');
    const urlInput: HTMLElement|null = document.getElementById('courseUrl');
    const tBody: HTMLElement|null = document.getElementById('tBody');
    const errorDiv: HTMLDivElement = document.getElementById('error');

    if(progInput.value === 'A' || progInput.value === 'B' || progInput.value === 'C' ) {
        console.log(progInput.value)
        errorDiv.innerHTML = '';
    } else {
        errorDiv.innerHTML = '<p>Progression måste vara A, B eller C.</p>'
    }
};
