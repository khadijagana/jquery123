$("#bold").click(function(e){
    e.preventDefault();
    var target = $("#Lyrics");
    if( target.css('font-weight') == "700" ) {
        target.css('font-weight','400');
    } else {
        target.css('font-weight','700');
    }
})
$("#underline").click(function(e){
    e.preventDefault();
    var target = $("#Lyrics");
    if( target.css('text-decoration').includes( "underline" )) {
       target.css('text-decoration', "none");
   } else {
       target.css('text-decoration',  "underline");
   }
})
$("#italicText").click(function(e){
    e.preventDefault();
    var target = $("#Lyrics");
    if( target.css('font-style').includes("italic")) {
        target.css('font-style', "normal");
    } else {
        target.css('font-style', "italic");
    }
})
$("#font").change(function(e){

    $("#Lyrics").css('font-family',$('#font').val())
})
$("#size").change(function(e){
    console.log( $('size').val())
  $("#Lyrics").css('font-size', $('#size').val())
})