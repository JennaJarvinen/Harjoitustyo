
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


    }
    else if (typeSelectionDropDownBtn.contains(event.target)) {
        tulosLabel.innerHTML = '';
        
        console.log(event.target.text);
        var selectedValue = event.target.text;

        discount = getDiscountPercentageByType(selectedValue);
        var selectedTypeLabel = document.getElementById('discountPercentageLabel');
        selectedTypeLabel.innerHTML = discount + ' %';
    }

    if (selectedAreaValue != '' && discount != 0) {
        document.getElementById('määrä-button').disabled = false
    }
});

document.getElementById('määrä-button').onclick = function () {
    var tulosValue = getPriceByArea(selectedAreaValue);

    var priceAfterDiscount = tulosValue * discount / 100; 
   
    tulosLabel.innerHTML = priceAfterDiscount;
};



function getPriceByArea(area) {

    switch (area) {
        case 'Seittu':
            return 1890;
            break;
        case 'Ujaistenkylä':
            return 2050;
            break;
        case 'Asema':
            return 1600;
            break;
        case 'Keskusta':
            return 1550;
            break;
        default:
    }
}


function getDiscountPercentageByType(type) {

    switch (type) {
        case 'Asuinkiinteistö':
            return 60;
            break;
        case 'Vapaa-ajan kiinteistö':
            return 5;
            break;
        case 'Maatalous':
            return 20;
            break;
        case 'Yritys':
            return 30;
            break;
        default:
    }

}

