var price_storage = [
  {
    title: 'BASIC PLAN',
    price: '$16/mo',
    info: `Mobile optimized
    Powerful Metrics
    Free Custom Domain
    Annual Purchase`,
  },
  {
    title: 'STANDARD PLAN',
    price: '$25/mo',
    info: `Mobile optimized
    Powerful Metrics
    Free Custom Domain
    Annual Purchase`,
  } ,
   {
    title: 'BUSINESS PLAN',
    price: '$79/mo',
    info: `Mobile optimized
    Powerful Metrics
    Free Custom Domain
    Annual Purchase`,
  },
  {
    title: 'ULTRA PLAN',
    price: '$90/mo',
    info: `Mobile optimized
    Powerful Metrics
    Free Custom Domain
    Annual Purchase`,
  }
  

]
// прокрутка сайта вверх
const scrollButton = document.getElementById("scroll_button");
scrollButton.style.display = 'none'
var scroll_button_visibling = 200
window.addEventListener('scroll', () => {
  if (window.pageYOffset > scroll_button_visibling) {
    scrollButton.style.transition = '.4s'
    scrollButton.style.display = 'flex'


  }
  else {
    scrollButton.style.transition = '.4s'
    scrollButton.style.display = 'none'

  }
})


var pricing_icon = document.getElementById('pricing');
pricing_icon.style.borderBottom = '1px solid white';

var header_scroll = 60;
var header = document.getElementById('header');
header.style.position = 'absolute';



// анимация header

window.addEventListener('scroll', () => {
  if (window.innerWidth > 768) {
    if (window.pageYOffset > header_scroll) {
      header.style.position = 'fixed';
      header.style.animation = 'header_transforming 500ms ease-in-out forwards';
      header.style.backgroundColor = 'rgba(41,41,41,1)';
      // logo.style.display = 'none';
      header.style.transition = '.4s';
    } else if (window.pageYOffset <= header_scroll) {
      header.style.animation = '';
      header.style.position = 'absolute';
      header.style.top = '0';
      // logo.style.display = 'block';
      header.style.backgroundColor = 'transparent';
    }
  }
});


function price_container() {
  var price_container = document.getElementById('price-container')
  var price_box = document.createElement('div')
  price_box.classList.add('price_box')
  price_container.append(price_box)

  price_storage.forEach((item)=> {
    var price_info_box = document.createElement('div')
    price_info_box.classList.add('price_info_box')
   
    var title_box = document.createElement('div')
    title_box.classList.add('title_box')
    price_info_box.append(title_box)
    var title = document.createElement('h1')
    title.innerText = item.title
    title_box.append(title)
    var tarif_box = document.createElement('div')
    tarif_box.classList.add('tarif_box')
    price_info_box.append(tarif_box)
    var tarif = document.createElement('span')
    tarif.innerText = item.price
    tarif_box.append(tarif)
    var info_box = document.createElement('div')
    info_box.classList.add('info_box')
    price_info_box.append(info_box)
    var info = document.createElement('p')
    info.innerText = item.info
    info_box.append(info)
    var button_box = document.createElement('div')
    button_box.classList.add('button_box')
    price_info_box.append(button_box)
    var button = document.createElement('button')
    button.innerText = 'PURCHASE'
    button_box.append(button)
    price_box.append(price_info_box)
  })
}
price_container()


var menu_box = document.querySelector('.menu-box')
menu_box.style.height = 'auto'

window.addEventListener('resize', () => {


  var header = document.getElementById('header')
  if (window.innerWidth <= 768) {

    header.style.backgroundColor = 'rgba(41,41,41,1)'
    menu_box.style.height = '0'
    function header_menu_btn() {
      var header_menu_button = document.getElementById('menu_btn')
      header_menu_button.innerHTML = '<i class="fa-solid fa-bars"></i>'
      var menu_button_counter = 0
      header_menu_button.onclick = () => {
        menu_button_counter++
        if (menu_button_counter % 2 == 0) {
          header_menu_button.innerHTML = '<i class="fa-solid fa-bars"></i>'
          menu_box.style.height = '0'
        }
        else {
          header_menu_button.innerHTML = '<i class="fa-solid fa-xmark"></i>'
          menu_box.style.height = '550px'
        }
      }
    }
    header_menu_btn()
  } else {
    menu_box.style.height = 'auto'
    header.style.background = 'transparent'
  }
})

if (window.innerWidth <= 768) {
  menu_box.style.height = '0'

  function header_menu_btn() {
    var header = document.getElementById('header')
    header.style.transition = '.4s'
    var header_menu_button = document.getElementById('menu_btn')
    header_menu_button.innerHTML = '<i class="fa-solid fa-bars"></i>'
    var menu_button_counter = 0
    header_menu_button.onclick = () => {
      menu_button_counter++
      if (menu_button_counter % 2 == 0) {
        header_menu_button.innerHTML = '<i class="fa-solid fa-bars"></i>'
        menu_box.style.height = '0'
        header.style.backgroundColor = 'rgba(41,41,41,1)'
      }
      else {
        header_menu_button.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        menu_box.style.height = '550px'
        header.style.backgroundColor = 'rgba(41,41,41,1)'
      }
    }
  }
  header_menu_btn()
}
else {
  menu_box.style.height = 'auto'
}


window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) {
    if (window.pageYOffset > header_scroll) {
      header.style.position = 'fixed';
      header.style.backgroundColor = 'rgba(41,41,41,1)';
      // logo.style.display = 'none';
      header.style.transition = '.4s';
    } else if (window.pageYOffset <= header_scroll) {
      header.style.animation = '';
      header.style.position = 'fixed';
      header.style.top = '0';
      // logo.style.display = 'block';
      header.style.backgroundColor = 'rgba(41,41,41,1)';
    }
  }
})
