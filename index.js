import{a as b,S as w,i as d}from"./assets/vendor-tnUJPedx.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function h(a,s,i){return await b.get(`https://pixabay.com/api/?q=${a}&image_type=photo&orientation=horizontal&safesearch=true&key=47508443-dec4cffb8f44668b6640702d9`,{params:{page:s,per_page:i}})}function g(a){return a.map(({webformatURL:s,largeImageURL:i,tags:o,likes:e,views:t,comments:c,downloads:L})=>`<li class="list-item" >
  <a href="${i}" alt="${o}" title=""/>
    <img src="${s}" alt="${o}" class="img-item">
  <div class="list-container">
  <p class="item"><span class="item-text">Likes</span> <span>${e}</span></p>
  <p class="item"><span class="item-text">Wiews</span> <span>${t}</span></p>
  <p class="item"><span class="item-text">Comments</span> <span>${c}</span></p>
  <p class="item"><span class="item-text">Downlods</span> <span>${L}</span></p>
  </div></a>
</li>`).join("")}const y=new w(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"}),P=document.querySelector(".form"),f=document.querySelector(".gallery"),m=document.querySelector(".loader"),r=document.querySelector(".more-btn"),p=15;let n=1,u=1,l;P.addEventListener("submit",$);r.addEventListener("click",v);function $(a){a.preventDefault();const{picture:s}=a.target.elements;l=s.value.trim(),f.innerHTML="",(!l||l===" ")&&d.show({title:":(",message:"Please add request!",position:"center",color:"red"}),n=1,m.classList.remove("hidden"),r.classList.replace("more-btn","hidden"),h(l,n,p).then(({data:{hits:i,totalHits:o}})=>{u=Math.ceil(o/p),i.length?(f.innerHTML=g(i),y.refresh(),n>=u?r.classList.replace("more-btn","hidden"):r.classList.replace("hidden","more-btn")):d.show({title:"X",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"red"})}).catch(i=>{console.log(i.message),d.show({title:"X",message:`${i.message}`,position:"center",color:"red"})}).finally(()=>{s.value="",m.classList.add("hidden")})}async function v(){n+=1,r.disabled=!0,m.classList.add("hidden");try{const{data:{hits:a,totalHits:s}}=await h(l,n,p);f.insertAdjacentHTML("beforeend",g(a)),u=Math.ceil(s/p),n===u&&(r.classList.replace("more-btn","hidden"),d.show({title:"X",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"red"}));const o=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({left:0,top:o*2,behavior:"smooth"}),y.refresh()}catch(a){d.show({title:"X",message:`${a.message}`,position:"center",color:"red"})}finally{r.disabled=!1,m.classList.add("hidden")}}
//# sourceMappingURL=index.js.map