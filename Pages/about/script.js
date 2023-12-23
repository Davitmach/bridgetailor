var shop_info = [
  {
    title: 'TAKING MEASUREMENTS',
    title2: 'Our Marketing',
    info: `Alienum phaedrum torquatos nec eu, vis detraxitssa periculiser ex, nihil expetendis in 
    mei eis an pericu la es aperiri consequat aner iuser. lorem tincidunt vix at, vele
    `,
    mail_icon: '<i class="fa-regular fa-message" color="#bc7b6f"></i>',
    mail: 'info@yoursite.com',
    phone_icon: '<i class="fa-solid fa-mobile-screen" color="#bc7b6f"></i>',
    phone: '+(123) 456 -7890',
    resume_icon: '<i class="fa-regular fa-pen-to-square" color="#bc7b6f"></i>',
    resume: 'Download Resume',


  }
]
var working_grafik = [
  {
    title: 'WORKING HOURS',
    about: `Alienum phaedrum torquatos nec eu, vis detraxit periculis exnihil expetendis in
         mei. Mei an peric ula euripidis, hinc partem ei est. Eos ei nisl graecis. vix aperiri.`,
    monday: 'Monday - Friday:',
    saturday: 'Saturday:',
    sunday: 'Sunday:',
    monday_hour: '9am - 5pm',
    saturday_hour: '9am - 1pm',
    sunday_hour: 'Closed',
  }

]
var working_grafik = [
  {
    title: 'WORKING HOURS',
    about: `Alienum phaedrum torquatos nec eu, vis detraxit periculis exnihil expetendis in
         mei. Mei an peric ula euripidis, hinc partem ei est. Eos ei nisl graecis. vix aperiri.`,
    monday: 'Monday - Friday:',
    saturday: 'Saturday:',
    sunday: 'Sunday:',
    monday_hour: '9am - 5pm',
    saturday_hour: '9am - 1pm',
    sunday_hour: 'Closed',
  }

]
var quote = [

  {
    title: 'WHAT THEY SAY',
    info: `Pericu la es aperiri consequat aner iuser. lorem tincidunt vix at, vele pertinax sensibus
     id, errore epicurei mea et. Mea facilisis urbanies. Alienum phaedrum torquatos nec eu,
      vis detraxitssa periculiser ex, nihil expetendis in mei eis an.`,
    name: 'BY DAN PARKER'
  },

  {
    title: 'WHAT THEY SAY',
    info: `Alienum phaedrum torquatos nec eu, vis detraxitssa periculiser ex, nihil expetendis in 
      mei eis an pericu la es aperiri consequat aner iuser. lorem tincidunt vix at, vele pertinax 
      sensibus id, errore epicurei mea et. Mea facilisis urbanies`,
    name: 'BY JOSH HARRISON'

  }
]
var sponsor = ['./assets/icon/about-us-client-1-h.png', './assets/icon/about-us-client-2-h.png', './assets/icon/about-us-client-3-h.png', './assets/icon/about-us-client-4-h.png', './assets/icon/about-us-client-5-h.png', './assets/icon/about-us-client-6-h.png']
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
var about_icon = document.getElementById('about');
about_icon.style.borderBottom = '1px solid white';
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


