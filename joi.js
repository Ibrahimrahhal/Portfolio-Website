var Joi = require('joi-browser');
var _ = require('lodash/fp/object');
var schema = {
  name: Joi.string().regex(/[a-z]{3,}\s[a-z]{3,}/i).max(40).required(),
  email: Joi.string().email().required(),
  project: Joi.string().min(10).max(1000).required()
};

function validate_form({
  target: x
}) {
  console.log(
    Joi.validate({
      [x.name]: x.value
    }, {
      [x.name]: schema[x.name]
    })

  )


}
console.log("joi");

module.exports.valfun = validate_form;