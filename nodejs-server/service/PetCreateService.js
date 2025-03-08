'use strict';


/**
 * Crear un nuevo animal en la BD
 * Permite crear animales nuevos en la base de datos
 *
 * body Animal Datos del nuevo animal
 * returns Animal
 **/
exports.animalsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "animal" : "Perro",
  "id" : 1,
  "nombre" : "Lucas"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

