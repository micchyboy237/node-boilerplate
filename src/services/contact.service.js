const httpStatus = require('http-status');
const {Contact, Address} = require('../models');
const ApiError = require('../errors/ApiError');

const getContacts = async () => {
  // const contacts = await Contact.paginate(filter, options);
  const contacts = await Contact.findAll({
    include: {
      model: Address,
      as: 'address',
    },
    // order: [order || ['date', 'DESC']],
    limit: 10,
  });

  return contacts;
};

const getContactById = (id) =>
  Contact.findOne({
    include: {
      model: Address,
      as: 'address',
    },
    where: {id},
  });

const getContactByEmail = (email) => Contact.findOne({email});

const createContact = (contactBody) => Contact.create(contactBody);

const updateContactById = async (contactId, updateBody) => {
  const contact = await getContactById(contactId);

  if (!contact) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Contact not found');
  }

  if (
    updateBody.email &&
    (await Contact.isEmailTaken(updateBody.email, contactId))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }

  Object.assign(contact, updateBody);

  await contact.save();

  return contact;
};

const deleteContactById = async (contactId) => {
  const contact = await getContactById(contactId);
  if (!contact) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Contact not found');
  }
  await contact.remove();
  return contact;
};

module.exports = {
  getContacts,
  getContactById,
  getContactByEmail,
  createContact,
  updateContactById,
  deleteContactById,
};
