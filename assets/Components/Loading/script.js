const app = document.querySelector('html');
app.style.overflow = 'hidden';


window.addEventListener('load', function(){
    document.querySelector('.loading')
        .style.display = 'none'; 
    app.style.overflow = 'auto';
})