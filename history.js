// time added part //
function timeDate(){
    const date = new Date();
    const time = date.toLocaleString();
    return time ;
}

//  // // history for card 1
document.getElementById('btnCard').addEventListener('click', function(event){
    event.preventDefault();
    const title = document.getElementById('title1');
    title.classList.remove('hidden')
    let donatedTaka = document.getElementById('dBalance').value;
    const historyCard = document.createElement('span');
    let time = timeDate();
    historyCard.innerHTML =`
    <div class="p-8 shadow-sm rounded-xl border space-y-3" >
           <p class="font-bold text-xl">${donatedTaka} Taka is Donated for famine-2024 at Noakhali, Bangladesh</p>
            <p class="font-light">Date : <span > ${time} </span> GMT +0600 (Bangladesh Standard Time)</p> 
    </div>`;
    let dBalance = document.getElementById('dBalance').value;
    let donatedBalance = Number(dBalance);
    let mBalance = document.getElementById('mBalance').innerText;
    let mainBalance = Number(mBalance);
    if (donatedTaka > 0 && donatedBalance <= mainBalance) {
        document.getElementById('cardontainer').appendChild(historyCard);
    }
    
})
// // // history for card 2
document.getElementById('btnCardTwo').addEventListener('click', function(event){
    event.preventDefault();
    let donatedTaka = document.getElementById('dBalanceTwo').value;
    const title = document.getElementById('title2');
    title.classList.remove('hidden')
    const historyCard = document.createElement('span');
    let time = timeDate();
    historyCard.innerHTML =`
    <div class="p-8 shadow-sm rounded-xl border space-y-3" >
           <p class="font-bold text-xl"><span > ${donatedTaka} </span> Taka is Donated for Flood Relief in Feni, Bangladesh</p>
            <p class="font-light">Date : <span> ${time} </span> GMT +0600 (Bangladesh Standard Time)</p> 
    </div>`;
    let dBalance = document.getElementById('dBalanceTwo').value;
    let donatedBalance = Number(dBalance);
    let mBalance = document.getElementById('mBalance').innerText;
    let mainBalance = Number(mBalance);
    if (donatedBalance > 0 && donatedBalance <= mainBalance) {
        document.getElementById('cardontainer2').appendChild(historyCard);
    }
})
// // // history for card 3
document.getElementById('btnCardThree').addEventListener('click', function(event){
    event.preventDefault();
    const historyCard = document.createElement('span');
    const title = document.getElementById('title3');
    title.classList.remove('hidden')
    let donatedTaka = document.getElementById('dBalanceThree').value;
    let time = timeDate();
    historyCard.innerHTML =`
    <div class="p-8 shadow-sm rounded-xl border space-y-3" >
          <p class="font-bold text-xl"> ${donatedTaka} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
            <p class="font-light">Date : <span> ${time} </span> GMT +0600 (Bangladesh Standard Time)</p>  
    </div>`;
    let dBalance = document.getElementById('dBalanceThree').value;
    let donatedBalance = Number(dBalance);
    let mBalance = document.getElementById('mBalance').innerText;
    let mainBalance = Number(mBalance);
    if (donatedBalance > 0 && donatedBalance <= mainBalance) {
        document.getElementById('cardontainer3').appendChild(historyCard);
    }
})
