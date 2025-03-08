'use strict';


/**
 * Retorna la lista de animales
 * Entrega una lista de mascotas
 *
 * returns Animal
 **/
exports.animalsGET = function() {
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


/**
 * Obtener el nombre y tipo de animal ingresando su ID
 * Obtener el nombre y tipo de animal ingresando su ID
 *
 * id Long Codigo del animal
 * returns Animal
 **/
exports.animalsIdGET = function(id) {
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

