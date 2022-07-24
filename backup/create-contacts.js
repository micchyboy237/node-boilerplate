const {Contact, Address} = require('../src/models');
const logger = require('../src/config/logger');

async function createContacts() {
  const AddressAssoc = Contact.belongsTo(Address, {
    as: 'addressObj',
    foreignKey: 'addressId',
  });

  logger.info('START CREATE CONTACT...');
  const contact = await Contact.create(
    {
      firstName: 'Mick',
      lastName: 'Broadstone',
      email: 'mick.broadstone@gmail.com',
      phone: '07715101234',
      addressObj: {
        type: 'home',
        line1: '100 Main St.',
        city: 'Austin',
        state: 'TX',
        zip: '78704',
      },
    },
    {
      include: [AddressAssoc],
    },
  );
  logger.info(`CREATED CONTACT (${contact.id})...`);

  // logger.info('START CREATE ADDRESS...');
  // const address = await Address.create({
  //   type: 'home',
  //   line1: '100 Main St.',
  //   city: 'Austin',
  //   state: 'TX',
  //   zip: '78704',
  // });
  // logger.info(`CREATED ADDRESS (${address.id})...`);
}

createContacts();
