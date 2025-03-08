'use strict';

var utils = require('../utils/writer.js');
var PetDelete = require('../service/PetDeleteService');

module.exports.animalsIdDELETE = function animalsIdDELETE (req, res, next, id) {
  PetDelete.animalsIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
