import{S as i}from"./assets/vendor-10cb7c31.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const c=document.querySelector("form");document.querySelector("#date-pictures");document.querySelector("button");const a=document.querySelector(".gallery");c.addEventListener("submit",u);function u(r){r.preventDefault();const s=r.target.elements.inputtext.value;d(s.toLowerCase().trim()).then(e=>{console.log(e),m(e.hits)}).catch(e=>alert("Fetch error: ",e.message)).finally(()=>c.reset())}function d(r){return fetch(`https://pixabay.com/api/?key=44790874-b72b714502b79af1442269c5d&q=${r}`).then(e=>{if(console.log(e),!e.ok)throw new Error(`my mistake is ${e.status}`);return e.json()})}function m(r){a.innerHTML="";const s=r.map(e=>`<li class="gallery-item">
      <a href="${e.largeImageURL}" class="gallery-link">
    <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-image" />
  </a> 
  <div class="item-info">
<div class="item-info-box">
  <p class="likes name">Likes</p>
  <p class="likes value">${e.likes}</p>
</div>
<div class="item-info-box">
  <p class="views name">Views</p>
  <p class="views value">${e.views}</p>
</div>
<div class="item-info-box">
  <p class="com name">Comments</p>
  <p class="com value">${e.comments}</p>
</div>
<div class="item-info-box">
  <p class="downl name">Downloads</p>
  <p class="downl value">${e.downloads}</p>
</div>
</div>
  </li>
`).join("");a.insertAdjacentHTML("beforeend",s),new i(".gallery a",{captionsData:"alt",captionDelay:250})}document.addEventListener("DOMContentLoaded",()=>{new i(".gallery a",{captionsData:"alt",captionDelay:250})});
//# sourceMappingURL=commonHelpers.js.map
