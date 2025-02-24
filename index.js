import{a as f,S as g,i as u}from"./assets/vendor-D0cagnvz.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const m=async(r,s)=>{try{return await f.get("https://pixabay.com/api/",{params:{key:"47508443-dec4cffb8f44668b6640702d9",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:40}})}catch(a){console.log(a)}},y=async(r,s)=>{const a=document.querySelector(".gallery");try{(await m(r,s)).data.hits.forEach(e=>{const c=`
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
            `;a.insertAdjacentHTML("beforeend",c)})}catch(o){console.error("Error in createMarkup:",o)}},n=document.querySelector(".loader");n.classList.remove("loader");const h=document.querySelector(".gallery"),L=document.querySelector(".form"),i=document.querySelector(".btnLoadMore");let b=new g(".gallery a"),l=1,d="";async function p(r,s){n.classList.add("loader");try{const a=await m(r,s),o=a.data.hits,t=a.data.totalHits,e=a.config.params.per_page;if(o.length===0)u.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),i.classList.add("hidden");else{i.classList.remove("hidden");const c=Math.ceil(t/e);s>=c?(i.classList.add("hidden"),u.info({title:"😢",message:"We're sorry, but you've reathe end of search results.",position:"topRight"})):i.classList.remove("hidden")}await y(r,s),b.refresh()}catch(a){console.error("Error in searchImages:",a)}finally{n.classList.remove("loader")}}L.addEventListener("submit",async r=>{r.preventDefault();const s=r.target.elements.picture.value.trim();if(s)d=s,l=1,h.innerHTML="",await p(d,l)&&r.target.reset();else return});i.addEventListener("click",async r=>{if(r.preventDefault(),i.disabled=!0,l++,await p(d,l)){const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"})}i.disabled=!1,r.target.reset()});
//# sourceMappingURL=index.js.map
