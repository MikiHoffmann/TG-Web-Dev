const vCard = document.getElementById('visitekaartje');
const fillCard = document.getElementById('fillCard');
const resetForm = document.getElementById('resetForm');
fillCard.addEventListener('click',fillvCard);
resetForm.addEventListener('click', clearForm);
vCardForm = document.getElementById('vCardForm');

let textInput = document.getElementsByClassName('textInput');
for(let i = 0; i < textInput.length; i++) {
    textInput[i].addEventListener('blur', () => {
        if(textInput[i].value.length < 5) {
            textInput[i].placeholder = 'please enter your ' + textInput[i].id;
            textInput[i].classList.add('emptyInput');
            textInput[i].focus();
        }
    });
}
const phoneField = document.getElementById('phone');
phoneField.addEventListener('blur',checkPhone);

const emailField = document.getElementById('email');
emailField.addEventListener('blur',checkEmail);

function checkPhone() {
    let phoneNumber = phoneField.value;
    if((phoneNumber.length < 10) || (phoneNumber.length > 10)) {
        phoneField.placeholder = 'please enter a valid number';
        phoneField.classList.add('emptyInput');
        phoneField.focus();
    }
}
function checkEmail() {
    let emailText = document.getElementById('email').value;
    console.log(emailText);
    if((emailText.includes('@techgrounds.nl') === false) || (emailText.length < 5)) {
        emailField.placeholder = 'please enter a valid email';
        emailField.classList.add('emptyInput');
        emailField.focus();
    }
}
function fillvCard(event) {
    event.preventDefault();
    let firstName = vCardForm.firstName.value;
    let lastName = vCardForm.lastName.value;
    let myName = firstName + ' ' + lastName;
    let phone = vCardForm.phone.value;
    let street = vCardForm.street.value;
    let zipCode = vCardForm.zipCode.value;
    let city = vCardForm.city.value;
    let adress = street + ', ' + zipCode + ', ' + city;
    let email = vCardForm.email.value;
    let userID = 'ID: person | ' + Math.random() * 10;
    let genders = [];
    let myGender = '';
    genders = document.getElementsByName('gender');
    for(let i =0; i < genders.length; i++) {
        if(genders[i].checked) {

            myGender = genders[i].value;
        };
    }
    console.log(myGender);
    let image = document.createElement('img');
    let vCardFields = [];
    vCardFields.push('Naam: ' + myName,'Telefoonnummer: ' + phone,'Straat: ' + adress,'E-mail: ' + email,userID)
    let fields = [];
    let field;
    let vCardField = document.createElement('div');

    for(let i = 0; i < textInput.length; i++) {
        if(textInput[i] < 5) {
        textInput[i].classList.add('emptyInput');
        textInput[i].focus();
        }
    }
    if(phone < 1) {
        checkPhone();
    }
    if(email < 1) {
        checkEmail();
    }
    else {
        image.src = myGender + '.jpg';
        vCard.appendChild(image);
        vCard.appendChild(vCardField);
        vCard.classList.add(myGender);
        vCardField.classList.add('vCardField');
        console.log(vCardFields)
        for(let i = 0; i < vCardFields.length; i++) {
            let vCardTemplate = `<span class="cardLine">${vCardFields[i]}</span>`;
            field = vCardTemplate;
            fields += field;
    
            vCardField.innerHTML = fields;
        }
        fillCard.style.display = 'none';
    }
}
function clearForm() {
    let allInput = document.getElementsByTagName('input');
    for(let i = 0; i < allInput.length; i++) {
        allInput[i].value = '';
        fillCard.style.display = 'block';
    }
}