const notFoundMiddleware = (req, res) => {
  res.status(404).send("Route doesnot exist");
};
export default notFoundMiddleware;
