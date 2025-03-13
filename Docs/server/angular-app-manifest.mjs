
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/E-Commerce-2/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/E-Commerce-2/login",
    "route": "/E-Commerce-2"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3BOTIIIV.js",
      "chunk-NIOZYWYZ.js"
    ],
    "route": "/E-Commerce-2/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-33IDF7WA.js",
      "chunk-NIOZYWYZ.js"
    ],
    "route": "/E-Commerce-2/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TZSA6T4Z.js",
      "chunk-NIOZYWYZ.js"
    ],
    "route": "/E-Commerce-2/forget"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P4F3E6PP.js",
      "chunk-3I2CUNVT.js",
      "chunk-K7JNYOXB.js",
      "chunk-VTBKJ64V.js",
      "chunk-RJW4F5IF.js"
    ],
    "route": "/E-Commerce-2/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5R76BZUV.js"
    ],
    "route": "/E-Commerce-2/brands"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LWUWSOCA.js",
      "chunk-VTBKJ64V.js"
    ],
    "route": "/E-Commerce-2/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-NIVMSER7.js",
      "chunk-RJW4F5IF.js"
    ],
    "route": "/E-Commerce-2/category"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UPW3IM2E.js",
      "chunk-POJF7H73.js"
    ],
    "route": "/E-Commerce-2/allorders"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6HSEJBVD.js",
      "chunk-PNU75DGW.js",
      "chunk-VTBKJ64V.js"
    ],
    "route": "/E-Commerce-2/products"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4C5HPJJ5.js"
    ],
    "route": "/E-Commerce-2/product-details"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L5X22SP2.js",
      "chunk-3I2CUNVT.js",
      "chunk-VTBKJ64V.js"
    ],
    "route": "/E-Commerce-2/wishlist"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2CS35TKD.js",
      "chunk-POJF7H73.js",
      "chunk-NIOZYWYZ.js"
    ],
    "route": "/E-Commerce-2/checkout/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-AFSM6H7M.js",
      "chunk-PNU75DGW.js",
      "chunk-K7JNYOXB.js",
      "chunk-VTBKJ64V.js"
    ],
    "route": "/E-Commerce-2/details/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AVHEB64D.js"
    ],
    "route": "/E-Commerce-2/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4410, hash: '48864ba31b487c0806bbaaed0a61145a0968515255ebb0f4177be8b730a33a04', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1474, hash: '9c82c878260df993b29ad18f32eac90f629cfeb2be0868931e63a91fc9cd334f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'register/index.html': {size: 16735, hash: 'ecf6646843a6cd0acd3a6a6a98d2cb7d9a21666e50c8543cb6b51973bc29eb86', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'forget/index.html': {size: 16735, hash: '608b1ebb1424bec68aafc733e06cf26ea0fb759c991902fa67d2f33a47c5a289', text: () => import('./assets-chunks/forget_index_html.mjs').then(m => m.default)},
    'brands/index.html': {size: 16683, hash: 'abfa22fc2e17551e0c8c2164f0ab069b7bce126dbe3d4e25d8a526f53b7658ad', text: () => import('./assets-chunks/brands_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 16735, hash: '7e276cc51a8656f8921b2b267ec7b6a10e386ccbe277b1730ac55cff538a770a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 16735, hash: '6ab2d5a41a191f06c239fd46ca2818c037433d99169ee31ac6c22252c277e65a', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'allorders/index.html': {size: 16735, hash: 'a3e65bde3739a4aca916ecde1aeac7d9e75d435a113716de66821db482422e5d', text: () => import('./assets-chunks/allorders_index_html.mjs').then(m => m.default)},
    'category/index.html': {size: 16735, hash: '77d093c3c0fff4470d86e8925b2b9d23c9b9cb1b90f308a245d557bc3da296c2', text: () => import('./assets-chunks/category_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 16891, hash: 'fcdfb71b27b70fb89e6b7cfa77e5ce4713f79b186e2fe3ea0a69df83f9ff3ce7', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'product-details/index.html': {size: 16683, hash: '7118965a1f9f3619cc705ec23d745b8ecfbf931220e16de45d6eb6bb17adc6da', text: () => import('./assets-chunks/product-details_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 16787, hash: 'fb77ee32d191adc74bc7e1f62a7967f42a9b663826b4119b16f5c0eff03f0166', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'wishlist/index.html': {size: 16787, hash: 'ad98c91621d95f417d6dadca3f70052993b1c1ea540a32dc4b804b6ef2a7cc4d', text: () => import('./assets-chunks/wishlist_index_html.mjs').then(m => m.default)},
    'styles-EVO5Z5QT.css': {size: 209165, hash: 'GJ8hcZtGItw', text: () => import('./assets-chunks/styles-EVO5Z5QT_css.mjs').then(m => m.default)}
  },
};
