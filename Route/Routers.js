
const expensesData = require("../Module/transactions");

const userExpData = async (req, res) => {
  const { userId } = req.body;
  const data = await expensesData.find({ userId });
  res.status(200).send(data);
};





module.exports = (userExpData)