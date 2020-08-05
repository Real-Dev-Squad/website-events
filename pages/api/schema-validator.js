const Ajv = require('ajv');
const schema = require('./schema/event-schema');

const ajv = Ajv();
ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

const eventData = {
  eventId: 'testevent',
  status: 'previous12',
  title: 'Basics of react hooks',
};

const valid = ajv.validate(schema, eventData);

if (valid) {
  console.log('event data is valid');
} else {
  console.log('event data is not valid');
}
