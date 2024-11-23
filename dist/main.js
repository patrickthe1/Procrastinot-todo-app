(()=>{"use strict";var n={159:(n,e,t)=>{t.d(e,{A:()=>a});var o=t(601),r=t.n(o),d=t(314),i=t.n(d)()(r());i.push([n.id,"   \n    body {\n      margin: 0;\n      font-family: Arial, sans-serif;\n      display: flex;\n      height: 100vh;\n      background-color: #1e2a38; \n      color: #f0f0f0; \n    }\n    #sidebar {\n      width: 250px;\n      background-color: #243447; \n      display: flex;\n      color: #f0f0f0;\n      flex-direction: column;\n      padding: 10px;\n    }\n    #sidebar h2 {\n      text-align: center;\n      margin-bottom: 20px;\n    }\n    #sidebar ul {\n      list-style: none;\n      padding: 0;\n    }\n    #sidebar ul li {\n      margin: 10px 0;\n      cursor: pointer;\n      padding: 10px;\n      border-radius: 5px;\n      transition: background-color 0.3s;\n    }\n    #sidebar ul li:hover {\n      background-color: #3a4a5b; \n    }\n    #main-content {\n      flex: 1;\n      display: flex;\n      position: relative;\n      flex-direction: column;\n    }\n\n    #header {\n      background-color: #16202b;\n      padding: 10px 20px;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      position: sticky;\n      top: 0;\n      width: 100%;\n      z-index: 10;\n      margin-bottom: 10px;\n  }\n  \n  #header h1 {\n      margin: 0;\n      color: #ffffff;\n      font-size: 1.5em;\n  }\n  \n  #header input {\n      padding: 8px 10px;\n      border-radius: 20px;\n      border: none;\n      outline: none;\n      width: 300px;\n      font-size: 1em;\n      margin-right: 2.5rem;\n      transition: box-shadow 0.2s ease;\n  }\n  \n  #header input:focus {\n      box-shadow: 0 0 8px rgba(52, 152, 219, 0.8);\n  }\n  \n  #header input::placeholder {\n      color: #bdc3c7;\n  }\n  \n  \n  #welcome-message {  \n    font-family: 'Arial', sans-serif;   \n    font-weight: bold;   \n    font-size: 24px;   \n    color: #333;   \n    margin: 20px 0;   \n    text-align: center;   \n}\n    #content {\n        background-color: #f0f0f0; \n        padding: 20px; \n        border-radius: 10px; \n        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); \n        min-height: 400px; \n        display: flex; \n        flex-direction: column; \n        align-items: center; \n        justify-content: center; \n        gap: 15px; \n        color: #3a4a5b; \n        margin-left: 20px;\n        margin-right: 20px;\n    }\n\n\n#home-container {\n  margin: 2rem auto;\n  padding: 2rem;\n  max-width: 500px;\n  background-color: #f8f9fa; \n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(24, 177, 191, 0.2); \n  text-align: center; \n  font-family: Arial, sans-serif;\n}\n\n\n#home-container h2 {\n  font-size: 1.8rem;\n  color: #333;\n  margin-bottom: 1rem;\n}\n\n\n#project-form {\n  display: flex;\n  flex-direction: column; \n  gap: 1rem; \n}\n\n#project-card{\n  display: flex;\n  flex-direction: column; \n  gap: 1rem; \n  width: 800px;\n  height: 500px;\n}\n\n\n\n#project-form input {\n  padding: 0.8rem;\n  font-size: 1rem;\n  border: 1px solid #cccc;\n  border-radius: 5px;\n  outline: none;\n  transition: border-color 0.3s;\n}\n\n#project-form input:focus {\n  border-color: #007bff; \n}\n\n\n#project-form button , #project-card button {\n  padding: 0.8rem;\n  font-size: 1rem;\n  background-color: #007bff; \n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n#project-form button:hover , #project-card button:hover{\n  background-color: #0056b3; \n}\n\n\n#todo-form-dialog {\n  position: fixed;\n  top: -100%; \n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5); \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0; \n  transition: all 0.4s ease; \n  z-index: 999; \n}\n\n\n#todo-form-dialog.active {\n  top: 0; \n  opacity: 1; \n  display: flex;\n  flex-direction: column;\n}\n\n\n#todo-form {\n  width: 90%;\n  max-width: 400px;\n  padding: 2rem;\n  background-color: #f8f9fa; \n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); \n  font-family: Arial, sans-serif;\n}\n\n\n#todo-form h2 {\n  font-size: 1.8rem;\n  color: #333;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n\n\n#todo-form input,\n#todo-form textarea,\n#todo-form select {\n  width: 100%;\n  padding: 0.8rem;\n  font-size: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  margin-bottom: 1rem;\n  outline: none;\n  transition: border-color 0.3s;\n}\n\n#todo-form input:focus,\n#todo-form textarea:focus,\n#todo-form select:focus {\n  border-color: #007bff; \n}\n\n\n#todo-form button  {\n  padding: 0.8rem;\n  font-size: 1rem;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n#todo-form button.submit , #project-card#add-todo {\n  background-color: #007bff; \n  color: #fff;\n}\n\n#todo-form button.submit:hover {\n  background-color: #0056b3; \n}\n\n#todo-form button.cancel {\n  background-color: #6c757d; \n  color: #fff;\n  margin-left: 0.5rem;\n}\n\n#todo-form button.cancel:hover {\n  background-color: #5a6268; \n}\n\n/* Todos Container */\n#todos-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 0;\n  margin: 0;\n}\n\n/* Todo Item */\n.todo-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #ffffff;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  padding: 1rem;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n/* Checkbox */\n.todo-checkbox {\n  margin-right: 1rem;\n  transform: scale(2.1);\n  cursor: pointer;\n}\n\n/* Todo Details */\n.todo-details {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.todo-details h3 {\n  margin: 0;\n  font-size: 2rem;\n  color: #333;\n}\n\n.todo-details p {\n  margin: 0;\n  font-size: 1.9rem;\n}\n\n/* Priority Styling */\n.priority-low {\n  color: #28a745; /* Green */\n}\n\n.priority-medium {\n  color: #ffc107; /* Yellow */\n}\n\n.priority-high {\n  color: #dc3545; /* Red */\n}\n\n/* Action Buttons */\n.todo-actions {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.todo-actions button {\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.todo-actions button.edit {\n  background-color: #ffc107;\n  color: #333;\n}\n\n.todo-actions button.edit:hover {\n  background-color: #e0a800;\n}\n\n.todo-actions button.delete {\n  background-color: #dc3545;\n  color: #fff;\n}\n\n.todo-actions button.delete:hover {\n  background-color: #c82333;\n}\n\n/* Project List */\n#projects-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.project-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n  margin-bottom: 0.5rem;\n  background-color: #06104a;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.3s ease;\n}\n\n.project-item:hover {\n  background-color: #f1f1f1;\n}\n\n/* Delete Button */\n.delete-project-btn {\n  background-color: #dc3545;\n  border: none;\n  color: #fff;\n  font-size: 1rem;\n  border-radius: 50%;\n  width: 1.5rem;\n  height: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color 0.3s ease, transform 0.2s ease;\n}\n\n.delete-project-btn:hover {\n  background-color: #c82333;\n  transform: scale(1.1);\n}\n\n.delete-project-btn:active {\n  background-color: #b21f2d;\n}\n\n#high-priority-list {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n\n#high-priority-list li {\n  background-color: #ffdfdf; /* Light red for emphasis */\n  color: #a10000; /* Dark red text */\n  margin: 0.5em 0;\n  padding: 0.5em 1em;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n#high-priority-list li:hover {\n  background-color: #ffc2c2; /* Slightly lighter red on hover */\n}\n\n/* Overlay styling */\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1000;\n}\n\n/* Edit Todo Form styling */\n.edit-todo-form {\n  background-color: white;\n  padding: 2em;\n  border-radius: 10px;\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n.edit-todo-form h3 {\n  text-align: center;\n  margin-bottom: 1em;\n  color: #2c3e50;\n}\n\n.edit-todo-form label {\n  font-weight: bold;\n  color: #34495e;\n}\n\n.edit-todo-form input,\n.edit-todo-form textarea,\n.edit-todo-form select {\n  width: 100%;\n  padding: 0.5em;\n  border: 1px solid #bdc3c7;\n  border-radius: 5px;\n  font-size: 1em;\n}\n\n.edit-todo-form button {\n  padding: 0.7em;\n  border: none;\n  border-radius: 5px;\n  font-size: 1em;\n  cursor: pointer;\n}\n\n.save-btn {\n  background-color: #3498db;\n  color: white;\n  transition: background-color 0.3s ease;\n}\n\n.save-btn:hover {\n  background-color: #2980b9;\n}\n\n.cancel-btn {\n  background-color: #e74c3c;\n  color: white;\n  transition: background-color 0.3s ease;\n}\n\n.cancel-btn:hover {\n  background-color: #c0392b;\n}\n\n\n\n\n\n\n\n\n\n\n\n",""]);const a=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,d){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&i[s[0]]||(void 0!==d&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=d),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var d={},i=[],a=0;a<n.length;a++){var c=n[a],l=o.base?c[0]+o.base:c[0],s=d[l]||0,p="".concat(l," ").concat(s);d[l]=s+1;var m=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=r(u,o);o.byIndex=a,e.splice(a,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var d=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<d.length;i++){var a=t(d[i]);e[a].references--}for(var c=o(n,r),l=0;l<d.length;l++){var s=t(d[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}d=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var d=t.sourceMap;d&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var d=e[o]={id:o,exports:{}};return n[o](d,d.exports,t),d.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),r=t.n(o),d=t(825),i=t.n(d),a=t(659),c=t.n(a),l=t(56),s=t.n(l),p=t(540),m=t.n(p),u=t(113),f=t.n(u),g=t(159),b={};b.styleTagTransform=f(),b.setAttributes=s(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=m(),r()(g.A,b),g.A&&g.A.locals&&g.A.locals;const h=(()=>{const n="todoApp",e=e=>{localStorage.setItem(n,JSON.stringify(e))};return{loadFromStorage:()=>{const e=JSON.parse(localStorage.getItem(n));return Array.isArray(e)?e.filter((n=>null!==n)):[]},saveToStorage:e,initializeStorage:()=>{localStorage.getItem(n)||e([])}}})(),x=(n,e)=>{const t=h.loadFromStorage(),o=t.find((e=>e.name===n));o&&(o.todos.push(e),h.saveToStorage(t))},v=(n,e)=>{const t=h.loadFromStorage(),o=t.find((e=>e.name===n));o&&(o.todos.splice(e,1),h.saveToStorage(t))},y=n=>{const e=h.loadFromStorage();if(e.some((e=>e.name===n)))throw new Error("Project with that name already exists");{const t=((n,e=[])=>({name:n,todos:e}))(n);return e.push(t),h.saveToStorage(e),t}},E=n=>{let e=h.loadFromStorage();e=e.filter((e=>e.name!==n)),h.saveToStorage(e)},C=(()=>{const n=()=>{const e=document.getElementById("projects-list");e.innerHTML="";const t=h.loadFromStorage();if(t&&t.length>0)t.forEach((t=>{const o=document.createElement("li");o.classList.add("project-item");const r=document.createElement("span");r.textContent=t.name,r.addEventListener("click",(()=>{C.showProjectDetails(t.name)}));const d=document.createElement("button");d.classList.add("delete-project-btn"),d.innerHTML="&#10005;",d.addEventListener("click",(()=>{window.confirm(`Are you sure you want to delete the project "${t.name}"?`)&&(E(t.name),n())})),o.appendChild(r),o.appendChild(d),e.appendChild(o)}));else{const n=document.createElement("li");n.textContent="No projects available.",e.appendChild(n)}},e=n=>{const e=document.getElementById("content"),r=h.loadFromStorage().find((e=>e.name===n));if(!r)return;e.innerHTML="";const d=document.createElement("div");d.setAttribute("id","project-card");const i=document.createElement("h2");i.textContent=r.name;const a=document.createElement("button");a.textContent="Add Todo",a.setAttribute("id","add-todo"),a.addEventListener("click",(()=>t(n)));const c=document.createElement("ul");c.setAttribute("id","todos-container"),r.todos.forEach(((e,t)=>o(e,t,c,n))),d.appendChild(i),d.appendChild(a),d.appendChild(c),e.appendChild(d)},t=n=>{const t=document.createElement("div");t.setAttribute("id","todo-form-dialog"),t.innerHTML=`\n        <h3>Add Todo for ${n}</h3>\n        <form id="todo-form">\n            <input type="text" id="todo-title" placeholder="Title" required />\n            <textarea id="todo-description" placeholder="Description"></textarea>\n            <input type="date" id="todo-due-date" required />\n            <select id="todo-priority">\n                <option value="Low">Low</option>\n                <option value="Medium">Medium</option>\n                <option value="High">High</option>\n            </select>\n            <button type="button" id="confirm-todo">Confirm</button>\n            <button type="button" id="cancel-todo">Cancel</button>\n        </form>\n    `,t.classList.add("active"),document.body.appendChild(t),document.getElementById("confirm-todo").addEventListener("click",(()=>{const o={title:document.getElementById("todo-title").value,description:document.getElementById("todo-description").value,dueDate:document.getElementById("todo-due-date").value,priority:document.getElementById("todo-priority").value,completed:!1};x(n,o),document.body.removeChild(t),e(n)})),document.getElementById("cancel-todo").addEventListener("click",(()=>{t.classList.remove("active"),document.body.removeChild(t)}))},o=(n,t,o,d)=>{const i=document.createElement("div");i.classList.add("todo-item");const a=document.createElement("input");a.type="checkbox",a.checked=n.completed,a.classList.add("todo-checkbox"),a.addEventListener("change",(()=>{n.completed=a.checked,h.saveToStorage(h.loadFromStorage())}));const c=document.createElement("div");c.classList.add("todo-details");const l=document.createElement("h3");l.textContent=n.title;const s=document.createElement("p");s.textContent=`Due: ${n.dueDate}`;const p=document.createElement("p");p.textContent=`Priority: ${n.priority}`,p.classList.add(`priority-${n.priority.toLowerCase()}`),c.appendChild(l),c.appendChild(s),c.appendChild(p);const m=document.createElement("div");m.classList.add("todo-actions");const u=document.createElement("button");u.textContent="Edit",u.classList.add("edit"),u.addEventListener("click",(()=>r(n,t,d)));const f=document.createElement("button");f.textContent="Delete",f.classList.add("delete"),f.addEventListener("click",(()=>{v(d,t),e(d)})),m.appendChild(u),m.appendChild(f),i.appendChild(a),i.appendChild(c),i.appendChild(m),o.appendChild(i)},r=(n,t,o)=>{const r=document.createElement("div");r.classList.add("overlay");const d=document.createElement("div");d.classList.add("edit-todo-form");const i=document.createElement("h3");i.textContent="Edit Todo";const a=document.createElement("label");a.textContent="Title:";const c=document.createElement("input");c.type="text",c.value=n.title;const l=document.createElement("label");l.textContent="Description:";const s=document.createElement("textarea");s.value=n.description||"";const p=document.createElement("label");p.textContent="Due Date:";const m=document.createElement("input");m.type="date",m.value=n.dueDate||"";const u=document.createElement("label");u.textContent="Priority:";const f=document.createElement("select");["High","Medium","Low"].forEach((e=>{const t=document.createElement("option");t.value=e.toLowerCase(),t.textContent=e,n.priority.toLowerCase()===e.toLowerCase()&&(t.selected=!0),f.appendChild(t)}));const g=document.createElement("button");g.textContent="Save",g.classList.add("save-btn");const b=document.createElement("button");b.textContent="Cancel",b.classList.add("cancel-btn"),d.appendChild(i),d.appendChild(a),d.appendChild(c),d.appendChild(l),d.appendChild(s),d.appendChild(p),d.appendChild(m),d.appendChild(u),d.appendChild(f),d.appendChild(g),d.appendChild(b),r.appendChild(d),document.body.appendChild(r),b.addEventListener("click",(()=>{r.remove()})),g.addEventListener("click",(()=>{n.title=c.value,n.description=s.value,n.dueDate=m.value,n.priority=f.value;const d=h.loadFromStorage(),i=d.find((n=>n.name===o));i&&(i.todos[t]=n,h.saveToStorage(d)),e(o),r.remove()}))};return{renderProjects:n,renderTodoItem:o,showProjectDetails:e,openTodoForm:t,openEditTodoForm:r,renderHighPriorityProjects:()=>{const n=document.getElementById("content");n.innerHTML="";const e=document.createElement("h2");e.textContent="High Priority Projects";const t=document.createElement("ul");t.setAttribute("id","high-priority-list");const o=h.loadFromStorage().filter((n=>n.todos.some((n=>"high"===n.priority.toLowerCase()))));if(0===o.length){const n=document.createElement("li");n.textContent="No high-priority projects available.",t.appendChild(n)}else o.forEach((n=>{const e=document.createElement("li");e.textContent=n.name,e.addEventListener("click",(()=>{C.showProjectDetails(n.name)})),t.appendChild(e)}));n.appendChild(e),n.appendChild(t)}}})(),k=C,w=()=>{document.getElementById("content").innerHTML='\n        <div id="home-container">\n          <h2>Add a Project</h2>\n          <form id="project-form">\n            <input id="project-name" type="text" placeholder="Enter project name" />\n            <button id="project-submit" type="button">Add Project</button>\n          </form>\n        </div>\n      ',document.getElementById("project-submit").addEventListener("click",(()=>{try{const n=document.getElementById("project-name").value.trim();if(!n)return void alert("Project name cannot be empty!");y(n),k.renderProjects(),document.getElementById("project-name").value=""}catch(n){alert(n.message)}}))},j=()=>{const n=document.getElementById("home-tab"),e=document.getElementById("projects-tab"),t=document.getElementById("projects-list"),o=document.getElementById("high-priority-tab");let r=!1;n.addEventListener("click",(()=>{w(),r=!1})),e.addEventListener("click",(()=>{r?(t.innerHTML="",r=!1):(k.renderProjects(),r=!0)})),o.addEventListener("click",(()=>{k.renderHighPriorityProjects()}))},L=(()=>{const n=n=>{const e=document.getElementById("projects-list"),t=document.createElement("li");t.textContent=n.name,t.addEventListener("click",(()=>{k.showProjectDetails(n.name)})),e.appendChild(t)};return{initialize:()=>{const e=document.getElementById("search-bar"),t=document.getElementById("projects-list"),o=h.loadFromStorage();e.addEventListener("input",(e=>{const r=e.target.value.toLowerCase().trim();if(t.innerHTML="",r){const e=o.filter((n=>n.name.toLowerCase().includes(r)));if(e.length>0)e.forEach((e=>n(e)));else{const n=document.createElement("li");n.textContent="No projects found.",t.appendChild(n)}}else o.forEach((e=>n(e)))}))}}})();document.addEventListener("DOMContentLoaded",(()=>{h.initializeStorage(),j(),L.initialize()}))})();