document.addEventListener("DOMContentLoaded",  () => {

    const taskList1 = document.getElementById("taskList1");

    //referencia al elemento seleccionado de la lista:
    let selectedTask = null;

    document.getElementById("addTask1").addEventListener(    "click", ()=>{
        const textoTarea = prompt("Ingrese el historial que desea añadir");
        if(textoTarea)
        {
            //crea un nuevo elemento HTML de tipo "li"
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = textoTarea;
            taskList1.appendChild(nuevaTarea);  
            //se le adiciona el handler de seleccion a la nueva tarea 
            selectedTaskHandler(nuevaTarea);      
        }
    }   );
    document.getElementById("deleteTask1").addEventListener(   "click", ()=>{
        if(selectedTask){
            taskList1.removeChild(selectedTask);
            selectedTask = null;

        } else{
            alert("No ha seleccionado ningun historial para eliminar");
        }
    }   );

    document.getElementById("editTask1").addEventListener(   "click", () => {
        if(selectedTask)
        {
            const nuevoTexto = prompt("Modificar historial", selectedTask.textContent);
            if(nuevoTexto)
            {
                selectedTask.textContent = nuevoTexto;
            }
        }
        else{
            alert("Seleccione historial para modificar");
        }
    } );

    function selectedTaskHandler(task)
    {
        task.addEventListener("click",() => {
            selectedTask = task;
        });
    }
    

});
    //----------------------------------------------------------------------------

    document.addEventListener("DOMContentLoaded",  () => {
    
        // se obtiene referencia a la lista dinamica:
        const taskList = document.getElementById("taskList");
    
        //referencia al elemento seleccionado de la lista:
        let selectedTask = null;
    
        document.getElementById("addTask").addEventListener(    "click", ()=>{
            const textoTarea = prompt("Ingrese el nombre de la habilidad");
            if(textoTarea)
            {
                //crea un nuevo elemento HTML de tipo "li"
                const nuevaTarea = document.createElement("li");
                nuevaTarea.textContent = textoTarea;
                taskList.appendChild(nuevaTarea);  
                //se le adiciona el handler de seleccion a la nueva tarea 
                selectedTaskHandler(nuevaTarea);      
            }
        }   );
        document.getElementById("deleteTask").addEventListener(   "click", ()=>{
            if(selectedTask){
                taskList.removeChild(selectedTask);
                selectedTask = null;
    
            } else{
                alert("No ha seleccionado ninguna habilidad para eliminar");
            }
        }   );
    
        document.getElementById("editTask").addEventListener(   "click", () => {
            if(selectedTask)
            {
                const nuevoTexto = prompt("Modificar la habilidad", selectedTask.textContent);
                if(nuevoTexto)
                {
                    selectedTask.textContent = nuevoTexto;
                }
            }
            else{
                alert("Seleccione una habilidad para modificar");
            }
        } );
    
        function selectedTaskHandler(task)
        {
            task.addEventListener("click",() => {
                selectedTask = task;
            });
        }
    });        
    