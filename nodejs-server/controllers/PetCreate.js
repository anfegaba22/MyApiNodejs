'use strict';

var utils = require('../utils/writer.js');
var PetCreate = require('../service/PetCreateService');

module.exports.animalsPOST = function animalsPOST (req, res, next, body) {
  PetCreate.animalsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
