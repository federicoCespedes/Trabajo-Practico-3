const fs = require('fs');
const tareas = JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8'));
module.exports = {

    leerJson: () => JSON.parse(fs.readFileSync('./db/tareas.json', 'utf-8')),


    listarTareas: function () {         

        let tareas = this.leerJson();


        for (let i = 0; i < tareas.length; i++) {

            console.log(tareas[i]);
        };
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
        fs.writeFileSync('./db/tareas.json', JSON.stringify(tareas), 'utf-8')
    }

    }



    

   
   



        



