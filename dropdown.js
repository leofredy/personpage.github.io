document.querySelector('.lni-menu')
    .addEventListener('click', function(event) {
        if (event.target.classList[1] === 'lni-menu'){
            event.target.classList.remove('lni-menu');
            event.target.classList.add('lni-close');
        } else {
            event.target.classList.remove('lni-close');
            event.target.classList.add('lni-menu');
        }
        console.log(event.target.classList)
        document.querySelector('#navbar')
            .classList.toggle('toggle-nav');
    });
