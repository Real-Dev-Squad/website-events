const illustrations = [
  'code_inspection',
  'code_thinking',
  'community',
  'conference',
  'dev_focus',
  'dev_productivity',
  'feedback',
  'group_hangout',
  'ideas',
  'learning',
  'online_learning',
  'online_test',
  'open_source',
  'programming',
  'teaching',
  'web_developer',
  'web_development',
];
const months = [
  'January',
  'Feberuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getRandomIllustrationUrl = (tagName) => {
  if (illustrations.includes(tagName)) {
    return `/img/${tagName}.svg`;
  }
  const total = illustrations.length;
  const randNum = Math.floor(Math.random() * total);
  console.log(randNum);
  return `/img/${illustrations[randNum]}.svg`;
};

const getFormattedDateTime = (d) => {
  const date = new Date(d);
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  const formattedDateTime = `${months[month]} ${day}, ${hour % 12}:${minutes} ${
    hour > 12 ? 'PM' : 'AM'
  }`;
  return formattedDateTime;
};

module.exports = {
  getRandomIllustrationUrl,
  getFormattedDateTime,
};
