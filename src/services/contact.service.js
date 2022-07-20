const httpStatus = require('http-status');
const {Contact} = require('../models');
const ApiError = require('../errors/ApiError');

const queryContacts = async (filter, options) => {
  const contacts = await Contact.paginate(filter, options);
  return contacts;
};

const getContactById = async (id) => Contact.findById(id);

const getContactByEmail = async (email) => Contact.findOne({email});

const deleteContactById = async (contactId) => {
  const contact = await getContactById(contactId);
  if (!contact) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Contact not found');
  }
  await contact.remove();
  return contact;
};

module.exports = {
  queryContacts,
  getContactById,
  getContactByEmail,
  deleteContactById,
};
