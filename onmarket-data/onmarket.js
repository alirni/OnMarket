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
      "name": "rice",
      "href": "rice",
      "icon": "rice",
      "title": "برنج"
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

  onmarket.product = {
    rice: [
      {
        name: 'احمد',
        image: 'ahmad',
        weight: 10,
        price: 60000,
        count: 100,
        description: 'برنج اعلا و درجه یک'
      },
      {
        name: 'محسن',
        image: 'mohsen',
        weight: 10,
        price: 80000,
        count: 50,
        description: 'برنج اعلا و درجه یک'
      },
    ],
    Paste: [
      {
        name: 'چین چین',
        image: 'chinchin',
        weight: 0.7,
        price: 1300,
        count: 200,
        description: 'رب ایرانی'
      },
      {
        name: 'تبرک',
        image: 'tabarok',
        weight: 0.7,
        price: 1500,
        count: 100,
        description: 'رب ایرانی'
      }
    ]
  }

  console.log('config/config init');
})();
