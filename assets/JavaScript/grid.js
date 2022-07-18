$(document).ready(function(){

    function removeAllSidebarTpggleClass(){
        $('#sidebar-toggle-hide').removeClass('d-none');
        $('#sidebar-toggle-hide').removeClass('d-md-inline');
        $('#sidebar-toggle-show').removeClass('d-md-none');
        $('#sidebar-toggle-show').removeClass('d-inline');
    }

    $('#sidebar-toggle-hide').click(function(){
        $('#sidebar').fadeOut(300);
        $('#main-body').animate({width : "100%"} , 300);
        $('#main-body').animate({margin : "0"} , 300);
        setTimeout(function(){
            removeAllSidebarTpggleClass();
            $('#sidebar-toggle-hide').addClass('d-none');
            $('#sidebar-toggle-show').addClass('d-inline');
        },300);
    })

    $('#sidebar-toggle-show').click(function(){
        $('#sidebar').fadeIn(300);
        $('#main-body').animate({width : "100% - 14rem"} , 300);
        $('#main-body').animate({margin : "0 14rem 0 0"} , 300);
        setTimeout(function(){
            removeAllSidebarTpggleClass();
             $('#sidebar-toggle-show').addClass('d-none');
             $('#sidebar-toggle-hide').removeClass('d-none');

        },300);
    })

    $('#menu-toggle').click(function(){
        $('#header-body').toggle(300);
    });

    $('#notification').click(function(){
        $('#notification-dropdown').fadeToggle();
    });
    $('#header-messages').click(function(){
        $('#messages').fadeToggle();
    });
    $('#username').click(function(){
        $('#all-settings').fadeToggle();
    });

    $('#search').click(function(){
        $('#search-area').removeClass('d-none');
        $('#search').removeClass('d-md-inline-block');
    });

    $('#search-area-hide').click(function(){
        $('#search-area').addClass('d-none');
        $('#search').addClass('d-md-inline-block');
    });

    $('.sidebar-group-link').click(function(){
        if(!$(this).hasClass('sidebar-group-link-active')){
            $('.sidebar-group-link').removeClass('sidebar-group-link-active');
            $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-down');
            $('.sidebar-group-link').children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-up');
            $(this).addClass('sidebar-group-link-active');
            $(this).children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-down');
            $(this).children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-up');
         }
         else if($(this).hasClass('sidebar-group-link-active')){
            $(this).removeClass('sidebar-group-link-active');
            $(this).children('.sidebar-dropdown-toggle').children('.angle').addClass('fa-angle-down');
            $(this).children('.sidebar-dropdown-toggle').children('.angle').removeClass('fa-angle-up');
         }
    });

})

    $('#screen-control').click(function(){
        toggleFullScreen();
    });

    function toggleFullScreen(){
        if((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)){
            if(document.documentElement.requestFullscreen){
                document.documentElement.requestFullscreen();
            }
            else if(document.documentElement.mozRequestFullscreen){
                document.documentElement.mozRequestFullscreen();
            }
            else if(document.documentElement.webkitRequestFullscreen){
                document.documentElement.webkitRequestFullscreen(Element-ALLOW-KEYBOARD-INPUT);
            }
            $('#compress').removeClass('d-none');
            $('#expand').addClass('d-none');
        }
        else{
            if(document.cancelFullScreen){
                document.cancelFullScreen();
            }
            else if(document.mozCancelFullScreen){
                document.mozCancelFullScreen();
            }
            else if(document.webkitCancelFullScreen){
                document.webkitCancelFullScreen();
            }
            $('#compress').addClass('d-none');
            $('#expand').removeClass('d-none');
        }
    }
