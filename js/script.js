var el = $('ul li i');

el.hover(function(){
    $(el=this).find('p').css('display','block');
},function(){
    // $('ul li p').css('display','none');
    $('ul li p').fadeOut( 800 );
})
//  Fim mais detalhes.