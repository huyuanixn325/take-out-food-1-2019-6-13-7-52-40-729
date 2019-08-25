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

function getItems(countArray) {
  const dbData = loadAllItems();
  let items = [];
  for (let i = 0; i < dbData.length; i++) {
    for (let j = 0; j < countArray.length; j++)
      if (dbData[i].id == countArray[j].id) {
        items.push({
          id:dbData[i].id,
          name: dbData[i].name,
          count: countArray[j].count,
          price: dbData[i].price
        });
      }
  }
  return items;
}