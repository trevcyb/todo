(()=>{"use strict";function e(e,t){const n=document.createElement("button");return n.id=e,n.innerHTML=t,n.classList.add("tab"),n}let t=0,n=[],d=0,o=0;class c{constructor(e,t,n,d){this.name=e,this.description=t,this.priority=n,this.tasks=d}}class a{constructor(e,t,n,d,o){this.name=e,this.duedate=t,this.notes=n,this.priority=d,this.completed=o}}function l(){n[d].tasks.splice(o,1),document.querySelectorAll(".task-item").forEach((e=>e.remove()));const e=document.getElementById("taskSaveEditBtn"),t=document.getElementById("taskDeleteBtn"),c=document.getElementById("taskSubmitBtn"),a=document.getElementById("addTaskDiv");e.style.display="none",t.style.display="none",c.style.display="block",a.style.display="none",i()}function i(){document.querySelectorAll(".task-item").forEach((e=>e.remove()));for(let e=0;e<n[d].tasks.length;e++){let t=document.createElement("li");t.setAttribute("data-taskid",e),t.innerHTML=n[d].tasks[e].name,taskForm.appendChild(t).className="task-item",n[d].tasks[e].completed?t.classList.add("checked"):t.classList.remove("checked");let c=document.createElement("button");c.innerHTML="Edit Task",c.style.display="none",c.addEventListener("click",(e=>{o=e.target.parentElement.dataset.taskid,s()}));let a=document.createElement("input");a.type="checkbox",a.style.display="none",a.addEventListener("change",(e=>{o=e.target.parentElement.dataset.taskid,a.checked?(n[d].tasks[o].completed=!0,t.classList.add("checked")):(n[d].tasks[o].completed=!1,t.classList.remove("checked"))})),t.addEventListener("mouseover",(()=>{c.style.display="inline-block",a.style.display="inline-block"})),t.addEventListener("mouseout",(()=>{c.style.display="none",a.style.display="none"}));let l=document.querySelectorAll(".task-item");l.forEach((e=>e.appendChild(c).className="taskeditbtn")),l.forEach((e=>e.appendChild(a).className="compCheck"))}}function s(){document.getElementById("addTaskDiv").style.display="block",document.getElementById("taskNameInput").value=n[d].tasks[o].name,document.getElementById("duedate").value=n[d].tasks[o].duedate,document.getElementById("taskNotes").value=n[d].tasks[o].notes,document.getElementById("taskSaveEditBtn").style.display="block",document.getElementById("taskDeleteBtn").style.display="block",document.getElementById("taskSubmitBtn").style.display="none"}function r(){n[d].tasks[o].name=taskNameInput.value,n[d].tasks[o].duedate=duedate.value,n[d].tasks[o].notes=taskNotes.value,taskNameInput.value="",duedate.value="",taskNotes.value="",document.querySelectorAll(".task-item").forEach((e=>e.remove()));const e=document.getElementById("taskSaveEditBtn"),t=document.getElementById("taskDeleteBtn"),c=document.getElementById("taskSubmitBtn"),a=document.getElementById("addTaskDiv");e.style.display="none",t.style.display="none",c.style.display="block",a.style.display="none",i()}function m(){projectNameInput.value="",projectDescriptionInput.value="",projectFormDiv.style.display="none";const e=document.getElementById("projectsaveeditbtn"),t=document.getElementById("projectdeletebtn");e.style.display="none",t.style.display="none"}function u(){n.splice(d,1),document.querySelectorAll(".project-item").forEach((e=>e.remove()));const e=document.getElementById("projectsaveeditbtn"),t=document.getElementById("projectdeletebtn"),o=document.getElementById("projectsubmitbtn"),c=document.getElementById("projectFormDiv");e.style.display="none",t.style.display="none",o.style.display="block",c.style.display="none",console.log(n),y()}function p(){console.log(projectNameInput.value),n[d].name=projectNameInput.value,n[d].description=projectDescriptionInput.value,projectNameInput.value="",projectDescriptionInput.value="",projectFormDiv.style.display="none",document.querySelectorAll(".project-item").forEach((e=>e.remove()));const e=document.getElementById("projectsaveeditbtn"),t=document.getElementById("projectdeletebtn"),o=document.getElementById("projectsubmitbtn");e.style.display="none",t.style.display="none",o.style.display="block",y()}function y(){for(let e=0;e<n.length;e++){let t=document.createElement("div");t.setAttribute("data-projid",e),t.innerHTML="<h2>"+n[e].name+"</h2>",projectList.appendChild(t).className="project-item";let o=document.createElement("button");o.innerHTML="Edit Project",o.style.display="none",o.addEventListener("click",(e=>{d=e.target.parentElement.dataset.projid,e.stopPropagation(),E()})),t.addEventListener("mouseover",(()=>{o.style.display="block"})),t.addEventListener("mouseout",(()=>{o.style.display="none"})),document.querySelectorAll(".project-item").forEach((e=>e.appendChild(o).className="editbtn"))}document.querySelectorAll(".project-item").forEach((e=>e.addEventListener("click",(e=>{taskSectionDiv.style.display="block",d=e.target.parentElement.dataset.projid,document.getElementById("taskFormHeader").innerHTML=n[d].name,i()}))))}function E(){document.getElementById("projectFormDiv").style.display="block";const e=document.getElementById("projectNameInput"),t=document.getElementById("projectDescriptionInput");e.value=n[d].name,t.value=n[d].description,document.getElementById("projectsubmitbtn").style.display="none",document.getElementById("projectsaveeditbtn").style.display="block",document.getElementById("projectdeletebtn").style.display="block"}const k=function(){const e=document.getElementById("main"),o=function(){const e=document.createElement("section"),t=document.createElement("h2");t.innerHTML="Your Projects",t.id="projectHeader",e.appendChild(t);const n=document.createElement("section");n.id="projectList",e.appendChild(n);const d=document.createElement("button");return d.innerHTML="Add a new Project",d.id="addNewProject",d.type="button",d.addEventListener("click",(()=>{document.getElementById("projectNameInput").value="",document.getElementById("projectDescriptionInput").value="",document.getElementById("projectsubmitbtn").style.display="block",document.querySelector("#projectFormDiv").style.display="block"})),e.appendChild(d),e}(),s=function(){const e=document.createElement("div");e.id="projectFormDiv";const d=document.createElement("form");d.style.display="block",d.id="projectForm",e.appendChild(d);const o=document.createElement("button");o.innerHTML="X",o.id="projectxbtn",o.type="button",o.addEventListener("click",m),d.appendChild(o);const a=document.createElement("label");a.innerHTML="Enter a name for your project:",a.htmlFor="projectNameInput",a.id="projectNameLabel",d.appendChild(a);const l=document.createElement("input");l.id="projectNameInput",d.appendChild(l);const i=document.createElement("label");i.htmlFor="projectDescriptionInput",i.innerHTML="Enter a description for your project:",i.id="projectDescriptionLabel",d.appendChild(i);const s=document.createElement("input");s.id="projectDescriptionInput",d.appendChild(s);const r=document.createElement("button");r.type="button",r.id="projectsubmitbtn",r.innerHTML="Submit",r.addEventListener("click",(()=>{!function(){const e=document.getElementById("projectNameInput").value,d=document.getElementById("projectDescriptionInput").value;n[t]=new c(e,d,t,[]),t++,n=n.filter((e=>void 0!==e)),document.querySelectorAll(".project-item").forEach((e=>e.remove())),console.log(n),y()}(),e.style.display="none"})),d.appendChild(r);const E=document.createElement("button");E.innerHTML="Cancel",E.id="projectcancelbtn",E.type="button",E.addEventListener("click",m),d.appendChild(E);const k=document.createElement("button");k.innerHTML="Delete",k.id="projectdeletebtn",k.type="button",k.style.display="none",k.addEventListener("click",u),d.appendChild(k);const v=document.createElement("button");return v.type="button",v.id="projectsaveeditbtn",v.innerHTML="Save Edit",v.style.display="none",v.addEventListener("click",p),d.appendChild(v),e}(),E=function(){const e=document.createElement("div");e.id="taskSectionDiv";const t=document.createElement("div");t.id="taskListDiv",e.appendChild(t);const n=document.createElement("h2");n.id="taskFormHeader",t.appendChild(n);const d=document.createElement("ul");d.id="taskForm",t.appendChild(d);const o=document.createElement("li");o.id="addNewTask",o.innerHTML="Add a New Task",o.addEventListener("click",(()=>{document.getElementById("addTaskDiv").style.display="block",i()})),d.appendChild(o);const c=document.createElement("button");c.type="button",c.innerHTML="Save",c.id="taskFormSubmitBtn",t.appendChild(c);const a=document.createElement("button");return a.type="button",a.innerHTML="Cancel",a.id="taskFormCancelBtn",a.addEventListener("click",(()=>{e.style.display="none",i()})),t.appendChild(a),e}(),k=function(){const e=document.createElement("div");e.id="addTaskDiv";const t=document.createElement("form");t.id="addTaskForm",e.appendChild(t);const o=document.createElement("label");o.innerHTML="Enter your task:",t.appendChild(o);const c=document.createElement("input");c.id="taskNameInput",t.appendChild(c);const s=document.createElement("label");s.innerHTML="Enter a Due Date for your Task:",t.appendChild(s);let m=new Date,u=m.getDate(),p=m.getMonth()+1,y=m.getFullYear();u<10&&(u="0"+u),p<10&&(p="0"+p),m=y+"-"+p+"-"+u;const E=document.createElement("input");E.type="datetime-local",E.name="duedate",E.id="duedate",E.min=m,t.appendChild(E);const k=document.createElement("label");k.innerHTML="Notes:",t.appendChild(k);const v=document.createElement("input");v.type="text",v.id="taskNotes",t.appendChild(v);const b=document.createElement("button");b.type="button",b.id="taskSaveEditBtn",b.style.display="none",b.innerHTML="Save",b.addEventListener("click",r),t.appendChild(b);const h=document.createElement("button");h.type="button",h.id="taskDeleteBtn",h.innerHTML="Delete",h.style.display="none",h.addEventListener("click",l),t.appendChild(h);const I=document.createElement("button");I.id="taskSubmitBtn",I.type="button",I.innerHTML="Submit",I.addEventListener("click",(()=>{const t=new a(c.value,E.value,v.value,1,!1);n[d].tasks.push(t),i(),c.value="",E.value="",v.value="",e.style.display="none"})),t.appendChild(I);const L=document.createElement("button");return L.id="taskSubmitBtn",L.type="button",L.innerHTML="Cancel",L.addEventListener("click",(()=>{c.value="",E.value="",v.value="",e.style.display="none"})),t.appendChild(L),e}();e.innerHTML="",function(e){const t=document.querySelector(".tab.active");t&&t.classList.remove("active"),document.getElementById("projectsSB").classList.add("active")}(),e.appendChild(o),e.appendChild(s),e.appendChild(E),e.appendChild(k),y()},v=function(){const e=document.getElementById("main"),t=function(){const e=document.createElement("section"),t=document.createElement("h2");t.innerHTML="About Noteriety",t.id="aboutUsHeader",e.appendChild(t);const n=document.createElement("p");return n.innerHTML="In a constantly evolving world, we're here to help you make sense of the madness. Introducing Noteriety, to help you keep track of the daily bustle.",n.id="aboutUsInfo",e.appendChild(n),e}();e.innerHTML="",function(e){const t=document.querySelector(".tab.active");t&&t.classList.remove("active"),document.getElementById("home").classList.add("active")}(),e.appendChild(t)};(function(){const t=document.getElementById("content"),n=function(){const e=document.createElement("header");return e.id="header",e.innerHTML="Noteriety",e}();t.appendChild(n);const d=function(){const t=document.createElement("div");t.id="sidebar";const n=e("home","Home"),d=e("projectsSB","Projects");return t.appendChild(n),t.appendChild(d),t}();t.appendChild(d);const o=function(e){const t=document.createElement("main");return t.id="main",t}();t.appendChild(o)})(),k(),function(){const e=document.getElementById("home"),t=document.getElementById("projectsSB");e.addEventListener("click",v),t.addEventListener("click",k)}()})();