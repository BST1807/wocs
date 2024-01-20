let transHist=JSON.parse(localStorage.getItem('obj'))||[];
// let finalAmt=0;
let qty;
let accAmt;
function sell(){
    if(document.querySelector('#selectcur').value==='Ethereum (ETH)'){
        let inputQuantity=document.querySelector('#quantity');
        accAmt=Number(localStorage.getItem("balance"));
        console.log(accAmt);
        qty=Number(inputQuantity.value);
        if(qty>0){
            if(accAmt>=qty){
            accAmt-=qty;
            
            localStorage.setItem("balance",accAmt);
            inputName=document.querySelector('#r-name').value;
            inputcurrency=document.querySelector('#selectcur').value
            let obj={
            uname:inputName,
            currency:inputcurrency,
            qty:qty,
            status:'Sent'
            };
            console.log('yes');
            transHist.push(obj);
            let jobj=JSON.stringify(transHist);
            localStorage.setItem("obj",jobj);
            console.log(localStorage.getItem('obj'));
            // if(qty>0 && accAmt>=qty){
            
            // }else{
            //     console.log('hist err')
            // };
            
            window.location="buysuccess.html";
            }
            else{
            alert(`Insufficient balance.Your current balance is ${accAmt}`);
            };
        }else{
            alert('Entered amount should be greater than 0')
        };
      
    };
    if(document.querySelector('#selectcur').value==='Bitcoin (BTC)'){
        let inputQuantity=document.querySelector('#quantity');
        accAmt=Number(localStorage.getItem("balance2"));
        console.log(accAmt);
        qty=Number(inputQuantity.value);
        if(qty>0){
            if(accAmt>=qty){
            accAmt-=qty;
            
            localStorage.setItem("balance2",accAmt);
            inputName=document.querySelector('#r-name').value;
            inputcurrency=document.querySelector('#selectcur').value
            let obj={
            uname:inputName,
            currency:inputcurrency,
            qty:qty,
            status:'Sent'
            };
            console.log('yes');
            transHist.push(obj);
            let jobj=JSON.stringify(transHist);
            localStorage.setItem("obj",jobj);
            console.log(localStorage.getItem('obj'));
            window.location="buysuccess2.html";
            }
            else{
            alert(`Insufficient balance.Your current balance is ${accAmt}`);
            };
        }else{
            alert('Entered amount should be greater than 0')
        };
    };
    if(document.querySelector('#selectcur').value==='Dogecoin (DOGE)'){
        let inputQuantity=document.querySelector('#quantity');
        accAmt=Number(localStorage.getItem("balance3"));
        console.log(accAmt);
        qty=Number(inputQuantity.value);
        if(qty>0){
            if(accAmt>=qty){
            accAmt-=qty;
            
            localStorage.setItem("balance3",accAmt);
            inputName=document.querySelector('#r-name').value;
            inputcurrency=document.querySelector('#selectcur').value
            let obj={
            uname:inputName,
            currency:inputcurrency,
            qty:qty,
            status:'Sent'
            };
            console.log('yes');
            transHist.push(obj);
            let jobj=JSON.stringify(transHist);
            localStorage.setItem("obj",jobj);
            console.log(localStorage.getItem('obj'));
            window.location="buysuccess3.html";
            }
            else{
            alert(`Insufficient balance.Your current balance is ${accAmt}`);
            };
        }else{
            alert('Entered amount should be greater than 0')
        };
    };


  



}