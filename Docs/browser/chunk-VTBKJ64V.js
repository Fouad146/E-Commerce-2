import{v as i}from"./chunk-LFFRWUCI.js";import{Q as a,V as n}from"./chunk-YM5XIUHN.js";var o=class e{constructor(t){this.httpClient=t}myToken=localStorage.getItem("userToken");addProductToCart(t){return this.httpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:t},{headers:{token:this.myToken}})}getUserCart(){return this.httpClient.get("https://ecommerce.routemisr.com/api/v1/cart",{headers:{token:this.myToken}})}removeCartItem(t){return this.httpClient.delete("https://ecommerce.routemisr.com"+`/api/v1/cart/${t}`,{headers:{token:this.myToken}})}updatCartProduct(t,r){return this.httpClient.put("https://ecommerce.routemisr.com"+`/api/v1/cart/${t}`,{count:r},{headers:{token:this.myToken}})}clearCart(){return this.httpClient.delete("https://ecommerce.routemisr.com/api/v1/cart",{headers:{token:this.myToken}})}static \u0275fac=function(r){return new(r||e)(n(i))};static \u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"})};export{o as a};
