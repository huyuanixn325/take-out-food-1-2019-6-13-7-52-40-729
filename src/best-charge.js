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

function calculate(items) {
  let totalPrice=0;
  for (let i = 0; i < items.length; i++) {
    totalPrice+= items[i].count * items[i].price;
  }
  return totalPrice;
}

function firstCaculate(items) {
  const types = loadPromotions();
  let totalPrice=0;
  for (let i = 0; i < items.length; i++) {
    totalPrice+= items[i].count * items[i].price;
  }
  if (totalPrice>=30){
    totalPrice=totalPrice-6;
  }
  return totalPrice;
}

function secondCaculate(items) {
  let totalPrice=0;
  for (let i = 0; i < items.length; i++) {
    if((items[i].id=='ITEM0001'&&items[i].count>0)||(items[i].id=='ITEM0022'&&items[i].count>0)){
      totalPrice+=items[i].price/2*items[i].count;
    }else{
      totalPrice+=items[i].price*items[i].count;
    }
  }
   
  return totalPrice;
}