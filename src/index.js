document.querySelector("#create-task-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const description=document.querySelector("#new-task-description").value;
  console.log("Form submited",description );
  const tasks= document.getElementById("tasks")
  tasks.innerHTML +=`<li>  ${description} 
    <button id="remove" >X</button>
    </li>`
//  remove event
  const Remove=document.getElementById("remove")
  Remove.addEventListener("click", (e)=>{
    e.target.parentNode.remove()
  })
});

// This is the replica of what i tried to get the priority tasks---------------------------------------------------------

// document.querySelector("#create-task-form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const description=document.querySelector("#new-task-description").value;
//   console.log("Form submited",description );
//   const tasks= document.getElementById("tasks")
//   tasks.innerHTML +=`<li> <input type="checkbox" id="priority" name="Priority_check" value="Priority">
//     <input type="checkbox" id="priority" name="complete" value="completion">
//     ${description} 
//     <button id="remove" >X</button>
//     </li>`

//   const check=document.getElementById("priority")
//   check.addEventListener("click",(check)=>{
//     if(check.target.name === "Priority_check"){
//       tasks.innerHTML += "(Priority)"
//     }
//     else if (check.target.name === "Priority_uncheck"){
//       tasks.innerHTML += "(Complete)"
//     }
//   })
  
// //  remove event
//   const Remove=document.getElementById("remove")
//   Remove.addEventListener("click", (e)=>{
//     e.target.parentNode.remove()
//   })
// });

// THe code was inputing the values on the first task only and caused the closing property to be inactive.
// although i did not find a way to put priority as a drop down is it still possible to do it in the same way i did it?

// For th sorting i thought of using the selection function but i didnt know how to use it, it kept giving me errors.

// I also wanted to ask if i could get a one on one session to clarify on th areas that i still have a problem on.