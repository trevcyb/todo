import { sub } from "date-fns";

let i = 0;

let projects = [];

class project {
    constructor(name, description, priority, tasks) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.tasks = tasks;
    }
}

class task {
    constructor(name, duedate, notes, priority, completed) {
        this.name = name;
        this.duedate = duedate;
        this.notes = notes;
        this.priority = priority;
        this.completed = completed;
    }
}

function createProjectSection() {

    const projectSection = document.createElement("section");

    const projectHeader = document.createElement("h2");
    projectHeader.innerHTML = "Your Projects";
    projectHeader.id = "projectHeader";
    projectSection.appendChild(projectHeader);

    const projectList = document.createElement("section");
    projectList.id = "projectList";
    projectSection.appendChild(projectList);

    const addNewProject = document.createElement("button");
    addNewProject.innerHTML = "Add a new Project";
    addNewProject.addEventListener("click", () => {
        const projectForm = document.querySelector("#projectForm");
        projectForm.style.display = "block";
    });
    projectSection.appendChild(addNewProject);

    return projectSection;
}


function createProjectForm() {

    const projectForm = document.createElement("form");
    projectForm.style.display = "none";
    projectForm.id = "projectForm";

    const projectFormCloseBtn = document.createElement("button");
    projectFormCloseBtn.innerHTML = "X";
    projectFormCloseBtn.addEventListener('click', cancelForm);
    projectForm.appendChild(projectFormCloseBtn);

    const projectNameLabel = document.createElement("label");
    projectNameLabel.innerHTML = "Enter a name for your project:"
    projectNameLabel.htmlFor = "projectNameInput";
    projectForm.appendChild(projectNameLabel);

    const projectNameInput = document.createElement("input");
    projectNameInput.id = "projectNameInput";
    projectForm.appendChild(projectNameInput);

    const projectDescriptionLabel = document.createElement("label");
    projectDescriptionLabel.htmlFor = "projectDescriptionInput";
    projectDescriptionLabel.innerHTML = "Enter a description for your project:";
    projectForm.appendChild(projectDescriptionLabel);

    const projectDescriptionInput = document.createElement("input");
    projectDescriptionInput.id = "projectDescriptionInput";
    projectForm.appendChild(projectDescriptionInput);

    const submitbtn = document.createElement("button");
    submitbtn.type = "button";
    submitbtn.id = "submitbtn";
    submitbtn.innerHTML = "Submit";
    submitbtn.addEventListener("click", () => {
    addNewProject();
    projectForm.style.display = "none";
    });
    projectForm.appendChild(submitbtn);

    const cancelbtn = document.createElement("button");
    cancelbtn.innerHTML = "Cancel";
    cancelbtn.addEventListener('click', cancelForm);
    projectForm.appendChild(cancelbtn);

    const deletebtn = document.createElement("button");
    deletebtn.innerHTML = "Delete";
    deletebtn.id = "deletebtn";
    deletebtn.addEventListener('click', deleteProject);
    deletebtn.style.display = "none";
    projectForm.appendChild(deletebtn);

    return projectForm;
}

function deleteProject () {
    projects.splice(pnum, 1);
    alert("Item was removed");

    let projectGrid = document.querySelectorAll(".project-item");
    projectGrid.forEach(item => item.remove());

    displayProject();
}

function cancelForm () {
    projectNameInput.value = "";
    projectDescriptionInput.value = "";
    projectForm.style.display = "none";
}

function addNewProject() {
    const projectName = document.getElementById("projectNameInput").value;
    console.log(projectName);
    const projectDescription = document.getElementById("projectDescriptionInput").value;
    projects[i] = new project(projectName, projectDescription, i, []);
    console.log(projects[i].name);
    i++;
    document.getElementById("projectNameInput").value = "";
    document.getElementById("projectDescriptionInput").value = "";
    displayProject();
}

