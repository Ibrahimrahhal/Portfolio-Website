var Joi = require('joi-browser');
// var _ = require('lodash/fp/object');
var schema = {
  name: Joi.string().regex(/[a-z]{3,}\s[a-z]{3,}/i).max(40).required(),
  email: Joi.string().email().required(),
  project: Joi.string().min(10).max(1000).required()
};
var valid = {
  name: false,
  email: false,
  project: false
};

function validate_form({
  target: x
}) {


  var joi_obj = Joi.validate({
    [x.name]: x.value
  }, {
    [x.name]: schema[x.name]
  });

  if (joi_obj.error) {
    if (x.name === "name") {
      document.getElementsByClassName(x.name + '_error')[0].innerHTML = "Wrong Name Format";
    } else {
      document.getElementsByClassName(x.name + '_error')[0].innerHTML = joi_obj.error.message.slice(joi_obj.error.message.lastIndexOf("\"") + 1, joi_obj.error.message.lastIndexOf("]"));
    }
    valid[x.name] = false;
  } else {
    document.getElementsByClassName(x.name + '_error')[0].innerHTML = "";
    valid[x.name] = true;

  }
  if (valid.name && valid.email && valid.project) {

    document.getElementById("mybtn").disabled = false;
    $("#mybtn").addClass("project-btn-hover");
    $("#mybtn").removeClass("disabled");

  } else {

    document.getElementById("mybtn").disabled = true;
    $("#mybtn").removeClass("project-btn-hover");
    $("#mybtn").addClass("disabled");
  }


}
// console.log("joi");

module.exports.valfun = validate_form;