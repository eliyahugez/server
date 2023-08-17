const bcrypt = require("bcrypt");

const generateUserPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};
const compareUserPassword = (passwordLogin, passwordFromDB) => {
  return bcrypt.compareSync(passwordLogin, passwordFromDB);
};
