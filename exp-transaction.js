// value=document.querySelector('.value');
// let obj=localStorage.getItem('obj');
// let productsHTML='';
// // value.innerHTML=
//     // localStorage.getItem('obj');
//     obj.array.forEach(element => {
//         productsHTML+=`
//         `
//     });  
// ;
document.querySelector('.back-btn').addEventListener('click', () => {
    window.location = "user.html";
});
let transHTML = '';
let obj = JSON.parse(localStorage.getItem('obj'));

obj.forEach((element) => {
    const html = `<div class="transaction">
                    <div class="d">${element.uname}</div>
                    <div class="d">${element.currency}</div>
                    <div class="d">${element.qty}</div>
                    <div class="d">${element.status}</div>
                  </div>`;
    transHTML += html;
});

document.querySelector('.value').innerHTML = transHTML;


