// let users=[
//     {name:'user1',
//     token:'token1',
//     balance:1000
// },{
//     name:'user2',
//     token:'token1',
//     balance:2000
// }];
let transHist=JSON.parse(localStorage.getItem('obj'))||[];
let finalAmt=0;
function buy(){
    if(document.querySelector('#selectcur').value==='Ethereum (ETH)'){
        inputQuantity=document.querySelector('#quantity');
        let accAmt=Number(localStorage.getItem("balance"));
        console.log(accAmt);

        qty=Number(inputQuantity.value);
        accAmt+=qty;
        
        finalAmt=localStorage.setItem("balance",accAmt);
        
        window.location="buysuccess.html";
    
    }
    if(document.querySelector('#selectcur').value==='Bitcoin (BTC)'){
        inputQuantity=document.querySelector('#quantity');
        let accAmt=Number(localStorage.getItem("balance2"));
        console.log(accAmt);

        qty=Number(inputQuantity.value);
        accAmt+=qty;
        
        finalAmt=localStorage.setItem("balance2",accAmt);
        
        window.location="buysuccess2.html";
    }
    if(document.querySelector('#selectcur').value==='Dogecoin (DOGE)'){
        inputQuantity=document.querySelector('#quantity');
        let accAmt=Number(localStorage.getItem("balance3"));
        console.log(accAmt);

        qty=Number(inputQuantity.value);
        accAmt+=qty;
        
        finalAmt=localStorage.setItem("balance3",accAmt);
        
        window.location="buysuccess3.html";
    }
  

    // transaction history
    inputName=document.querySelector('#s-name').value;
    inputcurrency=document.querySelector('#selectcur').value
    let obj={
        uname:inputName,
        currency:inputcurrency,
        qty:qty,
        status:'Received'
    };
    transHist.push(obj);
    let jobj=JSON.stringify(transHist);
    localStorage.setItem("obj",jobj);


}