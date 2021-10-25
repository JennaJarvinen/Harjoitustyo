
var areaSelectionDropDownBtn = document.querySelector('#area-selection');
var typeSelectionDropDownBtn = document.querySelector('#customer-type-selection');

var discount = 0;
var selectedAreaValue = '';
var tulosLabel = document.getElementById('tulos');

document.body.addEventListener('click', function (event) {
    if (areaSelectionDropDownBtn.contains(event.target)) {
        tulosLabel.innerHTML = '';
        
        console.log(event.target.text);
        selectedAreaValue = event.target.text;

        var selectedAreaLabel = document.getElementById('selectedAreaLabel');
        selectedAreaLabel.innerHTML = selectedAreaValue;

        hideLabelIfEmpty(selectedAreaLabel, selectedAreaValue);  
    }

    else if (typeSelectionDropDownBtn.contains(event.target)) {
        tulosLabel.innerHTML = '';
        
        console.log(event.target.text);
        var selectedValue = event.target.text;

        discount = getDiscountPercentageByType(selectedValue);
        var selectedTypeLabel = document.getElementById('discountPercentageLabel');
        selectedTypeLabel.innerHTML = discount + ' %';

        hideLabelIfEmpty(selectedTypeLabel, selectedValue);
    }

    if (selectedAreaValue != '' && discount != 0) {
        document.getElementById('määrä-button').disabled = false;
    }
});

document.getElementById('määrä-button').onclick = function () {
    var tulosValue = getPriceByArea(selectedAreaValue);
    var discountInEuros = tulosValue * discount / 100;

    var priceAfterDiscount = tulosValue * discountInEuros;
   
    tulosLabel.innerHTML = priceAfterDiscount;

    hideLabelIfEmpty(tulosLabel, priceAfterDiscount);
};



function getPriceByArea(area) {

    switch (area) {
        case 'Seittu':
            return 1890;
        case 'Ujaistenkylä':
            return 2050;
        case 'Asema':
            return 1600;
        case 'Keskusta':
            return 1550;
        default:
    }
}


function getDiscountPercentageByType(type) {

    switch (type) {
        case 'Asuinkiinteistö':
            return 60;
        case 'Vapaa-ajan kiinteistö':
            return 5;
        case 'Maatalous':
            return 20;
        case 'Yritys':
            return 30;
        default:
    }
}
function hideLabelIfEmpty(label, val) {

    if (val != "")
        label.style.visibility = "visible";
    else
        label.style.visibility = "hidden";
}

