'use strict';

var utils = require('../utils/writer.js');
var PetConsult = require('../service/PetConsultService');

module.exports.animalsGET = function animalsGET (req, res, next) {
  PetConsult.animalsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.animalsIdGET = function animalsIdGET (req, res, next, id) {
  PetConsult.animalsIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
