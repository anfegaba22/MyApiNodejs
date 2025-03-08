'use strict';

var utils = require('../utils/writer.js');
var PetUpdate = require('../service/PetUpdateService');

module.exports.animalsPUT = function animalsPUT (req, res, next, body) {
  PetUpdate.animalsPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
