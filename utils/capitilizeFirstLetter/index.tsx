export const capitalizeFirstLetter = (text: any) => {
  const result = text.charAt(0).toUpperCase() + text.slice(1);
  return result;
};
