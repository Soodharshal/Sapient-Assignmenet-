(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{qUHY:function(n,i,t){"use strict";t.r(i),t.d(i,"DynamicDivModule",function(){return s});var c=t("ofXK"),o=t("tyNb"),e=t("fXoL");function r(n,i){if(1&n){const n=e.Lb();e.Kb(0,"div",3),e.Kb(1,"button",4),e.Qb("click",function(){e.Zb(n);const t=i.$implicit;return e.Sb().onClick(t)}),e.dc(2),e.Jb(),e.Jb()}if(2&n){const n=i.$implicit;e.vb(2),e.ec(n)}}let l=(()=>{class n{constructor(){this.arrayNum=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],this.limit=10,this.numOnScroll=[]}ngOnInit(){let n=this;n.numOnScroll=n.arrayNum.slice(0,n.limit),n.section=document.querySelector("#section-1"),new IntersectionObserver((function(i,t){i.forEach(function(i){i.isIntersecting&&n.limit<=n.arrayNum.length-1&&(n.numOnScroll=n.numOnScroll.concat(n.arrayNum.slice(n.limit,n.limit+10)),n.limit=n.limit+10)})}).bind(window),{root:null,rootMargin:"0px",threshold:.8}).observe(n.section)}onClick(n){alert(`Button \u2018${n}\u2019 is clicked`)}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.zb({type:n,selectors:[["app-dynamic-div"]],decls:4,vars:1,consts:[[1,"row"],["class","fixedDiv col-lg-4",4,"ngFor","ngForOf"],["id","section-1"],[1,"fixedDiv","col-lg-4"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(n,i){1&n&&(e.Kb(0,"section"),e.Kb(1,"div",0),e.cc(2,r,3,1,"div",1),e.Jb(),e.Gb(3,"div",2),e.Jb()),2&n&&(e.vb(2),e.Vb("ngForOf",i.numOnScroll))},directives:[c.i],styles:[".fixedDiv[_ngcontent-%COMP%]{align-items:center;border:.2px solid;display:flex;height:200px;justify-content:center;width:200px}"]}),n})(),s=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.Db({type:n}),n.\u0275inj=e.Cb({imports:[[c.b,o.f.forChild([{path:"",component:l}])]]}),n})()}}]);