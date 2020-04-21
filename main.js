function updatePrice() {
    let total = document.getElementById('quantityOptions').value;
    let price = document.getElementById('unitPrice').innerHTML.substring(1);
    document.getElementsByClassName('output')[0].innerHTML = "$" + Number.parseFloat(total * price).toFixed(2);
}