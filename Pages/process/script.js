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



// появление мужчины
var process_icon = document.getElementById('process');
process_icon.style.borderBottom = '1px solid white';
var man_banner_image = document.getElementById('man-image');
man_banner_image.addEventListener('animationend', () => {
  man_banner_image.style.animation = 'man_visibling_scroll 12s linear forwards';
});
var header_scroll = 60;
var header = document.getElementById('header');
header.style.position = 'absolute';
var logo = document.getElementById('logo');


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


var Row1 = [
  {
    photo: [
      {
        img: './assets/photos/process-img-1.jpg'
      }
    ],
    title1: 'Our Marketing',
    title2: 'TAKING MEASUREMENTS',
    info: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. bibendum auctor, nisi elit consequat ipsum.',

  }
]
var Row2 = [
  {
    title1: 'Our Marketing',
    title2: 'CHOSING THE FABRIC',
    info: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. bibendum auctor, nisi elit consequat ipsum. Duis sed odio sit amet nibh vulputate cursus Morbi accumsan ipsum.',
    photo: [
      {
        img: './assets/photos/process-img-2.jpg'
      }
    ]
  }
]
var Row3 = [
  {
    photo: [
      {
        img: './assets/photos/process-img-3.jpg'
      }
    ],
    title1: 'Our Marketing',
    title2: 'YOUR CUSTOM SUIT',
    info: 'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis. bibendum auctor, nisi elit consequat ipsum'
  }
]


