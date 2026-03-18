let contacts = [];
let nameL = document.getElementById(`contact-name`);
let phoneL = document.getElementById(`contact-phone`);
let emailL = document.getElementById(`contact-email`)
let btnL = document.getElementsByClassName(`btn-add`);
btnL.addEventListener(`click`,function(e){
    e.preventDefault();
    addContact();
});
function addContact(){
    let id = contacts.length + 1;
    let newContact = {
        id,
        name: nameL.value,
        phone: phoneL.value,
        email: emailL,
    }
    contacts.push(newContact);
    console.log(contacts)
    localStorage.setItem(`myContact`,JSON.stringify(contacts));
}

