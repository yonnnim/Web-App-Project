// external modules
const zxcvbn = require("zxcvbn")
const Joi = require("joi").extend(joiPassword)

module.exports = {
  newUser,
  partialUser
}

const userSchema = Joi.object().keys({
  phone: Joi.string()
    .alphanum()
    .min(3)
    .max(15)
    .label("Phone"),
  country: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .label("Country"),
  company: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .label("Company"),
  fname: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .label("First name"),
  lname: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .label("Last name"),
  email: Joi.string()
    .email()
    .label("Email"),
  password: Joi.password()
    .strong()
    .label("Password"),
  role: Joi.string()
    .only("user", "admin")
    .label("Role")
})

function joiPassword(joi) {
  return {
    name: "password",
    language: {
      strong: "is too weak"
    },
    rules: [
      {
        name: "strong",
        validate(params, value, state, options) {
          if (zxcvbn(value).score < 2) {
            return this.createError(
              "password.strong",
              { v: value },
              state,
              options
            )
          }
          return value
        }
      }
    ]
  }
}

async function newUser(user) {
  return await Joi.validate(
    user,
    userSchema.requiredKeys("fname", "lname", "email", "password"),
    { abortEarly: false }
  )
}

async function partialUser(user) {
  return await Joi.validate(user, userSchema.min(1), { abortEarly: false })
}
