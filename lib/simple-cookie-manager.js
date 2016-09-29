/*
 * JavaScript Simple Cookie Manager v0.1
 * https://github.com/ibrahimates/simple-cookie-manager
 * Released under the GNU GENERAL PUBLIC LICENSE
*/

var SimpleCookieManager = function(){
  this.readCookie = function(name){
 var _search = name + "=";
 if (document.cookie.length > 0) {  
  _cookiePos = document.cookie.indexOf(_search);
  if (_cookiePos != -1) { 
   _cookiePos += _search.length;  
   _finish = document.cookie.indexOf(";", _cookiePos); 
   if (_finish == -1) 
     _finish = document.cookie.length;
   return unescape(document.cookie.substring(_cookiePos, _finish));
  }
 }
}
 this.writeCookie = function(name, val, h){
  var _today = new Date();
  var _cookend = new Date();
  _cookend.setTime(_today.getTime() + 1000*60*60*h);
  document.cookie = name + "=" + escape(val) + "; expires=" + _cookend.toGMTString();
}
}