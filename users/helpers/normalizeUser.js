const normalizeUser =(rawUser) =>{
const name = {...rawUser.name};

name.middle= rawUser.name.middle || "" ;

const image = {...rawUser.image};
image.url = rawUser.image.url || "Default value "; 
image.alt = rawUser.image.alt || "Default value " ;

const address = {...rawUser.address};
address.state = rawUser.image.url || "not define"; 

const user = {...rawUser};
user.name = name; 
user.image = image; 
user.address = address; 

return user;

}

module.exports = normalizeUser;