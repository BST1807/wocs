
let add3=document.getElementById('add3').addEventListener('click',()=>{
    let amtt3=document.querySelector('#amtt3').value;
    localStorage.setItem('balance3',amtt3);
    if(Number(amtt3)>0){
        document.querySelector('.conclude').innerHTML=`<div style="color:#4CAF50;">Dogecoin (DOGE) successfully added</div><div><button id='ok'>ok</button>`
        let amtt3=document.querySelector('#amtt3').value;
        localStorage.setItem('balance3',amtt3);
        document.getElementById('ok').addEventListener('click',()=>{
            window.location='user.html';
        })
    }
    else{
        console.log('invalid input');
        document.querySelector('.conclude').innerHTML=`<div style="color: red;">Entered amount should be more than or equal to 1</div><div>`
    };
   
});
localStorage.setItem('token3','Dogecoin (DOGE)');