// function saveName() {
//     var name = document.getElementById("name").value;
//     localStorage.setItem("user_name", name);
//     window.location.href = "user.html";
// }

function saveName(){
   let myName='';
   let userName=document.getElementById('name');
   myName=userName.value;
   localStorage.setItem("user_name", myName);
}
let eyeicon=document.getElementById('eyeicon');
let password=document.querySelector('#password')
eyeicon.onclick=function(){
    if(password.type=='password'){
        password.type='text';
        eyeicon.src='images/eye-open.png';
    }else{
        password.type='password';
        eyeicon.src='images/eye-close.png';
    };

};