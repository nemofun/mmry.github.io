var timer = function() {
    var love_time = 1391097600;
    var now_time = Math.round(new Date().getTime()/1000);
    var long_time = now_time - love_time;
    var days = parseInt(long_time/(3600*24));
    var hours = parseInt((long_time - days*3600*24)/3600);
    var minutes =  parseInt((long_time - days*3600*24 - hours*3600)/60);
    var seconds = parseInt(long_time - days*3600*24 - hours*3600 - minutes*60);
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = pnm(hours.toString(), 2);
    document.getElementById('minutes').innerHTML = pnm(minutes.toString(), 2);
    document.getElementById('seconds').innerHTML = pnm(seconds.toString(), 2);
}

function pnm(num, len) {
	if (num.length >= len)
        return num;
    else
        return pnm("0" + num, len);
}

function setcookie(cookieName, cookieValue, seconds, path, domain, secure) {
    if(cookieValue == '' || seconds < 0) {
        cookieValue = '';
        seconds = -2592000;
    }
    if(seconds) {
        var expires = new Date();
        expires.setTime(expires.getTime() + seconds * 1000);
    }
    domain = !domain ? '' : domain;
    path = !path ? '' : path;
    document.cookie = escape(cookieName) + '=' + escape(cookieValue)
        + (expires ? '; expires=' + expires : '')
        + (path ? '; path=' + path : '/')
        + (domain ? '; domain=' + domain : '')
        + (secure ? '; secure' : '');
}

function getcookie(name, nounescape) {
    var cookie_start = document.cookie.indexOf(name);
    var cookie_end = document.cookie.indexOf(";", cookie_start);
    if(cookie_start == -1) {
        return '';
    } else {
        var v = document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length));
        return !nounescape ? unescape(v) : v;
    }
}

function autoIndex() {
    var refer = document.referrer;
    if (window.location.pathname == '/') {
        $(".content").hide();
    }
    if (refer.indexOf(window.location.host) == '-1' || window.location.pathname != '/') {
        return false;
    } else 
        return true;
}

function indexAction() {
    if ($(".content").css('display') == 'none') {
        $('#ourlove').animate({width:'40%'}, 'slow', function(){
            $("#love").css({fontSize:'1.3em'});
            $("#timer").css({fontSize:'1.4em'});
            $(".content").show();
        });
    }
}

$(function($) {
    if (autoIndex()) {
        indexAction();
    }
    $('#ourlove').click(function(){
        indexAction();
    });
});