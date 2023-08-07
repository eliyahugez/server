import validateCard from "../validations/cardValidationService";

createCard = () =>{
const {error} = validateCard(rawCard);

if (error) {
    return Promise.reject(error);
} else {
    return Promise.resolve("Card created successfully")
}}