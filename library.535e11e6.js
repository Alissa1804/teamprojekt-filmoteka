var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("9s2vc");var r=o("fA1qS"),l=o("9IiBV");const c=document.querySelector(".watched-list"),d=document.querySelector("#addToWatchedBtn"),i=document.querySelector(".card-btn-delete"),a=document.querySelectorAll(".no-movie"),s=localStorage.getItem("watched"),u=JSON.parse(s);u&&0!==u.length?((0,r.markupMovies)(u,c),a.forEach((e=>e.style.display="none"))):a.forEach((e=>e.style.display="block")),d.addEventListener("click",l.clickOnWatchedBtn),i.addEventListener("click",l.clickOnDeleteWatchedBtn);
//# sourceMappingURL=library.535e11e6.js.map
