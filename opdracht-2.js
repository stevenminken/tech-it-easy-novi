function getSoldItems() {
    let soldItems = 0;
    inventory.forEach(item => {
        soldItems += item.sold;
    });
    console.log("Verkocht: " + soldItems);
    document.getElementById("sold_tv").innerHTML = "Verkochte items:  <b style=\"color:green;\">" + soldItems + "</b>";
}

getSoldItems();

function getBoughtItems() {
    let boughtItems = 0;
    inventory.forEach(item => {
        boughtItems += item.originalStock;
    });
    console.log("Ingekocht: " + boughtItems);
    document.getElementById("bought-tv").innerHTML = "Ingekochte items:  <b style=\"color:blue;\">" + boughtItems + "</b>";
}

getBoughtItems();

function getAvailableItems() {
    let availableItems = 0;
    inventory.forEach(item => {
        availableItems += (item.originalStock - item.sold);
    });
    console.log("Nog te verkopen: " + availableItems);
    document.getElementById("available-to-sell").innerHTML = "Nog te verkopen items:  <b style=\"color:red;\">" + availableItems + "</b>";
}

getAvailableItems();

