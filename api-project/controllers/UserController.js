const createUser = (req, res) => {
  console.log(req.body);
  res.send({ message: "Data Received Successfully" });
};

module.exports = {
  createUser,
};
