var gallery = ['./assets/gallery/home-gallery-img-1.jpg','./assets/gallery/home-gallery-img-2.jpg','./assets/gallery/home-gallery-img-3.jpg','./assets/gallery/home-gallery-img-4.jpg','./assets/gallery/home-gallery-img-5.jpg','./assets/gallery/home-gallery-img-6.jpg','./assets/gallery/home-gallery-img-7.jpg','./assets/gallery/home-gallery-img-8.jpg','./assets/gallery/home-gallery-img-9.jpg','./assets/gallery/home-gallery-img-10.jpg','./assets/gallery/home-gallery-img-11.jpg','./assets/gallery/home-gallery-img-12.jpg']
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


var gallery_icon = document.getElementById('gallery');
gallery_icon.style.borderBottom = '1px solid white';

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


function gallery_container() {
  var gallery_container = document.getElementById('gallery_container') 
  var gallery_box = document.createElement('div')
  gallery_box.classList.add('gallery_box')
  gallery_container.append(gallery_box)
  gallery.forEach((item)=> {
    var photo_box = document.createElement('div')
    photo_box.classList.add('photo_box')
    gallery_box.append(photo_box)
    var photo = document.createElement('img')
    photo.src= item
    photo_box.append(photo)
  })
}
gallery_container()



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