function shop_info_container() {
  var shop_info_container = document.getElementById('shop-info-container')
  var shop_info_box = document.createElement('div')
  shop_info_box.classList.add('shop_info_box')
  shop_info_container.append(shop_info_box)
  var shop_info_image_container = document.createElement('div')
  shop_info_image_container.classList.add('shop_img_container')
  shop_info_box.append(shop_info_image_container)
  var shop_image_box = document.createElement('img')
  shop_image_box.classList.add('shop_image')
  shop_image_box.src = './assets/man/about-us-img-1.jpg'
  shop_info_image_container.append(shop_image_box)
  var shop_contact_container = document.createElement('div')
  shop_contact_container.classList.add('shop_contact_container')
  shop_info_box.append(shop_contact_container)
  var shop_contact_box = document.createElement('div')
  shop_contact_box.classList.add('shop_contact_box')
  shop_contact_container.append(shop_contact_box)
  var work_hour_container = document.createElement('div')
  work_hour_container.classList.add('work_hour_container')
  shop_info_container.append(work_hour_container)
  var work_hour_box = document.createElement('div')
  work_hour_container.append(work_hour_box)
  shop_info.forEach((item) => {
    var title1_box = document.createElement('div')
    title1_box.classList.add('title1_box')
    shop_contact_box.append(title1_box)
    var title1 = document.createElement('span')
    title1.innerText = item.title2
    title1_box.append(title1)
    var title2_box = document.createElement('div')
    title2_box.classList.add('title2_box')
    shop_contact_box.append(title2_box)
    var title2 = document.createElement('h1')
    title2.innerText = item.title
    title2_box.append(title2)
    info_box = document.createElement('div')
    info_box.classList.add('info_box')
    shop_contact_box.append(info_box)
    var info = document.createElement('p')
    info.innerText = item.info
    info_box.append(info)
    var mail_box = document.createElement('div')
    mail_box.classList.add('mail_box')
    shop_contact_box.append(mail_box)
    var mail_icon_box = document.createElement('div')
    mail_icon_box.innerHTML = item.mail_icon
    mail_box.append(mail_icon_box)
    var mail = document.createElement('div')
    mail.classList.add('mail')
    mail.innerHTML = `<span>${item.mail}</span>`
    mail_box.append(mail)
    var phone_box = document.createElement('div')
    phone_box.classList.add('phone_box')
    shop_contact_box.append(phone_box)
    var phone_icon_box = document.createElement('div')
    phone_icon_box.innerHTML = item.phone_icon
    phone_box.append(phone_icon_box)
    var phone = document.createElement('div')
    phone.innerHTML = `<span>${item.phone}</span>`
    phone_box.append(phone)
    var resume_box = document.createElement('div')
    resume_box.classList.add('resume_box')
    shop_contact_box.append(resume_box)
    var resume_icon_box = document.createElement('div')
    resume_icon_box.innerHTML = item.resume_icon
    resume_box.append(resume_icon_box)
    var resume = document.createElement('div')
    resume.innerHTML = `<span>${item.resume}</span>`
    resume_box.append(resume)
    var work_hour_image_container = document.createElement('div')
    work_hour_image_container.classList.add('work_image_container')
    work_hour_container.append(work_hour_image_container)
    var work_image = document.createElement('img')
    work_image.src = './assets/man/about-us-img-2.jpg'
    work_hour_image_container.append(work_image)



  })


  working_grafik.forEach((item) => {
    var title_div = document.createElement('div')
    work_hour_box.append(title_div)
    var title = document.createElement('h1')
    title.innerText = item.title
    title.classList.add('work_title')
    title_div.append(title)
    var info_div = document.createElement('div')
    var info = document.createElement('p')
    info.innerText = item.about
    info.classList.add('work_info_txt')
    info_div.append(info)
    work_hour_box.append(info_div)
    // ЧАСЫ MONDAY FRIDAY


    var monday_box = document.createElement('div')
    monday_box.style.display = 'flex'
    monday_box.style.alignItems = 'bottom'
    monday_box.style.justifyContent = 'space-between'
    monday_box.style.width = '100%'
    work_hour_box.append(monday_box)
    var monday_friday_title_box = document.createElement('div')
    monday_box.append(monday_friday_title_box)
    var monday_friday_title = document.createElement('span')
    monday_friday_title.style.cssText = 'color:white;font-size:19px;line-height:27px;font-family:Playfair Display,sans-serif;font-style:italic'
    monday_friday_title.innerText = item.monday
    monday_friday_title_box.append(monday_friday_title)
    var monday_friday_border = document.createElement('div')
    monday_friday_border.classList.add('work_hour_border')
    monday_box.append(monday_friday_border)
    var monday_hour_title_box = document.createElement('div')
    monday_box.append(monday_hour_title_box)
    var monday_hour_title = document.createElement('span')
    monday_hour_title.style.cssText = 'color:white;font-size:19px;line-height:27px;font-family:Playfair Display,sans-serif;font-style:italic'
    monday_hour_title.innerText = item.monday_hour
    monday_hour_title_box.append(monday_hour_title)

    // ЧАСЫ SATURDAY

    var saturday_box = document.createElement('div')
    saturday_box.style.display = 'flex'
    saturday_box.style.alignItems = 'bottom'
    saturday_box.style.justifyContent = 'space-between'
    saturday_box.style.width = '100%'
    work_hour_box.append(saturday_box)
    var saturday_title_box = document.createElement('div')
    saturday_box.append(saturday_title_box)
    var saturday_title = document.createElement('span')
    saturday_title.style.cssText = 'color:white;font-size:19px;line-height:27px;font-family:Playfair Display,sans-serif;font-style:italic'
    saturday_title.innerText = item.saturday
    saturday_title_box.append(saturday_title)
    var saturday_border = document.createElement('div')
    saturday_border.classList.add('work_hour_border')
    saturday_box.append(saturday_border)
    var saturday_hour_title_box = document.createElement('div')
    saturday_box.append(saturday_hour_title_box)
    var saturday_hour_title = document.createElement('span')
    saturday_hour_title.style.cssText = 'color:white;font-size:19px;line-height:27px;font-family:Playfair Display,sans-serif;font-style:italic'
    saturday_hour_title.innerText = item.saturday_hour
    saturday_hour_title_box.append(saturday_hour_title)


    //  ЧАСЫ SUNDAY 

    var sunday_box = document.createElement('div')
    sunday_box.style.display = 'flex'
    sunday_box.style.alignItems = 'bottom'
    sunday_box.style.justifyContent = 'space-between'
    sunday_box.style.width = '100%'
    work_hour_box.append(sunday_box)
    var sunday_title_box = document.createElement('div')
    sunday_box.append(sunday_title_box)
    var sunday_title = document.createElement('span')
    sunday_title.style.cssText = 'color:white;font-size:19px;line-height:27px;font-family:Playfair Display,sans-serif;font-style:italic'
    sunday_title.innerText = item.sunday
    sunday_title_box.append(sunday_title)
    var sunday_border = document.createElement('div')
    sunday_border.classList.add('work_hour_border')
    sunday_box.append(sunday_border)
    var sunday_hour_title_box = document.createElement('div')
    sunday_box.append(sunday_hour_title_box)
    var sunday_hour_title = document.createElement('span')
    sunday_hour_title.style.cssText = 'color:white;font-size:19px;line-height:27px;font-family:Playfair Display,sans-serif;font-style:italic'
    sunday_hour_title.innerText = item.sunday_hour
    sunday_hour_title_box.append(sunday_hour_title)

  })

}
shop_info_container()



