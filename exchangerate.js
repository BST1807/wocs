// fetchData();
// let balancet1;
// let balancet2;
// let balancet3;
// let ethToUsdRate;
// let btcToUsdRate;
// let dogeToUsdRate;
// async function fetchData() {
//     const apiKey = 'CG-6YX5m7XLSPjniJPahChpqbw7';
//     let ethApiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd';
//     const btcApiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
//     const dogeApiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd';
    
//     let ethResponse = await fetch(ethApiUrl);
//     let ethData = await ethResponse.json();
//     let ethToUsdRate = ethData.ethereum.usd;

//     let btcResponse = await fetch(btcApiUrl);
//     const btcData = await btcResponse.json();
//     const btcToUsdRate = btcData.bitcoinlet
    
//     let dogeResponse = await fetch(dogeApiUrl);
//     const dogeData = await dogeResponse.json();
//     const dogeToUsdRate = dogeData.dogecoin.usd;
    // balancet1=((Number(localStorage.getItem('balance')))*Number(ethToUsdRate)).toFixed(2);
    // balancet2=((Number(localStorage.getItem('balance2')))*Number(btcToUsdRate)).toFixed(2);
    // balancet3=((Number(localStorage.getItem('balance3')))*Number(dogeToUsdRate)).toFixed(2);
    // totBal=(Number(balancet1)+Number(balancet2)+Number(balancet3)).toFixed(2);
    // document.querySelector('.label2').innerText=`Dear user your total balance is: $${totBal}`;
    // document.querySelector('.entAmt1').innerHTML=`$${balancet1}`;
    // if(localStorage.getItem('balance2')){
    //     document.querySelector('.entAmt2').innerHTML=`$${balancet2}`;
    // }
    // if(localStorage.getItem('balance3')){
    //     document.querySelector('.entAmt3').innerHTML=`$${balancet3}`;

    // }
//     let e=document.querySelector('.ether');
//     e.innerHTML=`1 Ether= $${ethToUsdRate}`
// };


