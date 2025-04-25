function checkhere(){
    alert('hello')
}
function submitform(){
    let value=true;
    let nameInput=document.formName.nameName.value;
    let numberInput=document.formName.numberName.value;
    let mailInput=document.formName.mailName.value;
    let genderInput=document.formName.Gender.value;
    let ageInput=document.formName.ageName.value;
    alert("gender :" +genderInput)
    alert("mail :"+mailInput)
    alert("name :" +nameInput)
    alert("phone Number :" +numberInput)
    alert("Age :"+ageInput)
    return value;

}