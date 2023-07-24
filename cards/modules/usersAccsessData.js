const register = async (noramlizedUser) => {

        try {
            noramlizedUser._id ="123456";
            return Promise.resolve(noramlizedUser);
} catch (error) {
    error.status = 400;
    return Promise.reject(error);
}
}
const login = async (user) => {

        try {
           
            return Promise.resolve("in login");
} catch (error) {
    error.status = 400;
    return Promise.reject(error);
}
}


exports.login = login;
exports.register = register;
