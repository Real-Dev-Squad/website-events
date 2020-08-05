module.exports = {
  title: 'Event',
  description: 'Real dev squad events',
  type: 'object',
  properties: {
    id: {
      type: 'string',
      description: 'Unique event ID (auto generated)',
    },
    title: {
      type: 'string',
      description: 'event title',
    },
    subTitle: {
      type: 'string',
      description: 'event subtitle',
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
    mastheadUrl: {
      type: 'string',
      description: 'Masthead image url',
    },
    tags: {
      type: 'array',
      items: {
        type: 'string',
        description: 'tag name',
      },
    },
  },
};
