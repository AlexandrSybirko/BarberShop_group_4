parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KDQT":[function(require,module,exports) {
var n=document.querySelector("#myBtn");function t(){window.pageYOffset>300?n.classList.contains("btnEntrance")||(n.classList.remove("btnExit"),n.classList.add("btnEntrance"),n.style.display="block"):n.classList.contains("btnEntrance")&&(n.classList.remove("btnEntrance"),n.classList.add("btnExit"),setTimeout(function(){n.style.display="none"},150))}function e(){var n=window.pageYOffset,t=0-n,e=750,i=null;window.requestAnimationFrame(function a(o){i||(i=o);var c=o-i;window.scrollTo(0,s(c,n,t,e));c<e&&window.requestAnimationFrame(a)})}function s(n,t,e,s){return(n/=s/2)<1?e/2*n*n*n+t:e/2*((n-=2)*n*n+2)+t}window.addEventListener("scroll",t),n.addEventListener("click",e);
},{}]},{},["KDQT"], null)
//# sourceMappingURL=/BarberShop_group_4/btn-upp.8d001410.js.map