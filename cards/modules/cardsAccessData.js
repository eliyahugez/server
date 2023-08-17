const handleErrors = require("../../utils/handleErrors");
const Card = require("../helpers/mongooseValidators");

const DB = process.env.DB || "MONGODB";
getCards = async () => {
  if (DB === "MONGODB") {
    try {
      const cards = await Card.find();
      console.log(cards);
      return Promise.resolve(cards);
    } catch (error) {
      error.status = 404;
      return handleErrors(res, error.status || 404, "Mongoose");
    }
  }
  return Promise.resolve([]), console.log("connot connect");
};
getMyCards = async (userId) => {
  if (DB === "MONGODB") {
    try {
      const cards = await Card.find({ _id: userId });
      if (!cards) {
        handleErrors("Could not find cards in database");
      }
      Promise.resolve(cards);
    } catch (error) {
      error.status = 404;
      //handleErrors(error, 404, `Mongoose: ${error.message} `);
      handleErrors("Could not find cards in database");
    }
  }
};

FindMycards = async (userid) => {
  try {
    return Promise.resolve(`my cards ${userid}`);
  } catch (error) {
    error.status = 400;
    return Promise.reject(error);
  }
};
FindOne = async (cardId) => {
  try {
    return Promise.resolve(`card no. ${cardId}`);
  } catch (error) {
    error.status = 400;
    return Promise.reject(error);
  }
};

create = async (noramlizedCard) => {
  if (DB === "MONGODB") {
    try {
      let card = new Card(normalizedCard);
      card = await card.save();
      return Promise.resolve(noramlizedCard);
    } catch (error) {
      error.status = 400;
      ret;
    }
  }
  return Promise.resolve("get cards not in mongoDB");
};

update = async (cardId, noramlizedCard) => {
  try {
    return Promise.resolve(`card no. ${cardId} updated`);
  } catch (error) {
    error.status = 400;
    return Promise.reject(error);
  }
};
like = async (cardId, userId) => {
  try {
    return Promise.resolve(`card no.${cardId} liked by ${userId}`);
  } catch (error) {
    error.status = 400;
    return Promise.reject(error);
  }
};

remove = async (cardId) => {
  if (DB === "MONGODB") {
    try {
      return Promise.resolve(`card no.${cardId} Deleted by ${userId}`);
    } catch (error) {
      error.status = 400;
      return Promise.reject(error);
    }
  }
  return Promise.resolve("get cards not in mongoDB");
};

exports.getCards = getCards;
exports.FindMycards = FindMycards;
exports.getMyCards = getMyCards;
exports.FindOne = FindOne;
exports.create = create;
exports.update = update;
exports.like = like;
exports.remove = remove;
