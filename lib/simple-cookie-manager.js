/*
 * JavaScript Simple Cookie Manager v0.1
 * https://github.com/ibrahimates/simple-cookie-manager
 * Released under the GNU GENERAL PUBLIC LICENSE
*/

class SimpleCookieManager {
    /**
     *
     * @param name
     * @returns {*}
     */
    readCookie(name) {
        const search = `${name}=`;

        if (document.cookie.length <= 0) {return "";}

        let cookiePos = document.cookie.indexOf(search);

        if (cookiePos === -1) {return "";}

        cookiePos += search.length;

        let finish = document.cookie.indexOf(";", cookiePos);

        if (finish === -1) {
            finish = document.cookie.length;
        }

        return decodeURIComponent(document.cookie.substring(cookiePos, finish));
    }

    /**
     *
     * @param name
     * @param value
     * @param hours
     */
    writeCookie(name, value, hours) {
        const today = new Date();
        const cookEnd = new Date();
        const timeInMilliseconds = 1000 * 60 * 60 * hours;

        cookEnd.setTime(today.getTime() + timeInMilliseconds);

        const safeValue =  encodeURIComponent(value)
            .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        const safeKey = encodeURIComponent(name)
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);

        document.cookie = [safeKey, "=", safeValue, "; expires=", cookEnd.toGMTString()].join('');
    }
}
