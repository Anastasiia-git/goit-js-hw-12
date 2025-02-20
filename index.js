import{a as f,i as p,S as g}from"./assets/vendor-4dYZuk4Q.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=document.querySelector(".loader");d.classList.remove("loader");const i=document.querySelector(".btnLoadMore"),y=async(o,r)=>{d.classList.add("loader"),i.classList.add("hidden");try{const s=await f.get("https://pixabay.com/api/",{params:{key:"47508443-dec4cffb8f44668b6640702d9",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:40}}),a=s.data.hits;return a.length===0?(p.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),[]):(s.data.totalHits<=1&&(i.disabled=!0,p.info({title:"😢",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),i.classList.remove("hidden"),a)}catch(s){console.log(s)}finally{d.classList.remove("loader")}},m=async(o,r)=>{const s=document.querySelector(".gallery");try{(await y(o,r)).forEach(t=>{const l=`
                <li class="gallery-item">
                    <a class="gallery-link" href="${t.largeImageURL}">
                        <img
                            class="gallery-image"
                            src="${t.webformatURL}"
                            alt="${t.tags}"
                        />
                    </a>
                    <div class="gal-div">
                    <p class="like">Likes<spam>${t.likes}</spam></p>
                    <p class="like">Views<spam>${t.views}</spam></p>
                    <p class="like">Comments<spam>${t.comments}</spam></p>
                    <p class="like">Downloads<spam>${t.downloads}</spam></p>
                    </div>
                </li>
            `;s.insertAdjacentHTML("beforeend",l)});let e=new g(".gallery a");e.on("show.simplelightbox",function(){e.options.captionsData="alt",e.options.captionDelay=2500}),e.refresh()}catch(a){console.error("Error in createMarkup:",a)}},h=document.querySelector(".gallery"),L=document.querySelector(".form"),n=document.querySelector(".btnLoadMore");let c=1,u="";L.addEventListener("submit",async o=>{try{o.preventDefault();const r=o.target.elements.picture.value.trim();if(r)u=r,c=1,m(u,c);else return;o.target.reset(),h.innerHTML=""}catch(r){console.log(r)}});n.addEventListener("click",async o=>{try{o.preventDefault(),n.disabled=!0,c++,await m(u,c);const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:s*2,behavior:"smooth"}),n.disabled=!1}catch(r){console.log(r)}});
//# sourceMappingURL=index.js.map
