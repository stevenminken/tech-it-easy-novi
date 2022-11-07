function getTv() {
    const tv = inventory.find((x) => {
        return x;
    });
    return tv;
}

function getTvInfo(tv) {
    return tv.brand + " " + tv.type + " - " + tv.name;
}

console.log(getTvInfo(getTvInfo(getTv())));

function getPrice(tv) {
    return new Intl.NumberFormat('nl-NL', {style: 'currency', currency: 'EUR'}).format(tv.price);
}

console.log(getPrice(getTv()));

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

//
// document.getElementById("tv-info").innerHTML = getTvInfo(getTv()) + "<br/>" + getPrice(getTv()) + "<br/>" + getSizesString(getTv());

function createTvItem(name) {
    let li = document.createElement('li');
    li.innerHTML = getTvInfo(name) + "<br/>" + getPrice(name) + "<br/>" + getSizesString(name) + "<br/><br/>";
    return li;
}

const listItems = document.querySelector('#tv-info');
inventory.forEach((a) => {
    listItems.appendChild(createTvItem(a));
});


