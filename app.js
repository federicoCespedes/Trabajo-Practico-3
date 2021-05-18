
const moduloTareas = require('./tareas/index');

const process = require('process');

const comando = process.argv[2];

switch (comando) {


   case 'listar':

      moduloTareas.listarTareas();

      break;

   case 'filtrar':

      moduloTareas.filtrarTareas(process.argv[3])
     
      break;

   case 'agregar':

      let titulo = process.argv[3];
      if (!titulo) {
         console.log('Se requiere un título');
         break
      }
      let estado = process.argv[4];
      moduloTareas.agregarTareas(titulo, estado)
      break;

   case 'borrar':                           //nos borra por defecto la última tarea asignada.

      moduloTareas.borrarTarea();


      break
   case undefined:

      console.log('Atención - Tienes que pasar una acción.');

      break

   default:

      console.log('No entiendo que quieres hacer')
}

