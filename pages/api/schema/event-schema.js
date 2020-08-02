module.exports = {
  title: 'Event',
  description: 'Real dev squad events',
  type: 'object',
  properties: {
    eventId: {
      type: 'string',
      description: 'Unique event ID (auto generated)',
    },
    status: {
      enum: ['previous', 'upcoming'],
      description: 'event status',
    },
    title: {
      type: 'string',
      description: 'event title',
    },
    startTime: {
      type: 'string',
      format: 'date',
      description: 'event start time',
    },
    duration: {
      type: 'number',
      description: 'event duration in seconds',
    },
    description: {
      type: 'string',
      description: 'event description',
    },
    joiningUrl: {
      type: 'string',
      description: 'link to attend event',
    },
  },
};
