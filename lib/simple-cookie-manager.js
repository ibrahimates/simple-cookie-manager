/*
 * JavaScript Simple Cookie Manager v0.1
 * https://github.com/ibrahimates/simple-cookie-manager
 * Released under the GNU GENERAL PUBLIC LICENSE
*/

var SimpleCookieManager = function(){};

/**
 *
 * @param name
 * @returns {*}
 */
SimpleCookieManager.prototype.readCookie = function(name) {
    var search = name + "=";

    if (document.cookie.length <= 0) {return "";}

    var cookiePos = document.cookie.indexOf(search);

    if (cookiePos === -1) {return "";}

    cookiePos += search.length;

    var finish = document.cookie.indexOf(";", cookiePos);

    if (finish === -1) {
        finish = document.cookie.length;
    }

    return decodeURIComponent(document.cookie.substring(cookiePos, finish));
};

/**
 *
 * @param name
 * @param value
 * @param hours
 */
SimpleCookieManager.prototype.writeCookie = function(name, value, hours) {
    var today = new Date();
    var cookEnd = new Date();
    var timeInMilliseconds = 1000 * 60 * 60 * hours;

    cookEnd.setTime(today.getTime() + timeInMilliseconds);

    var safeValue =  encodeURIComponent(value)
        .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
    var safeKey = encodeURIComponent(name)
        .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);

    document.cookie = [safeKey, "=", safeValue, "; expires=", cookEnd.toGMTString()].join('');
};
