const objectId = (value, helpers) => {
  if (!value.match(/^[0-9a-fA-F]$/)) {
    return helpers.message('"{{#label}}" must be a valid id');
  }
  return value;
};

module.exports = {
  objectId,
};
