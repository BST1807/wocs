// console.log(document.getElementById("acurrency").value);
fetchData();
document.querySelector('.amount1').innerHTML=`${localStorage.getItem('balance')}`;

let message=document.querySelector('#welcomeMessage');
message.innerHTML=`Hello, ${localStorage.getItem("user_name")}`;
let lo=document.querySelector('.logout');
lo.addEventListener('click',()=>{
    localStorage.clear();
})

if(localStorage.getItem('token2')){
    document.querySelector('#c2').innerHTML=`${(localStorage.getItem('token2'))}`;
};
if(localStorage.getItem('balance2')){
    document.querySelector('.amount2').innerHTML=`${(localStorage.getItem('balance2'))}`;
};
if(localStorage.getItem('token3')){
    document.querySelector('#c3').innerHTML=`${(localStorage.getItem('token3'))}`;
};
if(localStorage.getItem('balance3')){
    document.querySelector('.amount3').innerHTML=`${(localStorage.getItem('balance3'))}`;
};
function redirectToPage(){
    
    if(document.getElementById('c2').innerHTML==='<!-- token2 -->'){
        var selectedCurrency = document.getElementById("acurrency").value;
        if (selectedCurrency === "token2") {
            window.location = "addt2.html";
        }else{
            alert('You have already added this currency')
        }
    }
    else if(document.getElementById('c3').innerHTML==='<!-- token3 -->'){
        var selectedCurrency = document.getElementById("acurrency").value;
        if (selectedCurrency === "token3") {
            window.location = "addt3.html";
        }else{
            alert('You have already added this currency')
        }
    };
}
let balancet1;
let balancet2;
let balancet3;
let ethToUsdRate;
let btcToUsdRate;
let dogeToUsdRate;

async function fetchData() {
    const apiKey = 'CG-6YX5m7XLSPjniJPahChpqbw7';
    const ethApiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';
    const btcApiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
    const dogeApiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd';
    
    const ethResponse = await fetch(ethApiUrl);
    const ethData = await ethResponse.json();
    const ethToUsdRate = ethData.ethereum.usd;

    const btcResponse = await fetch(btcApiUrl);
    const btcData = await btcResponse.json();
    const btcToUsdRate = btcData.bitcoin.usd;
    
    const dogeResponse = await fetch(dogeApiUrl);
    const dogeData = await dogeResponse.json();
    const dogeToUsdRate = dogeData.dogecoin.usd;
    balancet1=((Number(localStorage.getItem('balance')))*Number(ethToUsdRate)).toFixed(2);
    balancet2=((Number(localStorage.getItem('balance2')))*Number(btcToUsdRate)).toFixed(2);
    balancet3=((Number(localStorage.getItem('balance3')))*Number(dogeToUsdRate)).toFixed(2);
    totBal=(Number(balancet1)+Number(balancet2)+Number(balancet3)).toFixed(2);
    document.querySelector('.label2').innerText=`Dear user your total balance is: $${totBal}`;
    document.querySelector('.entAmt1').innerHTML=`$${balancet1}`;
    if(localStorage.getItem('balance2')){
        document.querySelector('.entAmt2').innerHTML=`$${balancet2}`;
    }
    if(localStorage.getItem('balance3')){
        document.querySelector('.entAmt3').innerHTML=`$${balancet3}`;

    }
    
}

console.log(balancet1);
document.querySelector('#gcer').addEventListener('click',()=>{
    window.location='exchangerate.html';
});