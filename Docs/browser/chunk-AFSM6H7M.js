import{a as j}from"./chunk-PNU75DGW.js";import{a as P,b as k,c as F}from"./chunk-K7JNYOXB.js";import{l as A}from"./chunk-FXKKQLOH.js";import{a as M}from"./chunk-VTBKJ64V.js";import{f as O}from"./chunk-W52NJFE2.js";import"./chunk-LFFRWUCI.js";import{Ab as T,Bb as m,Fb as r,Gb as p,Hb as _,Jb as E,La as S,Oa as a,W as c,Za as h,aa as y,ba as D,cb as d,jb as u,nb as f,ob as x,pb as v,qb as g,rb as o,sb as n,tb as l,ub as b,vb as w,wb as I}from"./chunk-YM5XIUHN.js";import"./chunk-EQDQRRRY.js";var R=()=>[1,2,3,4,5];function V(t,i){if(t&1&&(o(0,"figure",21),l(1,"img",22),n()),t&2){let e=m().$implicit;a(),u("src",e,S)}}function B(t,i){t&1&&d(0,V,2,1,"ng-template",6)}function N(t,i){t&1&&l(0,"i",13)}function G(t,i){t&1&&l(0,"i",14)}function H(t,i){if(t&1){let e=I();o(0,"section")(1,"div",0)(2,"h2",1),r(3,"details products"),n(),o(4,"div",2)(5,"div",3)(6,"div",4)(7,"owl-carousel-o",5),b(8),v(9,B,1,0,null,6,x),w(),n()(),o(11,"div",7)(12,"div")(13,"h2",8),r(14),n(),o(15,"p",9),r(16),n(),o(17,"h3",10),r(18),n()(),o(19,"div")(20,"div",11)(21,"p",12),r(22),n(),v(23,N,1,0,"i",13,x),d(25,G,1,0,"i",14),o(26,"h2",15),r(27),n()(),o(28,"div",16)(29,"button",17),T("click",function(){y(e);let C=m();return D(C.getCartItem(C.productDetails.id))}),l(30,"i",18),o(31,"span"),r(32," add to cart "),n()(),o(33,"div",19),l(34,"i",20),n()()()()()()()()}if(t&2){let e=m();a(7),u("options",e.customOptions),a(2),g(e.productDetails.images),a(5),_("",e.productDetails.title," "),a(2),p(e.productDetails.description),a(2),p(e.productDetails.category.name),a(4),_("",e.productDetails.price," EPG"),a(),g(E(7,R).slice(0,e.productDetails.ratingsAverage)),a(2),f(e.productDetails.ratingsAverage%1!==0?25:-1),a(2),p(e.productDetails.ratingsAverage)}}var z=class t{activatedRoute=c(O);homesevice=c(j);cartService=c(M);toastrService=c(A);productDetails={};ngOnInit(){this.activatedRoute.paramMap.subscribe({next:i=>{console.log(i.get("id"));let e=i.get("id");this.homesevice.getSpecificProducts(e).subscribe({next:s=>{console.log(s.data),this.productDetails=s.data},error:()=>{}})},error:i=>{console.log(i)}})}getCartItem(i){this.cartService.addProductToCart(i).subscribe({next:e=>{console.log(e),this.toastrService.success(e.message,"Fresh Cart")},error:e=>{console.log(e),this.toastrService.error(e.message,"Fresh Cart")}})}customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,pullDrag:!1,dots:!0,dotsData:!0,navSpeed:700,nav:!1,navText:["",""],responsive:{0:{items:1}}};static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-details"]],decls:1,vars:1,consts:[[1,"container","py-5"],[1,"text-center","my-2","font-semibold","text-2xl","capitalize","pb-3"],[1,"bg-gray-100","rounded-lg","shadow-2xl","w-full","container"],[1,"row","justify-between","items-center"],[1,"col-md-3"],[3,"options"],["carouselSlide",""],[1,"details","col-md-9"],[1,"font-semibold","text-2xl"],[1,"text-gray-600","my-3"],[1,"h-6","my-2","text-xl"],[1,"flex","my-3","col-md-10","justify-center","mx-auto"],[1,"mb-3","font-semibold","text-gray-700","me-auto"],[1,"fas","fa-star","text-yellow-300"],[1,"fa-solid","fa-star-half-stroke","text-yellow-300"],[1,"mb-3","font-semibold","text-gray-700","ps-2"],[1,"flex","my-3","col-md-10","mx-auto"],[1,"add-cart","capitalize","items-center","py-2","text-sm","font-medium",3,"click"],[1,"fa-solid","fa-plus"],[1,"heart","ms-auto"],[1,"fa-solid","fa-heart","fa-2x"],[1,"w-full"],[1,"w-full",3,"src"]],template:function(e,s){e&1&&d(0,H,35,8,"section"),e&2&&f(s.productDetails?0:-1)},dependencies:[F,k,P],styles:[".add-cart[_ngcontent-%COMP%]{transition:all .8s;background-color:#4fa74f;border-radius:10px;color:#fff;width:80%;text-align:center}.add-cart[_ngcontent-%COMP%]:hover{background-color:#1c721c}"]})};export{z as DetailsComponent};
