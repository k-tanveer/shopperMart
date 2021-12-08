export const truncateText = str => {
  return str.length > 15 ? str.substring(0, 17) + '...' : str;
};
