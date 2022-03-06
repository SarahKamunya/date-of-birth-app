const btn = document.getElementById("submitButton")
btn.addEventListener("click" , (e) =>{
    e.preventDefault()

    let myDOB = document.getElementById("date").value;
    let  myGender = document.getElementById("gender-id").value;
    let message =document.getElementById("message")
    //let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let maleName =["Kwasi","Kwadwo","Kwaku","Yaw","Kofi","Kwame"];
    let femaleName =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    let myDateBirth = new Date(myDOB);
    let weekDays =myDateBirth.getDay();


    //let date = myDateBirth.split('/');

    //myDateBirth.toLocaleDateString('en-US', {weekDays
    //:'long',}),


    
if (myGender ==1) {

  message.innerHTML = `Your Akan Name is ${maleName[weekDays]}`;


} 

else if (myGender ==2) {

    message.innerHTML = `Your Akan Name is ${femaleName[weekDays]}`;
  

}


})

