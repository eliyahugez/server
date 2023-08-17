const express = require("express");
const router = express.Router();
const cardsRestController = require("../cards/routes/cardsRestConteroller");
const handleErrors = require("../utils/handleErrors");
const mongoose = require("mongoose");
const chalk = require("chalk");

router.use("/cards", cardsRestController);
// router.use('/users', usersRestController);

const schema = new mongoose.Schema({
  name: { type: String },
  password: { type: String },
  number: { type: Number },
  bool: { type: Boolean },
});
const Test = mongoose.model("Test", schema);

router.post("/", async (req, res) => {
  try {
    const dataFromReqBody = req.body;
    const user = new Test(dataFromReqBody);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.log(chalk.redBright(`Mongoose Scchema error ${error.message}`));
    handleErrors(res, 500, error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const instance = await Test.find();
    res.status(200).json(instance);
  } catch (error) {
    handleErrors(res, 500, error.message);
  }
});
router.get("/query", async (req, res) => {
  try {
    const instance = await Test.find(
      {
        number: {
          $gte: 1,
          $eq: 3,
        },
        bool: true,
      },
      { name: 1, number: 1, _id: 0 }
    );
    res.status(200).json(instance);
  } catch (error) {
    handleErrors(res, 500, error.message);
  }
});

router.get("/select", async (req, res) => {
  try {
    instance = await Test.findOne().select(["name", "number", "-_id"]);
    res.status(200).json(instance);
  } catch (error) {
    handleErrors(res, 500, error.message);
  }
});
router.get("/selectNumber", async (req, res) => {
  function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
  }
  try {
    const randomNum = getRandomNumber();
    instance = await Test.findOne({ number: randomNum }).select([
      "number",
      "-_id",
    ]);
    if (!instance) {
      handleErrors(res, 404, "Random Not found in Server");
      return;
    }
    res.status(200).json(instance);
  } catch (error) {
    handleErrors(res, 500, error.message);
  }
});
router.get("/findOne/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const instance = await Test.findOne({ _id: id });
    if (!instance) {
      handleErrors(res, 500, "Not found");
      return;
    }
    res.status(200).json(instance);
  } catch (error) {
    handleErrors(res, 500, error.message);
  }
});
router.get("/findById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const instance = await Test.findById({ _id: id });
    if (!instance) {
      handleErrors(res, 500, "Not found");
      return;
    }
    res.status(200).json(instance);
  } catch (error) {
    handleErrors(res, 500, error.message);
  }
});
router.patch("/changeBoolAndUpdate/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const pipeline = [{ $set: { bool: { $not: "$bool" } } }];
    const data = await Test.findByIdAndUpdate(id, pipeline, { new: true });
    if (!data) {
      handleErrors(res, 500, "Not found");
      return;
    }
    res.status(200).json(data);
  } catch (error) {
    handleErrors(res, 500, error.message);
  }
});
router.delete("/findByIdAndDelete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const instance = await Test.findByIdAndDelete(id);
    if (!instance) {
      handleErrors(res, 500, "Not found");
      return;
    }
    res.status(200).json(instance);
  } catch (error) {
    handleErrors(res, 500, error.message);
  }
});
router.put("/findByIdAndUpdate/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const instance = await Test.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!instance) {
      handleErrors(res, 500, "Not found");
      return;
    }
    res.status(200).json(instance);
  } catch (error) {
    handleErrors(res, 500, error.message);
  }
});
// router get sort
router.get("/sort", async (req, res) => {
  const instance = await Test.findOne().sort();
  try {
    res.status(200).json(instance);
  } catch (error) {
    handleErrors(res, 500, error.message);
  }
});
router.use((req, res) =>
  handleErrors(res, 404, "Page Not Found generally! 🤷‍♂️")
);

module.exports = router;
