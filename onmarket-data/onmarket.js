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
      "href": "startgame",
      "icon": "game",
      "title": "بازی"
    }
  ];

  onmarket.cart = [],

  onmarket.product = [
    {
      productId: 1,
      name: 'برنج آوازه',
      image: 'avaze',
      weight: 10,
      price: 60000,
      count: 100,
      description: 'برنج اعلا و درجه یک'
    },
    {
      productId: 2,
      name: 'برنج محسن',
      image: 'rice-mohsen',
      weight: 10,
      price: 80000,
      count: 50,
      description: 'برنج اعلا و درجه یک'
    },
    {
      productId: 3,
      name: 'برنج مژده',
      image: 'mozhdeh',
      weight: 10,
      price: 80000,
      count: 50,
      description: 'برنج اعلا و درجه یک'
    },
    {
      productId: 4,
      name: 'برنج طبیعت',
      image: 'rice-tabiat',
      weight: 10,
      price: 80000,
      count: 50,
      description: 'برنج اعلا و درجه یک'
    },
    {
      productId: 5,
      name: 'برنج هایلی',
      image: 'haily',
      weight: 10,
      price: 80000,
      count: 50,
      description: 'برنج اعلا و درجه یک'
    },
    {
      productId: 6,
      name: 'برنج کاکا',
      image: 'kaka',
      weight: 10,
      price: 80000,
      count: 50,
      description: 'برنج اعلا و درجه یک'
    },
    {
      productId: 7,
      name: 'برنج کلات',
      image: 'kalat',
      weight: 10,
      price: 80000,
      count: 50,
      description: 'برنج اعلا و درجه یک'
    },
    {
      productId: 8,
      name: 'برنج ارکیده',
      image: 'orkide',
      weight: 10,
      price: 80000,
      count: 50,
      description: 'برنج اعلا و درجه یک'
    },
    {
      productId: 9,
      name: 'برنج پردیس',
      image: 'pardis',
      weight: 10,
      price: 80000,
      count: 50,
      description: 'برنج اعلا و درجه یک'
    },
    {
      productId: 10,
      name: 'برنج ذبیح',
      image: 'zabih',
      weight: 10,
      price: 80000,
      count: 50,
      description: 'برنج اعلا و درجه یک'
    },
    {
      productId: 11,
      name: 'برنج ارکیده',
      image: 'orkide',
      weight: 10,
      price: 80000,
      count: 50,
      description: 'برنج اعلا و درجه یک'
    },
    {
      productId: 12,
      name: 'برنج ارکیده',
      image: 'orkide',
      weight: 10,
      price: 80000,
      count: 50,
      description: 'برنج اعلا و درجه یک'
    },
    {
      productId: 13,
      name: 'طبیعت',
      image: 'tabiat',
      weight: 0.7,
      price: 1300,
      count: 200,
      description: 'رب ایرانی'
    },
    {
      productId: 14,
      name: 'چین چین',
      image: 'chinchin',
      weight: 0.7,
      price: 1300,
      count: 200,
      description: 'رب ایرانی'
    },
    {
      productId: 15,
      name: 'ورامین',
      image: 'varamin',
      weight: 0.7,
      price: 1500,
      count: 100,
      description: 'رب ایرانی'
    },
    {
      productId: 16,
      name: 'شاداب',
      image: 'shadab',
      weight: 0.7,
      price: 1300,
      count: 200,
      description: 'رب ایرانی'
    },
    {
      productId: 17,
      name: 'رعنا',
      image: 'rana',
      weight: 0.7,
      price: 1300,
      count: 200,
      description: 'رب ایرانی'
    },
    {
      productId: 18,
      name: 'محسن',
      image: 'mohsen',
      weight: 0.7,
      price: 1800,
      count: 100,
      description: 'رب ایرانی'
    },
    {
      productId: 19,
      name: 'فامیلا',
      image: 'famila',
      weight: 0.7,
      price: 1300,
      count: 200,
      description: 'رب ایرانی'
    },
    {
      productId: 20,
      name: 'دلپذیر',
      image: 'delpazir',
      weight: 0.7,
      price: 1600,
      count: 200,
      description: 'رب ایرانی'
    },
    {
      productId: 21,
      name: 'دلند',
      image: 'daland',
      weight: 0.7,
      price: 1600,
      count: 100,
      description: 'رب ارگانیک'
    },
    {
      productId: 22,
      name: 'طبیعت',
      image: 'tabiat',
      weight: 0.7,
      price: 1300,
      count: 200,
      description: 'رب ایرانی'
    },
    {
      productId: 23,
      name: 'چین چین',
      image: 'chinchin',
      weight: 0.7,
      price: 1400,
      count: 200,
      description: 'رب ایرانی'
    },
    {
      productId: 24,
      name: 'تبرک',
      image: 'tabarok',
      weight: 0.7,
      price: 1500,
      count: 100,
      description: 'رب ایرانی'
    }
  ];

  console.log('config/config init');
})();
