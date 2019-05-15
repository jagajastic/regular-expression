// helper function
function isUpperCase(char) {
  if (!/[A-Z]/g.test(char)) { return false;};
  return true;
}
module.exports = isUpperCase;
