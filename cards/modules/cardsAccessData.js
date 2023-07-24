const DB = process.env.DB || "NOT_MONGODB";

getCards = async () => {
    if (DB === "MONGODB") {
        try {
            // throw new Error("can not find cards in the the database");
            return Promise.resolve("in getCards");
        } catch (error) {
            error.status = 404;
            return Promise.reject(error);
        }
    }
    return Promise.resolve("get cards not in mongoDB");
};


FindMycards = async (userid)=>{
    try {
        return Promise.resolve(`my cards ${userid}`);
    } catch (error) {
        error.status = 400;
      return Promise.reject(error);
    }
} 
FindOne = async (cardId)=>{
    try {
        return Promise.resolve(`card no. ${cardId}`);
    } catch (error) {
        error.status = 400;
     return Promise.reject(error);
    }
} 

create = async (noramlizedCard)=>{
    if (DB === "MONGODB") {
noramlizedCard._id ="123456";
try {
    return Promise.resolve(noramlizedCard)
} catch (error) {
    error.status = 400;
    return Promise.reject(error);
}
} return Promise.resolve("get cards not in mongoDB");
}

update = async (cardId,noramlizedCard)=>{
    try {
      return Promise.resolve(`card no. ${cardId} updated`);
        
    } catch (error) {
        error.status = 400;
        return Promise.reject(error);
    }
}
 like = async (cardId,userId)=>{
    try {
        return Promise.resolve( `card no.${cardId} liked by ${userId}` );
    } catch (error) {
        error.status = 400;
        return Promise.reject(error);
    }
  
}

 remove = async (cardId)=>{
    if (DB === "MONGODB") {
    try {
        return Promise.resolve( `card no.${cardId} Deleted by ${userId}` )
    } catch (error) {
        error.status = 400;
        return Promise.reject(error);
    }  }
    return Promise.resolve("get cards not in mongoDB");
}



exports.getCards = getCards;
exports.FindMycards=FindMycards;
exports.FindOne=FindOne;
exports.create=create;
exports.update=update;
exports.like=like;
exports.remove=remove;