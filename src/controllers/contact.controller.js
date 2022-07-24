const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../errors/ApiError');
const catchAsync = require('../utils/catchAsync');
const {contactService} = require('../services');

const getContacts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);

  const result = await contactService.getContacts(filter, options);

  res.send(result);
});

const getContact = catchAsync(async (req, res) => {
  const contact = await contactService.getContactById(req.params.contactId);

  if (!contact) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Contact not found');
  }

  res.send(contact);
});

const createContact = catchAsync(async (req, res) => {
  const contact = await contactService.createContact(req.body);

  res.status(httpStatus.CREATED).send(contact);
});

const updateContact = catchAsync(async (req, res) => {
  const contact = await contactService.updateContactById(
    req.params.contactId,
    req.body,
  );

  res.send(contact);
});

const deleteContact = catchAsync(async (req, res) => {
  await contactService.deleteContactById(req.params.contactId);

  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
