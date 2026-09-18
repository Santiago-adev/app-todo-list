let inputTarea = document.querySelector(".input-tarea")
let botonAgregar = document.querySelector(".btn-agregar")
let listaTareas = document.querySelector(".list-tarea")

let tareas = []

function mostrarTareas(){

        listaTareas.innerHTML = ""

        tareas.forEach((tarea, index)=>{
        console.log(" ["+ index +"] " + tarea)

        let li = document.createElement("li")
        li.textContent = tarea
        listaTareas.appendChild(li)
    })
    }

botonAgregar.addEventListener("click", ()=>{
    //console.log("agregaste una tarea")

    let tareaIngresada = inputTarea.value.trim()
    console.log(tareaIngresada)

    if(tareaIngresada == ""){
        alert("No puedes agregar una tarea vacía")
    } else {
        tareas.push(tareaIngresada)
        console.log(tareas)
        mostrarTareas()
    }    
})
