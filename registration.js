function myfunction(){
    let myAmt=0;
    let userAmt=document.querySelector('#quantity');
    myAmt=Number(userAmt.value);
    // localStorage.setItem("user_amt",myAmt);
    localStorage.setItem("balance",myAmt);
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