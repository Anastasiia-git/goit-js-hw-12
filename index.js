import{a as f,i as m,S as p}from"./assets/vendor-D0cagnvz.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const d=document.querySelector(".loader");d.classList.remove("loader");const i=document.querySelector(".btnLoadMore"),y=async(s,t)=>{d.classList.add("loader"),i.classList.add("hidden");try{const o=await f.get("https://pixabay.com/api/",{params:{key:"47508443-dec4cffb8f44668b6640702d9",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:40}}),a=o.data.hits,e=o.data.totalHits,r=o.config.params.per_page;if(a.length===0)return m.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),[];{i.classList.remove("hidden");const l=Math.ceil(e/r);return t>=l&&(i.classList.add("hidden"),m.info({title:"😢",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),a}}catch(o){console.log(o)}finally{d.classList.remove("loader")}},g=async(s,t)=>{const o=document.querySelector(".gallery");try{(await y(s,t)).forEach(e=>{const r=`
                <li class="gallery-item">
                    <a class="gallery-link" href="${e.largeImageURL}">
                        <img
                            class="gallery-image"
                            src="${e.webformatURL}"
                            alt="${e.tags}"
                        />
                    </a>
                    <div class="gal-div">
                    <p class="like">Likes<spam>${e.likes}</spam></p>
                    <p class="like">Views<spam>${e.views}</spam></p>
                    <p class="like">Comments<spam>${e.comments}</spam></p>
                    <p class="like">Downloads<spam>${e.downloads}</spam></p>
                    </div>
                </li>
            `;o.insertAdjacentHTML("beforeend",r)})}catch(a){console.error("Error in createMarkup:",a)}},h=document.querySelector(".gallery"),L=document.querySelector(".form"),n=document.querySelector(".btnLoadMore");let c=1,u="";L.addEventListener("submit",async s=>{try{s.preventDefault();const t=s.target.elements.picture.value.trim();if(t)u=t,c=1,h.innerHTML="",await g(u,c),new p(".gallery a").refresh();else return;s.target.reset()}catch(t){console.log(t)}});n.addEventListener("click",async s=>{try{s.preventDefault(),n.disabled=!0,c++,await g(u,c),new p(".gallery a").refresh();const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"}),n.disabled=!1}catch(t){console.log(t)}});
//# sourceMappingURL=index.js.map
