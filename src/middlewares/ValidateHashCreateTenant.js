const crypto = require("crypto");
function ValidateHashCreateTenant(req, res, next) {
  const { clientAnswer, hash } = req.body;
  console.log("has en middleware: ", hash);
  const paymentHash = process.env.PAYMENT_HASH_TEST;
  let response = {};
  try {
    const answerJson = JSON.stringify(clientAnswer);
    const computeHash = crypto
      .createHmac("sha256", paymentHash)
      .update(answerJson)
      .digest("hex");
    if (hash == computeHash) {
      next();
    } else {
      return res.status(401).json({
        message: "Invalid hash",
      });
    }
  } catch (error) {
    response.Status = false;
    console.error("Error validating payload", error);
    return res.status(500).json(response); // Handle any errors and return 500
  }
}
module.exports = ValidateHashCreateTenant;
