import validateCard from "../validations/cardValidationService";
import normalizeCard from "../helpers/normalizeCard";
import handleErrors from "../../utils/handleErrors";
import Card from "../helpers/mongooseValidators";

const handleCreateCard = async (rawCard, res) => {
  const { error } = validateCard(rawCard);
  if (error)
    return handleErrors(res, 400, `joi error: ${error.details[0].message}`);
  const card = await normalizeCard(rawCard);

  return cardAfterJoi;
};
