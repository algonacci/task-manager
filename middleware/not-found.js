const notFound = (req, res) => {
  res.status(404).json({ message: "URL not found" });
};

module.exports = notFound;
