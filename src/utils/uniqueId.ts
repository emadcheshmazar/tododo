// utils/generateUniqueId.ts

const generateUniqueId = (): string => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000);
  return `${timestamp}-${random}`;
};

export default generateUniqueId;
