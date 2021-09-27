export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const getRandomIconsArray = (arr, num) => {
  const arrIcons = [];
  for (let i = 0; i < num ** 2 / 2; i++) {
    let index = getRandomInt(arr.length);
    if (i) {
      while (arrIcons.includes(index)) {
        index = getRandomInt(arr.length);
      }
      arrIcons.push(index);
      continue;
    }
    arrIcons.push(index);
  }
  return arrIcons;
};

export const getArrayRandom = (arr, squareInt) => {
  const arrIconsToCell = [];
  const arrCopy = arr.slice(),
    arrCopy2 = arr.slice();

  for (let i = 0; i < squareInt ** 2; i++) {
    if (i % 2) {
      const index = getRandomInt(arrCopy.length);
      arrIconsToCell.push(arrCopy[index]);
      arrCopy.splice(index, 1);
      continue;
    }
    const index = getRandomInt(arrCopy2.length);
    arrIconsToCell.push(arrCopy2[index]);
    arrCopy2.splice(index, 1);
  }
  return arrIconsToCell;
};
