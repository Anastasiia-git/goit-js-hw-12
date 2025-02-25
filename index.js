import{a as f,S as g,i as u}from"./assets/vendor-D0cagnvz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const m=async(a,r)=>{try{return await f.get("https://pixabay.com/api/",{params:{key:"47508443-dec4cffb8f44668b6640702d9",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:40}})}catch(s){console.log(s)}},y=async(a,r)=>{const s=document.querySelector(".gallery");try{(await m(a,r)).data.hits.forEach(e=>{const c=`
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
            `;s.insertAdjacentHTML("beforeend",c)})}catch(o){console.error("Error in createMarkup:",o)}},n=document.querySelector(".loader");n.classList.remove("loader");const h=document.querySelector(".gallery"),L=document.querySelector(".form"),i=document.querySelector(".btnLoadMore");let b=new g(".gallery a"),l=1,d="";async function p(a,r){n.classList.add("loader");try{const s=await m(a,r),o=s.data.hits,t=s.data.totalHits,e=s.config.params.per_page;if(o.length===0)u.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),i.classList.add("hidden");else{i.classList.remove("hidden");const c=Math.ceil(t/e);r>=c?(i.classList.add("hidden"),u.info({title:"😢",message:"We're sorry, but you've reathe end of search results.",position:"topRight"})):i.classList.remove("hidden")}await y(a,r),b.refresh()}catch(s){console.error("Error in searchImages:",s)}finally{n.classList.remove("loader")}}L.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements.picture.value.trim();if(r)d=r,l=1,h.innerHTML="",await p(d,l)&&a.target.reset();else return});i.addEventListener("click",async a=>{a.preventDefault(),i.disabled=!0,l++,await p(d,l);const s=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:s*2,behavior:"smooth"}),i.disabled=!1});
//# sourceMappingURL=index.js.map
