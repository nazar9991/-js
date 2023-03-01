//A function to add an item to the shopping list 
function addItem(itemName, itemPrice, itemID) {
    let shoppingList = [];
    let item = {
        itemName: itemName,
        itemPrice: itemPrice,
        itemID: itemID
    };
    
    shoppingList.push(item);
    return shoppingList;
};

//A function to get an item from the shopping list by its unique identifier 
function getItem(itemID) {
    let shoppingList = [];
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].itemID === itemID) {
            return shoppingList[i];
        }
    }
    return null;
};

//A function to delete an item from the shopping list by its unique identifier
function deleteItem(itemID) {
    let shoppingList = [];
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].itemID === itemID) {
            shoppingList.splice(i, 1);
            break;
        }
    }
    return shoppingList;
};

//A function to update an item from the shopping list by its unique identifier
function updateItem(itemName, itemPrice, itemID) {
    let shoppingList = [];
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].itemID === itemID) {
            shoppingList[i] = {
                itemName: itemName,
                itemPrice: itemPrice,
                itemID: itemID
            };
            break;
        }
    }
    return shoppingList;
};

//A function to save the shopping list to a .csv file 
function saveListToCSV(shoppingList) {
    let csvString = '';
    for (let i = 0; i < shoppingList.length; i++) {
        csvString += `${shoppingList[i].itemName},${shoppingList[i].itemPrice},${shoppingList[i].itemID}\n`;
    }
    fs.writeFile('shoppingList.csv', csvString, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}