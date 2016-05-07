/* Dribbble Shots using Jribbble plugin */

$(function () {
    $(".service").hover(function () {
        $("#networks").addClass($(this).data("network")).addClass("active");
        $("#networks p").html($(this).data("tip"))
    }, function () {
        $("#networks").removeClass();
        $("#networks p").html("You can find me all over the web")
    })
});
jQuery(document).ready(function () {
    $("#home").height($(window).height());
    $(window).resize(function () {
        $("#home").height($(window).height());
        $("#home").css("min-height", "100%")
    });
    /*
    $("#bio").height($(window).height());
    $(window).resize(function () {
        $("#bio").height($(window).height());
        $("#bio").css("min-height", "100%")
    });
    */
    $("#bio").css("min-height", "100%");
    
    /*
    $("#past").height($(window).height());
    $(window).resize(function () {
        $("#past").height($(window).height());
        $("#past").css("min-height", "100%")
    });
    */
    $("#past").css("min-height", "100%");
    /*
     $("#skills").height($(window).height());
    $(window).resize(function () {
        $("#skills").height($(window).height());
        $("#skills").css("min-height", "600px")
    });
    */
    $("#skills").css("min-height", "100%");
    $("#latest-work").css("min-height", "100%");
    
    
    $("#showcase").css("min-height", "100%");
    //$("#showcase").css("height", "500px");
  
    $("#process").css("min-height", "100%");
    
    $("#brand").css("min-height", "100%");
    
    /*
    $("#thanks").height($(window).height());
    $(window).resize(function () {
        $("#thanks").height($(window).height());
        $("#thanks").css("min-height", "100%")
    });
    */
    $("#thanks").css("min-height", "100%");
    
    $("#contact").css("min-height", "100%");
/*    
    $("#networks").height($(window).height());
    $(window).resize(function () {
        $("#networks").height($(window).height());
        $("#networks").css("min-height", "600px")
    });
*/
    
});
$(document).ready(function (e) {
    e(".scroll").click(function (t) {
        t.preventDefault();
        e("html,body").animate({
            scrollTop: e(this.hash).offset().top
        }, 1e3)
    });
    
    
    
    
    // Initialize the graphs
    
    $(function($) {

                $(".knob").knob({
                   
                });
    });
    
    // Initialize the grid
    $(function() {
				Grid.init();
			});
    
    // Initialize the showcase carrousel
    $(function() {
			
				var Page = (function() {

					var $navArrows = $( '#nav-arrows' ),
						$nav = $( '#nav-dots > span' ),
						slitslider = $( '#slider' ).slitslider( {
							onBeforeChange : function( slide, pos ) {

								$nav.removeClass( 'nav-dot-current' );
								$nav.eq( pos ).addClass( 'nav-dot-current' );

							}
						} ),

						init = function() {

							initEvents();
							
						},
						initEvents = function() {

							// add navigation events
							$navArrows.children( ':last' ).on( 'click', function() {

								slitslider.next();
								return false;

							} );

							$navArrows.children( ':first' ).on( 'click', function() {
								
								slitslider.previous();
								return false;

							} );

							$nav.each( function( i ) {
							
								$( this ).on( 'click', function( event ) {
									
									var $dot = $( this );
									
									if( !slitslider.isActive() ) {

										$nav.removeClass( 'nav-dot-current' );
										$dot.addClass( 'nav-dot-current' );
									
									}
									
									slitslider.jump( i + 1 );
									return false;
								
								} );
								
							} );

						};

						return { init : init };

				})();

				Page.init();

				/**
				 * Notes: 
				 * 
				 * example how to add items:
				 */

				/*
				
				var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');
				
				// call the plugin's add method
				ss.add($items);

				*/
			
			});
    
    
    
    
    // function for Back to Top link
    
        $(window).scroll(function() {
            if ($(this).scrollTop()) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $("#toTop").click(function () {
           //1 second of animation time
           //html works for FFX but not Chrome
           //body works for Chrome but not FFX
           //This strange selector seems to work universally
           $("html, body").animate({scrollTop: 0}, 1000);
        });
    
    
    
    // Init for wow.js animation os scrolling
    
    new WOW().init();
    
    
    
    // Overlay full screen menu
    
    /*!
     * classie - class helper functions
     * from bonzo https://github.com/ded/bonzo
     * 
     * classie.has( elem, 'my-class' ) -> true/false
     * classie.add( elem, 'my-new-class' )
     * classie.remove( elem, 'my-unwanted-class' )
     * classie.toggle( elem, 'my-class' )
     */

    /*jshint browser: true, strict: true, undef: true */
    /*global define: false */

    ( function( window ) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg( className ) {
      return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ( 'classList' in document.documentElement ) {
      hasClass = function( elem, c ) {
        return elem.classList.contains( c );
      };
      addClass = function( elem, c ) {
        elem.classList.add( c );
      };
      removeClass = function( elem, c ) {
        elem.classList.remove( c );
      };
    }
    else {
      hasClass = function( elem, c ) {
        return classReg( c ).test( elem.className );
      };
      addClass = function( elem, c ) {
        if ( !hasClass( elem, c ) ) {
          elem.className = elem.className + ' ' + c;
        }
      };
      removeClass = function( elem, c ) {
        elem.className = elem.className.replace( classReg( c ), ' ' );
      };
    }

    function toggleClass( elem, c ) {
      var fn = hasClass( elem, c ) ? removeClass : addClass;
      fn( elem, c );
    }

    var classie = {
      // full names
      hasClass: hasClass,
      addClass: addClass,
      removeClass: removeClass,
      toggleClass: toggleClass,
      // short names
      has: hasClass,
      add: addClass,
      remove: removeClass,
      toggle: toggleClass
    };

    // transport
    if ( typeof define === 'function' && define.amd ) {
      // AMD
      define( classie );
    } else {
      // browser global
      window.classie = classie;
    }

    })( window );

    
    
    
    (function() {
        var triggerBttn = document.getElementById( 'trigger-overlay' ),
            overlay = document.querySelector( 'div.overlay' ),
            closeBttn = overlay.querySelector( 'button.overlay-close' ),
            linksClose = overlay.querySelectorAll( 'a.scroll' ),
            transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
            transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
            support = { transitions : Modernizr.csstransitions };

        function toggleOverlay() {
            if( classie.has( overlay, 'open' ) ) {
                classie.remove( overlay, 'open' );
                classie.add( overlay, 'close' );
                var onEndTransitionFn = function( ev ) {
                    if( support.transitions ) {
                        if( ev.propertyName !== 'visibility' ) return;
                        this.removeEventListener( transEndEventName, onEndTransitionFn );
                    }
                    classie.remove( overlay, 'close' );
                };
                if( support.transitions ) {
                    overlay.addEventListener( transEndEventName, onEndTransitionFn );
                }
                else {
                    onEndTransitionFn();
                }
            }
            else if( !classie.has( overlay, 'close' ) ) {
                classie.add( overlay, 'open' );
            }
        }

        triggerBttn.addEventListener( 'click', toggleOverlay );
        closeBttn.addEventListener( 'click', toggleOverlay );
        $(linksClose).each(function(i,v){
            v.addEventListener( 'click', toggleOverlay );
        });
       // linksClose.addEventListener( 'click', toggleOverlay );
    })();
    
    

});

/*Change, in the first line the username "powdah" with your dribbble username. That's all */