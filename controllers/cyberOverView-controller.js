const CyberOverview = require("../models/cyberOverview-model");

// *-------------------
// CyberOverview section Logic
// *-------------------

const getCyberOverview = async (req, res) => {
  try {
    const skill = await CyberOverview.find();
    res.status(200).json(skill);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addCyberOverview = async (req, res) => {
  try {
    const { customerName } = req.body;
    const customerExist = await CyberOverview.findOne({ customerName }); // Use await for cleaner async/await syntax

    if (customerExist) {
      return res
        .status(400)
        .json({ message: "this customer is already exists" });
    } else {
      await CyberOverview.create(req.body);
      res
        .status(200)
        .json({ message: "CyberOverview Added successfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" }); // Provide a more generic error message for security reasons
  }
};

module.exports = { getCyberOverview, addCyberOverview };