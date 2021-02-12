const transformPosition = (x, y) => {
  const posX = 'abcdefgh'[x];
  const posY = 8 - y;
  return `${posX}${posY}`;
};
export default transformPosition;
