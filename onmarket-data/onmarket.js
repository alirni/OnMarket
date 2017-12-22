(function () {
  'use strict';

  if (!window.onmarket) window.onmarket = {};

  onmarket.signin = {
    username: 'admin',
    password: 'admin'
  };

  onmarket.menu = [
    {
      "name": "signin",
      "href": "signin",
      "icon": "signin",
      "title": "ورود"
    },
    {
      "name": "product",
      "href": "product",
      "icon": "product",
      "title": "محصولات"
    },
    {
      "name": "cart",
      "href": "cart",
      "icon": "cart",
      "title": "سبد خرید"
    },
    {
      "name": "game",
      "href": "game",
      "icon": "game",
      "title": "بازی"
    }
  ];

  console.log('config/config init');
})();
