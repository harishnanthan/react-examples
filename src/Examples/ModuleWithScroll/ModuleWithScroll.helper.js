export const getModuleWithScrollWidth = (widthArr) => widthArr[0] + widthArr[1];
export const getModuleWithScrollHeight = (heightArr) => heightArr[0] + heightArr[1];

// function takes an input as position of the module with scroller component
// returns full width and full height of the components 
export const getAlignment = (position, weight, height) => {
  if (position === 'left' || 'right') return [getModuleWithScrollWidth(weight), height].flat();
  if (position === 'top' || 'bottom') return [weight, getModuleWithScrollHeight(height)].flat();
}

// function take array of objects
// returns only labels of the array
export const getLabels = (modulesArray) => {
  const labelsArray = [];
  for (let i = 0; i < modulesArray.length; i++) {
    labelsArray[i] = modulesArray[i]["label"];
  }
  return labelsArray;
}