$(document).ready(function() {
    const btn  = $('#dd');  
    console.log(btn);

    $('.col:first').hover(function() {
        $(this).toggleClass('blac')
    })

});