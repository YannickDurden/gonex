$(function() {

    $('.scroll').on('click',function(){
        var page = $(this).attr('href'); //cible
        var speed = 1000; //durée de l'animation

        $('html,body').animate({
            scrollTop: $(page).offset().top //scroll vers le haut de l'élement
        },speed); 

        return false; //evite le comportement normal d'un clic sur <a>
    });

//fin du script  
});