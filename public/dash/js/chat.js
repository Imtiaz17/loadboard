/*! chat.js | Bulkit | CSS Ninja */

/* ==========================================================================
Chat related functions
========================================================================== */

$(document).ready(function(){

    "use strict";

    //Close chat app
    $('.close-chat, .open-chat').on('click', function () {
        $('.chat-wrapper').toggleClass('is-active');
        $('body').toggleClass('is-frozen');
    })

    //Close chat side panel
    $('#chat-panel .panel-close').on('click', function () {
        $('#chat-body, #chat-panel').removeClass('is-opened');
    })

    $('#chat-sidebar .user-item').on('click', function () {

        //Declare variables
        var targetUser = $(this).attr('data-chat-user');
        var userAvatar = $(this).find('img').attr('src');
        var targetUserFullname = $(this).attr('data-full-name');
        var userStatus = $(this).attr('data-status');

        //Handle sidebar chat items active state
        $('.user-item.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        //Resize chat body and open side panel
        $('#chat-body, #chat-panel').addClass('is-opened');

        //Handle user details toggle
        $('.chat-body-inner').addClass('is-hidden');
        $('#' + targetUser + '-conversation').removeClass('is-hidden');
        //Handle user conversation toggle
        $('.panel-body').addClass('is-hidden');
        $('#' + targetUser + '-details').removeClass('is-hidden');
        //Handle conversation header update
        $('.recipient-block').find('.user-avatar').attr('src', userAvatar);
        $('.recipient-block').find('.username span:first-child').text(targetUserFullname);
        $('.recipient-block').find('.username span span').text('| ' + userStatus);

    })

    $('.list-item img').on('click', function () {
        var userImage = $(this).attr('src');
        var userName = $(this).attr('data-username');
        var userPosition = $(this).attr('data-position');

        $('#user-details .user-avatar').attr('src', userImage);
        $('#user-details .username').html(userName);
        $('#user-details .user-position').html(userPosition);
        $('#user-list').addClass('is-hidden');
        $('#user-details').removeClass('is-hidden');
        console.log('clicked');
    })

    $('.cancel-new-chat, .confirm-new-chat').on('click', function(){
        $('#user-details').addClass('is-hidden');
        $('#user-list').removeClass('is-hidden');
    })

    var el = $('.new-list');

    el.on('mousemove', function (e) {
        var elPos = $(this).offset(),
            cursPosX = e.pageX - elPos.left,
            cursPosY = e.pageY - elPos.top,
            elWidth = $(this).width(),
            elHeight = $(this).height(),
            elHalfWidth = elWidth / 2,
            elHalfHeight = elHeight / 2,
            cursFromCenterX = elHalfWidth - cursPosX,
            cursFromCenterY = elHalfHeight - cursPosY;
        var reflectPercent = (cursPosX + cursPosY) / (elWidth + elHeight) * 100;
        //console.log(elPos, cursPosX, cursPosY, elHalfWidth, elHalfHeight, cursFromCenterX, cursFromCenterY)
        //console.log(shadowPercent);
        $(this).css('transform', 'perspective(500px) rotateX(' + (cursFromCenterY / 20) + 'deg) rotateY(' + -(cursFromCenterX / 20) + 'deg)');
        //$('.shadow').css('background-image', 'linear-gradient(45deg, rgba(0, 0, 0, 0.8), transparent' + shadowPercent + '%)');
        //$('.shadow').css('background-image', 'linear-gradient('+ cursFromCenterY / 20 +'deg, rgba(0, 0, 0, 1), transparent '+ shadowPercent / 2 +'%)');
        //$('.shadow').css('background-position', shadowPercent + '%');
        $('.reflect').css('transform', 'scale(' + reflectPercent / 40 + ')')
        $(this).removeClass('leave');
    });

    el.on('mouseleave', function () {
        //$(this).css('transform','rotateX(0) rotateY(0)').css('transition-timing-function', 'cubic-bezier(.6,-0.82,.35,1.58)');
        $('.reflect').css('transform', 'scale(1)')
        $(this).addClass('leave');
    });
})