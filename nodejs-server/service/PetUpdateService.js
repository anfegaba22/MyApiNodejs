'use strict';


/**
 * Actualiza un animal en la BD
 * Actualiza un animalpor el ID
 *
 * body Animal actualizar un animal existente
 * returns Animal
 **/
exports.animalsPUT = function(body) {
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

