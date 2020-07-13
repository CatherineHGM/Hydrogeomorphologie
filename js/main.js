//ajouton tous notre code a linterieur de window.onload car le js file a tendance a se loader plus vite que le html ce qui fait
//qui ne selectionnera pas nos element comme getelementbyid et tout.
// permet dacceder aux differentes sections(hydrologie, geomorphologie, etc.) + rapidement
window.onload= function (){
   //jquery smooth scrolling
$('#navbar a').on('click', function (event) {
    if(this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop:$(hash).offset().top - 60
        }, 100);
    }
});

//2e page du site web pour developper la petite carte en une page 
document.getElementById('developper').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
})

document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none'
})

};
