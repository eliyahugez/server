const generateBizNumber = require("./generateBizNumber");

const normalizedCard = async (rawCard) => {
  const { url, alt } = rawCard.image;

  const image = {
    url:
      url ||
      "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
    alt: alt || "Business Card",
  };

  return {
    ...rawCard,
    image,
    address: {
      ...rawCard.address,
      state: rawCard.address.state || "not defined",
    },
    bizNumber: rawCard.bizNumber || (await generateBizNumber()),
    user_id: "5151551515dsfsdf5s51f",
    //  rawCard.user_id || userId,
  };
};
module.exports = normalizedCard;
