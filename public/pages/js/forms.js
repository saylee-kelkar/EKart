
const submitBtn = document.querySelector(".submit-btn");
const name = document.querySelector("#name") || null;
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const tac = document.querySelector("#terms-and-condition") || null;
const notification  = document.querySelector("#notification") || null;

submitBtn.addEventListener('click', () => {
   if(name != null){
    if(name.value.length < 3){
        showAlert('name must be bigger than 3 letters');
    } 
    else if(!email.value.length){
        showAlert('please enter Email');

    }
    else if(password.value.length  < 8){
        showAlert('password should be 8 letters long!!');

    }
else{
        loader.style.display = 'block';
        sendData('../signup/signup.html',{
            name: name.value,
            email: email.value,
            password: password.value,
            number: number.value,
            tac: tac.checked,
            notification: notification.checked,
            seller: false
        })
    }


   }else{
       if(!email.value.length || !password.value.length){
           showAlert('fill the input');
       }else{
        sendData('../logins/login.html',{
            email: email.value,
            password: password.value,
           
        })
       }
   }
})