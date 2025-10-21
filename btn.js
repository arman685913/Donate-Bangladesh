// btn using replace
document.getElementById('donation').addEventListener('click', function(){
    btn('donationBtn')
    
})
document.getElementById('history').addEventListener('click', function(){
    btn('historyBtn')
})

// btn color change
document.getElementById('donation').addEventListener('click', function(){
    color('donation')
    
})
document.getElementById('history').addEventListener('click', function(){
    color('history')
})

// blog to home replace
document.getElementById('blog').addEventListener('click', function(){
    window.location.href = "homes.html";
})
