$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 2000,
      max: 10000,
      connect: true,
      values: [ 3000, 6000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        $( "#low" ).val( ui.values[ 0 ]  );
        $( "#max" ).val( ui.values[ 1]  );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
     $( "#low" ).val( $( "#slider-range" ).slider( "values", 0 )) ;
     $( "#max" ).val( $( "#slider-range" ).slider( "values", 1 )) ;

  } );