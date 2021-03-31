function validateForm(){
    var x=document.forms["myForm"]["fname", "lname", "stradd", "city", "state", "zipcode", "phnum", "eml"].value;
    if (x===""){
        alert("All fields must be filled out");
    }
}