const anagram = (str1, str2) => formatStr(str1) === formatStr(str2);

// Helper function
const formatStr = (str) =>
  str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

export default anagram;
