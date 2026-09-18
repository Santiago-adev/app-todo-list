let inputTarea = document.querySelector(".input-tarea")
let botonAgregar = document.querySelector(".btn-agregar")
let listaTareas = document.querySelector(".list-tarea")

let tareas = []

function mostrarTareas(){

        listaTareas.innerHTML = ""

        tareas.forEach((tarea, index)=>{
        //console.log(" ["+ index +"] " + tarea)

        let check = document.createElement("input")
        check.type = "checkbox"

        let li = document.createElement("li")
        li.appendChild(check)
        li.appendChild(document.createTextNode(tarea.tarea))
        if(tarea.completada){
            check.checked = true
            li.style.textDecoration = "line-through"
        } else {
            check.checked = false
            li.style.textDecoration = "none"
        }

        check.addEventListener("change", (e)=>{
        if(check.checked){
            tarea.completada = true
            li.style.textDecoration = "line-through"
            //console.log("Tarea completada")
        } else {
            tarea.completada = false
            li.style.textDecoration = "none"
            //console.log("Tarea no completada")
        }
        })
        listaTareas.appendChild(li)
    })
    }

botonAgregar.addEventListener("click", ()=>{
    //console.log("agregaste una tarea")

    let tareaIngresada = inputTarea.value.trim()
    //console.log(tareaIngresada)

    if(tareaIngresada == ""){
        alert("No puedes agregar una tarea vacía")
    } else {

        let miTarea = {
            tarea: tareaIngresada,
            completada: false
        }

        tareas.push(miTarea)
        //console.log(tareas)
        mostrarTareas()
    }    
})


