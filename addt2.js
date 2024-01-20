
let add2=document.getElementById('add2').addEventListener('click',()=>{
    let amtt2=document.querySelector('#amtt2').value;
    localStorage.setItem('balance2',amtt2);
    if(Number(amtt2)>0){
        document.querySelector('.conclude').innerHTML=`<div style="color:#4CAF50;">Bitcoin (BTC) successfully added</div><div><button id='ok'>ok</button>`
        let amtt2=document.querySelector('#amtt2').value;
        localStorage.setItem('balance2',amtt2);
        document.getElementById('ok').addEventListener('click',()=>{
            window.location='user.html';}
        )}
    else{
        console.log('invalid input');
        document.querySelector('.conclude').innerHTML=`<div style="color: red;">Entered amount should be more than or equal to 1</div><div>`
    };
    });
localStorage.setItem('token2','Bitcoin (BTC)');