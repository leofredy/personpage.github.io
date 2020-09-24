document.querySelector('.loading')
    .addEventListener('load', function(){
        console.log('oi')
    })

window.addEventListener('load', function(){
    document.querySelector('.loading')
        .style.display = 'none';
})