function process() {
  var process_container = document.getElementById('process-container')
  var row1 = document.createElement('div')
  row1.classList.add('row1')
  process_container.append(row1)


  var row2 = document.createElement('div')
  row2.classList.add('row2')
  process_container.append(row2)
  var row3 = document.createElement('div')
  row3.classList.add('row3')
  process_container.append(row3)

  var border_container = document.createElement('div')
  border_container.classList.add('border_container')
  border_container.style.height = '0'
  process_container.append(border_container)

  var circle1_box = document.createElement('div')
  circle1_box.classList.add('circle1_box')
  circle1_box.style.transitionDelay = '1s'
  circle1_box.style.opacity = '0'
  border_container.append(circle1_box)

  var circle2_box = document.createElement('div')
  circle2_box.classList.add('circle2_box')
  circle2_box.style.transitionDelay = '1s'
  circle2_box.style.opacity = '0'
  border_container.append(circle2_box)

  var circle3_box = document.createElement('div')
  circle3_box.classList.add('circle3_box')
  circle3_box.style.transitionDelay = '1s'
  circle3_box.style.opacity = '0'
  border_container.append(circle3_box)


  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      border_container.style.height = '85%'
      circle1_box.style.opacity = '1'
      circle2_box.style.opacity = '1'
      circle3_box.style.opacity = '1'
    }
  })

  Row1.forEach((item) => {
    item.photo.forEach((item) => {
      var image_container = document.createElement('div')
      image_container.classList.add('image_container')
      row1.append(image_container)
      var image_box = document.createElement('img')
      image_box.style.opacity = '0'
      image_box.src = item.img
      image_container.append(image_box)

      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
          image_box.style.animation = 'img_scale .7s 1s ease forwards'
        }
      })

    })
    var row1_info_box = document.createElement('div')
    row1_info_box.classList.add('row1_info_box')
    row1_info_box.style.transition = '.6s'
    row1_info_box.style.transform = 'translateY(100px)'
    row1.append(row1_info_box)

    var title1_box = document.createElement('div')
    title1_box.classList.add('title1_box')
    title1_box.style.transition = '.6s'
    title1_box.style.transitionDelay = '1s'

    title1_box.style.opacity = '0'
    row1_info_box.append(title1_box)
    var title1 = document.createElement('span')
    title1.innerText = item.title1
    title1_box.append(title1)


    var title2_box = document.createElement('div')
    title2_box.classList.add('title2_box')
    row1_info_box.append(title2_box)
    var title2 = document.createElement('h1')
    title2.innerText = item.title2
    title2_box.append(title2)

    var info_box = document.createElement('div')
    info_box.classList.add('info_box')
    info_box.style.transition = '.6s'
    info_box.style.transitionDelay = '1s'
    info_box.style.opacity = '0'
    row1_info_box.append(info_box)
    var info = document.createElement('p')
    info.innerText = item.info
    info_box.append(info)

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        row1_info_box.style.transform = 'translateY(0)'
        title1_box.style.opacity = '1'
        info_box.style.opacity = '1'
      }
    })
  })


  Row2.forEach((item) => {
    item.photo.forEach((item) => {
      var image_container = document.createElement('div')
      image_container.classList.add('image_container')
      row2.append(image_container)
      var image_box = document.createElement('img')
      image_box.style.opacity = '0'
      image_box.src = item.img
      image_container.append(image_box)
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
          image_box.style.animation = 'img_scale .7s 1s ease forwards'
        }
      })

    })


    var row2_info_box = document.createElement('div')
    row2_info_box.classList.add('row2_info_box')
    row2_info_box.style.transition = '.6s'
    row2_info_box.style.transform = 'translateY(100px)'
    row2.append(row2_info_box)

    var title1_box = document.createElement('div')
    title1_box.classList.add('title1_box')
    title1_box.style.transition = '.6s'
    title1_box.style.transitionDelay = '1s'

    title1_box.style.opacity = '0'
    row2_info_box.append(title1_box)
    var title1 = document.createElement('span')
    title1.innerText = item.title1
    title1_box.append(title1)


    var title2_box = document.createElement('div')
    title2_box.classList.add('title2_box')
    row2_info_box.append(title2_box)
    var title2 = document.createElement('h1')
    title2.innerText = item.title2
    title2_box.append(title2)

    var info_box = document.createElement('div')
    info_box.classList.add('info_box')
    info_box.style.transition = '.6s'
    info_box.style.transitionDelay = '1s'
    info_box.style.opacity = '0'
    row2_info_box.append(info_box)
    var info = document.createElement('p')
    info.innerText = item.info
    info_box.append(info)

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        row2_info_box.style.transform = 'translateY(0)'
        title1_box.style.opacity = '1'
        info_box.style.opacity = '1'
      }
    })
  })

  Row3.forEach((item) => {
    item.photo.forEach((item) => {
      var image_container = document.createElement('div')
      image_container.classList.add('image_container')
      row3.append(image_container)
      var image_box = document.createElement('img')
      image_box.style.opacity = '0'
      image_box.src = item.img
      image_container.append(image_box)
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
          image_box.style.animation = 'img_scale .7s 1s ease forwards'
        }
      })

    })


    var row3_info_box = document.createElement('div')
    row3_info_box.classList.add('row3_info_box')
    row3_info_box.style.transition = '.6s'
    row3_info_box.style.transform = 'translateY(100px)'
    row3.append(row3_info_box)

    var title1_box = document.createElement('div')
    title1_box.classList.add('title1_box')
    title1_box.style.transition = '.6s'
    title1_box.style.transitionDelay = '1s'

    title1_box.style.opacity = '0'
    row3_info_box.append(title1_box)
    var title1 = document.createElement('span')
    title1.innerText = item.title1
    title1_box.append(title1)


    var title2_box = document.createElement('div')
    title2_box.classList.add('title2_box')
    row3_info_box.append(title2_box)
    var title2 = document.createElement('h1')
    title2.innerText = item.title2
    title2_box.append(title2)

    var info_box = document.createElement('div')
    info_box.classList.add('info_box')
    info_box.style.transition = '.6s'
    info_box.style.transitionDelay = '1s'
    info_box.style.opacity = '0'
    row3_info_box.append(info_box)
    var info = document.createElement('p')
    info.innerText = item.info
    info_box.append(info)

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        row3_info_box.style.transform = 'translateY(0)'
        title1_box.style.opacity = '1'
        info_box.style.opacity = '1'
      }
    })
  })



}
process()
