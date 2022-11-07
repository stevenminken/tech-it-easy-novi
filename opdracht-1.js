const nameArray = inventory.map((tv) => {
    return tv.name;
});

console.log(nameArray);

function getSoldOutList() {
    const soldOutTvList = inventory.filter((tv) => {
        return tv.originalStock - tv.sold === 0;
    });
    console.log(soldOutTvList);
    return soldOutTvList;
}

function getAmbilightList() {
    const ambiLightList = inventory.filter((tv) => {
        return tv.options.ambiLight;
    });
    return ambiLightList;
    console.log(ambiLightList);
}


function getPriceSortedList() {
    const priceSortedList = inventory.sort((a, b) => {
        return a.price - b.price;
    });
    console.log(priceSortedList)
    return priceSortedList;
}

function empty(element) {
    while (element.firstElementChild) {
        element.firstElementChild.remove();
    }
}

function showItems(list) {
    const listView = document.querySelector('#buttonFunctions');
    empty(listView);
    list.forEach(x => {
        listView.appendChild(createTvItem(x));
    });
}

document.getElementById("sortPrice").addEventListener('click', () => showItems(getPriceSortedList()));
document.getElementById("sortFunction").addEventListener('click', () => showItems(getAmbilightList()));
document.getElementById("soldOut").addEventListener('click', () => showItems(getSoldOutList()));


//
//Kopie opdracht-4.js duplicaat code, export werkt niet
//

function getTvInfo(tv) {
    return tv.brand + " " + tv.type + " - " + tv.name;
}

function getPrice(tv) {
    return new Intl.NumberFormat('nl-NL', {style: 'currency', currency: 'EUR'}).format(tv.price);
}

function getSizesString(tv) {
    let sizes = "";
    let counter = 0;
    tv.availableSizes.forEach(x => {
        if (counter > 0) {
            sizes = sizes + " | " + x + " inch  " + "(" + `${x * 2.54}` + " cm) ";
        } else {
            sizes = sizes + x + " inch  " + "(" + `${x * 2.54}` + " cm) ";
        }
        counter = 1;
    })
    return sizes;
}

function createTvItem(name) {
    let li = document.createElement('li');
    li.innerHTML = getTvInfo(name) + "<br/>" + getPrice(name) + "<br/>" + getSizesString(name) + "<br/><br/>";
    return li;
}



