function bestCharge(selectedItems) {
  return /*TODO*/;
}
function countItems(selectedItems) {
  let result = [];
  for (let i = 0; i < selectedItems.length; i++) {
    result.push({
      id: selectedItems[i].substr(0, 8),
      count: selectedItems[i].charAt(selectedItems[i].length - 1)
    });
  }
  return result;
}