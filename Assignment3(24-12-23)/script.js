var nameLabel = document.createElement("label");
nameLabel.innerText = "Name: ";

var br1 = document.createElement("br");

var nameInput = document.createElement("input");
nameInput.type = "text";
nameInput.id = "name";

var cityLabel = document.createElement("label");
cityLabel.innerText = "City: ";
var cityInput = document.createElement("input");
cityInput.type = "text";
cityInput.id = "city";

var br2 = document.createElement("br");

var divRef2 = document.createElement("div");
divRef2.className = "radioBtn";

var radBtn1 = document.createElement("input");
radBtn1.type = "radio";
radBtn1.name = "gender";
radBtn1.id = "male";
radBtn1.value="Male";

var radLabel1 = document.createElement("label");
radLabel1.innerText = "Male";


var radBtn2 = document.createElement("input");
radBtn2.type = "radio";
radBtn2.name = "gender";
radBtn2.id = "female";
radBtn2.value="Female";

var radLabel2 = document.createElement("label");
radLabel2.innerText = "Female";


var radBtn3 = document.createElement("input");
radBtn3.type = "radio";
radBtn3.name = "gender";
radBtn3.id = "other";
radBtn3.value="Other";

var radLabel3 = document.createElement("label");
radLabel3.innerText = "Other";


var submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.innerText = "Submit";
submitButton.className = "submitBtn";
submitButton.onclick = function () {
    var nameValue = nameInput.value;
    var cityValue = cityInput.value;

    var genderValue;

    var radBtns = document.getElementsByName("gender");

    for (var i = 0; i < radBtns.length; i++) {
        if (radBtns[i].checked) {
            genderValue = radBtns[i].value;
            break;
        }
    }


//Table Creation

    if (cityValue && nameValue && genderValue) {

        // function createTable(){}
        
        var table = document.createElement("table");

        // create thead and rows for the fields 
        var thead = table.createTHead();
        var headerRow = thead.insertRow();
        var nameHeader = document.createElement("th");
        var cityHeader = document.createElement("th");
        var genderHeader = document.createElement("th");

        nameHeader.innerText = "Name";
        cityHeader.innerText = "City";
        genderHeader.innerText = "Gender";

        headerRow.appendChild(nameHeader);
        headerRow.appendChild(cityHeader);
        headerRow.appendChild(genderHeader);

        var tbody = table.createTBody();
        var dataRow = tbody.insertRow();
        var nameCell = dataRow.insertCell(0);
        var cityCell = dataRow.insertCell(1);
        var genderCell = dataRow.insertCell(2);

        // setting data
        nameCell.innerText = nameValue;
        cityCell.innerText = cityValue;
        genderCell.innerText = genderValue;

        table.appendChild(tbody);

        document.body.appendChild(table);
    }
};

var divRef1 = document.createElement("div");
divRef1.className = "container";

divRef1.appendChild(nameLabel);
divRef1.appendChild(nameInput);

divRef1.appendChild(br1);

divRef1.appendChild(cityLabel);
divRef1.appendChild(cityInput);
divRef1.appendChild(br2);

divRef1.appendChild(divRef2);

divRef2.appendChild(radBtn1);
divRef2.appendChild(radLabel1);
divRef2.appendChild(radBtn2);
divRef2.appendChild(radLabel2);
divRef2.appendChild(radBtn3);
divRef2.appendChild(radLabel3);

divRef1.appendChild(submitButton);

document.body.appendChild(divRef1);


