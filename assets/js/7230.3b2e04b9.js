"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7230],{27230:(e,o,t)=>{t.r(o);var n=t(29191),i=(t(41074),t(49231),t(20264),t(64151),Object.defineProperty),r=(e,o)=>i(e,"name",{value:o,configurable:!0});function u(e){return{options:e instanceof Function?{render:e}:!0===e?{}:e}}function s(e){const{options:o}=e.state.info;return(null==o?void 0:o.hoverTime)||500}function m(e,o){const t=e.state.info,i=o.target||o.srcElement;if(!(i instanceof HTMLElement))return;if("SPAN"!==i.nodeName||void 0!==t.hoverTimeout)return;const u=i.getBoundingClientRect(),m=r((function(){clearTimeout(t.hoverTimeout),t.hoverTimeout=setTimeout(p,c)}),"onMouseMove"),a=r((function(){n.C.off(document,"mousemove",m),n.C.off(e.getWrapperElement(),"mouseout",a),clearTimeout(t.hoverTimeout),t.hoverTimeout=void 0}),"onMouseOut"),p=r((function(){n.C.off(document,"mousemove",m),n.C.off(e.getWrapperElement(),"mouseout",a),t.hoverTimeout=void 0,f(e,u)}),"onHover"),c=s(e);t.hoverTimeout=setTimeout(p,c),n.C.on(document,"mousemove",m),n.C.on(e.getWrapperElement(),"mouseout",a)}function f(e,o){const t=e.coordsChar({left:(o.left+o.right)/2,top:(o.top+o.bottom)/2}),n=e.state.info,{options:i}=n,r=i.render||e.getHelper(t,"info");if(r){const n=e.getTokenAt(t,!0);if(n){const u=r(n,i,e,t);u&&a(e,o,u)}}}function a(e,o,t){const i=document.createElement("div");i.className="CodeMirror-info",i.append(t),document.body.append(i);const u=i.getBoundingClientRect(),s=window.getComputedStyle(i),m=u.right-u.left+parseFloat(s.marginLeft)+parseFloat(s.marginRight),f=u.bottom-u.top+parseFloat(s.marginTop)+parseFloat(s.marginBottom);let a=o.bottom;f>window.innerHeight-o.bottom-15&&o.top>window.innerHeight-o.bottom&&(a=o.top-f),a<0&&(a=o.bottom);let p,c=Math.max(0,window.innerWidth-m-15);c>o.left&&(c=o.left),i.style.opacity="1",i.style.top=a+"px",i.style.left=c+"px";const l=r((function(){clearTimeout(p)}),"onMouseOverPopup"),v=r((function(){clearTimeout(p),p=setTimeout(d,200)}),"onMouseOut"),d=r((function(){n.C.off(i,"mouseover",l),n.C.off(i,"mouseout",v),n.C.off(e.getWrapperElement(),"mouseout",v),i.style.opacity?(i.style.opacity="0",setTimeout((()=>{i.parentNode&&i.remove()}),600)):i.parentNode&&i.remove()}),"hidePopup");n.C.on(i,"mouseover",l),n.C.on(i,"mouseout",v),n.C.on(e.getWrapperElement(),"mouseout",v)}n.C.defineOption("info",!1,((e,o,t)=>{if(t&&t!==n.C.Init){const o=e.state.info.onMouseOver;n.C.off(e.getWrapperElement(),"mouseover",o),clearTimeout(e.state.info.hoverTimeout),delete e.state.info}if(o){const t=e.state.info=u(o);t.onMouseOver=m.bind(null,e),n.C.on(e.getWrapperElement(),"mouseover",t.onMouseOver)}})),r(u,"createState"),r(s,"getHoverTime"),r(m,"onMouseOver"),r(f,"onMouseHover"),r(a,"showPopup")}}]);