// КОНТЕЙНЕР ЦИТАТ
function Quote_Container() {
  var quote_container = document.getElementById('quote-container')
  var info_box_container = document.createElement('div')
  info_box_container.classList.add('quote_info_container')
 
  quote_container.append(info_box_container)
  var quote_info2_box = document.createElement('div')
  var quote_info1_box = document.createElement('div')
  var counter_quote = 0

  
  quote.forEach((item) => {
    counter_quote++
    if (counter_quote == 2) {
      quote_info2_box.style.animation = 'show2 5s ease-in-out infinite'
      quote_info2_box.classList.add('quote_info_box2')
      info_box_container.append(quote_info2_box)
      var title_box = document.createElement('div')
      quote_info2_box.append(title_box)
      var title = document.createElement('h1')
      title.classList.add('quote_title_text')
      title.innerText = item.title
      title_box.append(title)
      var info_box = document.createElement('div')
      quote_info2_box.append(info_box)
      var info_text = document.createElement('p')
      info_text.classList.add('quote_info_text')
      info_text.innerText = item.info
      info_box.append(info_text)
      var name_box = document.createElement('div')
      quote_info2_box.append(name_box)
      var name_text = document.createElement('span')
      name_text.classList.add('name_text')
      name_text.innerText = item.name
      name_box.append(name_text)
      info_box_container.append(quote_info2_box)
    }
    else {

      quote_info1_box.style.animation = 'show 5s ease-in-out infinite'
      quote_info1_box.classList.add('quote_info_box1')
      info_box_container.append(quote_info1_box)
      var title_box = document.createElement('div')
      quote_info1_box.append(title_box)
      var title = document.createElement('h1')
      title.classList.add('quote_title_text')
      title.innerText = item.title
      title_box.append(title)
      var info_box = document.createElement('div')
      quote_info1_box.append(info_box)
      var info_text = document.createElement('p')
      info_text.classList.add('quote_info_text')
      info_text.innerText = item.info
      info_box.append(info_text)
      var name_box = document.createElement('div')
      quote_info1_box.append(name_box)
      var name_text = document.createElement('span')
      name_text.classList.add('name_text')
      name_text.innerText = item.name
      name_box.append(name_text)
      info_box_container.append(quote_info1_box)
    }


   



  })
  var quote_btn_box = document.createElement('div')
  quote_btn_box.classList.add('quote_button_box')
  info_box_container.append(quote_btn_box)
  var left_arrow_box = document.createElement('button')
  left_arrow_box.innerHTML = '<i class="fa-solid fa-chevron-left"></i>'
  left_arrow_box.classList.add('left_arrow')
  quote_btn_box.append(left_arrow_box)
  var right_arrow_box = document.createElement('button')
  right_arrow_box.innerHTML = '<i class="fa-solid fa-chevron-right"></i>'
  right_arrow_box.classList.add('right_arrow')
  quote_btn_box.append(right_arrow_box)
  var quote_info_box_counter = 0

  right_arrow_box.onclick = () => {
    quote_info_box_counter += 1
    quote_info2_box.style.animation = ''
    quote_info1_box.style.animation = ''
    if (quote_info_box_counter % 2 !== 0) {
      quote_info1_box.style.opacity = '0'
      quote_info2_box.style.opacity = '1'
    }
    else {
      quote_info1_box.style.opacity = '1'
      quote_info2_box.style.opacity = '0'
    }

  }
  left_arrow_box.onclick = () => {
    quote_info_box_counter += 1
    quote_info1_box.style.animation = ''
    quote_info2_box.style.animation = ''
    if (quote_info_box_counter % 2 !== 0) {
      quote_info1_box.style.opacity = '1'
      quote_info2_box.style.opacity = '0'
    }
    else {
      quote_info1_box.style.opacity = '0'
      quote_info2_box.style.opacity = '1'
    }
  }

}
Quote_Container()


// sponsor container

function sponsor_container() {
  var sponsor_container = document.getElementById('sponsor_container')
  var image_container = document.createElement('div')
  image_container.classList.add('image_container')
  sponsor_container.append(image_container)
  var image_box = document.createElement('img')
  image_box.src = './assets/man/home-video-box-img.jpg'
  image_container.append(image_box)
  var sponsor_icon_container = document.createElement('div')
  sponsor_icon_container.classList.add('sponsor_icon_container')
  sponsor_container.append(sponsor_icon_container)

  sponsor.forEach((item)=> {
    var sponsor_image_box = document.createElement('div')
    sponsor_icon_container.append(sponsor_image_box)
    var sponsor_image = document.createElement('img')
    sponsor_image.src = item
    sponsor_image_box.append(sponsor_image)
  })
}
sponsor_container()


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





/* <i class="fa-solid fa-bars"></i>
<i class="fa-solid fa-xmark"></i> */