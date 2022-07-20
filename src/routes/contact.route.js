const express = require('express');
const validate = require('../middlewares/validate');
const {contactValidation} = require('../validations');
const {contactController} = require('../controllers');

const router = express.Router();

router.get(
  '/',
  validate(contactValidation.getContacts),
  contactController.getContacts,
);

router
  .route('/:contactId')
  .get(validate(contactValidation.getContact), contactController.getContact)
  .delete(
    validate(contactValidation.deleteContact),
    contactController.deleteContact,
  );

module.exports = router;