function displayProject() {
    for(let pnum = 0; pnum < projects.length; pnum++) {
        let cell = document.createElement("div");
        cell.setAttribute("data-projid", pnum);
        cell.innerHTML = '<h2>' + projects[pnum].name + '</h2>';
        projectList.appendChild(cell).className = "project-item";
        
        let editbtn = document.createElement('button');
        editbtn.innerHTML = "Edit Project";
        editbtn.classList = "edit";
        editbtn.addEventListener("click", editProject);
        projectNameInput.value = projects[pnum].name;
        projectDescriptionInput.value = projects[pnum].description;

        let projectitems = document.querySelectorAll('.project-item');
        projectitems.forEach(projectitem => projectitem.appendChild(editbtn).className = "editbtn");

    }

    let projectitems = document.querySelectorAll('.project-item');

    projectitems.forEach(projectitem => projectitem.addEventListener('mouseover', function () {
        let chosen = document.querySelectorAll('.project-item' + this.dataset.projid);
        for (let chs of chosen) {
            chs.style.display = "inline-block";
        }
    }));

    projectitems.forEach(projectitem => projectitem.addEventListener('mouseout', function () {
        let chosen = document.querySelectorAll('.project-item' + this.dataset.projid);
        for (let chs of chosen) {
            chs.style.display = "none";
        }
    }));
}

function editProject (event) {
    const projectForm = document.getElementById("projectForm");
    projectForm.style.display = "block";
    document.getElementById("projectName").value = projects[event.target.parentElement.dataset.projid].name;
    document.getElementById("projectDescription").value = projects[event.target.parentElement.dataset.projid].description;
    const submitbtn = document.getElementById("submitbtn");
    submitbtn.style.display = "none";

    const saveeditbtn = document.createElement("button");
    saveeditbtn.type = "button";
    saveeditbtn.is = "saveeditbtn";
    saveeditbtn.innerHTML = "Save Edit";
    saveeditbtn.addEventListener("click", (event) => {
        projects[event.target.parentElement.dataset.projid].name = document.getElementById("projectName").value;
        projects[event.target.parentElement.dataset.projid].description = document.getElementById("projectDescription").value;
        document.getElementById("projectName").value = "";
        document.getElementById("projectDescription").value = "";
        displayProject();
    });
    projectForm.appendChild(saveeditbtn);

    const deletebtn = document.getElementById("deletebtn");
    deletebtn.style.display = "block";
}


function createTaskForm () {

    const taskForm = document.createElement("form");

    const taskNameLabel = document.createElement("label");
    taskNameLabel.innerHTML = "Enter a name for your task:";
    taskForm.appendChild(taskNameLabel);

    const taskDueDateLabel = document.createElement("label");
    taskDueDateLabel.innerHTML = "Enter a Due Date for your Task:";
    taskForm.appendChild(taskDueDateLabel);

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    today = yyyy + '-' + mm + '-' + dd;

    const taskDueDate = document.createElement("input");
    taskDueDate.type = "datetime-local";
    taskDueDate.name = "duedate";
    taskDueDate.id = "duedate";
    taskDueDate.min = today;
    taskForm.appendChild(taskDueDate);

    const taskNotesLabel = document.createElement("label");
    taskNotesLabel.innerHTML = "Notes:";
    taskForm.appendChild(taskNotesLabel);

    const taskNotes = document.createElement("input");
    taskNotes.type = "text";
    taskForm.appendChild(taskNotes);

}

function setActive(id) {
    const activeBtn = document.querySelector(".tab.active");
    if (activeBtn) activeBtn.classList.remove("active");

    const projectsBtn = document.getElementById(id);
    projectsBtn.classList.add("active");
}

function loadProjects() {
    const content = document.getElementById("main");

    const projectPage = createProjectSection();

    const projectFormPage = createProjectForm();

    content.innerHTML = "";

    setActive("projectsSB");

    content.appendChild(projectPage);
    content.appendChild(projectFormPage);
}

export default loadProjects;