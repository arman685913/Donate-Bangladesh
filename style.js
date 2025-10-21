// button using replace
function btn (id){
    document.getElementById('donationBtn').classList.add('hidden');
    document.getElementById('historyBtn').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
// btn color change
function color (colorId){
    document.getElementById('donation').classList.remove('bg-[#B4F461]')
    document.getElementById('history').classList.remove('bg-[#B4F461]')
    document.getElementById(colorId).classList.add('bg-[#B4F461]')
}
