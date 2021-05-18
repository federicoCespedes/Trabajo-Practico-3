const fs = require('fs');
const tareas = JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8'));
module.exports = {

    leerJson: () => JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8')),


    listarTareas: function () {                      //Implementación de forEach en reemplazo de for//
        tareas.forEach(tarea => {
            console.log(tarea);
    });
        
    },
    agregarTareas: function (titulo, estado) {

        let nuevaTarea = {
            titulo,
            estado
        }
        let tareas = this.leerJson();
        tareas.push(nuevaTarea)
        fs.writeFileSync('./db/tareas.json', JSON.stringify(tareas), 'utf-8')
    },
    filtrarTareas: function (filtro) {
        let tareasFiltradas = tareas.filter(tarea => tarea.estado === filtro || tarea.titulo.includes(filtro));
        return console.log(tareasFiltradas)
    },
    borrarTarea: function () {
        tareas.pop()
        this.guardarJson(tareas)

        this.listarTareas()
    },
    guardarJson: function (tareas) {
        fs.writeFileSync('./db/tareas.json', JSON.stringify(tareas,null,2), 'utf-8')  //Implementación de null,2 para no perder el indentado.
    }

    }



    

   
   



        



