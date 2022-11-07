function getBrandList() {
    const brands = inventory.map(tv => {
        return tv.brand;
    });
    return brands;
}

document.getElementById("brand-list").innerText = getBrandList().toString();