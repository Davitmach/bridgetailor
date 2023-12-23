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


var contact_icon = document.getElementById('contact');
contact_icon.style.borderBottom = '1px solid white';

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




var communication_info = [
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

function communication_container() {
  // контейнер который в html
  var communication_container = document.getElementById('communication-container')




  // регистрационный контейнер
  var communication_registration_container = document.createElement('div')
  communication_registration_container.classList.add('communication_registration_container')
  communication_container.append(communication_registration_container)

  // регистрационный бокс
  var communication_registration_box = document.createElement('div')
  communication_registration_box.classList.add('communication_registration_box')
  communication_registration_container.append(communication_registration_box)

  // информационный бокс 

  var communication_info_box = document.createElement('div')
  communication_info_box.classList.add('communication_info_box')
  communication_registration_container.append(communication_info_box)



  var name_input_box = document.createElement('div')
  name_input_box.classList.add('name_input_box')
  communication_registration_box.append(name_input_box)
  var name_input = document.createElement('input')
  name_input.placeholder = 'Name'
  name_input.type = 'text'
  name_input_box.append(name_input)
  var name_error_box = document.createElement('div')

  name_error_box.classList.add('name_error')
  communication_registration_box.append(name_error_box)
  var name_error = document.createElement('span')
  name_error.innerText = 'The field is required.'
  name_error.style.display = 'none'

  name_error_box.append(name_error)
  var email_input_box = document.createElement('div')
  email_input_box.classList.add('email_input_box')
  communication_registration_box.append(email_input_box)
  var email_input = document.createElement('input')
  email_input.type = 'email'
  email_input.placeholder = 'Email'
  email_input_box.append(email_input)

  var email_error_box = document.createElement('div')
  email_error_box.classList.add('email_error')
  communication_registration_box.append(email_error_box)
  var email_error = document.createElement('span')
  email_error_box.append(email_error)

  var text_box = document.createElement('div')
  text_box.classList.add('text_box')
  communication_registration_box.append(text_box)
  var text = document.createElement('textarea')
  text.placeholder = 'Message'
  text_box.append(text)
  var button_box = document.createElement('div')
  button_box.classList.add('button_box')
  communication_registration_box.append(button_box)
  var button = document.createElement('button')
  button.innerText = 'SEND US A MESSAGE'
  button_box.append(button)
  var validation_box_error = document.createElement('div')
  validation_box_error.innerHTML = '<div><i class="fa-solid fa-exclamation"></i></div><div><p>ONE OR MORE FIELDS HAVE AN ERROR. PLEASE CHECK AND TRY AGAIN.</p></div>'
  validation_box_error.classList.add('validation_box_error')
  communication_registration_box.append(validation_box_error)


  var validation_box_true = document.createElement('div')
  validation_box_true.innerHTML = '<div><i class="fa-regular fa-thumbs-up"></i></div><div><p>THANK YOU FOR YOUR MESSAGE. IT HAS BEEN SENT.</p></div>'
  validation_box_true.classList.add('validation_box_true')
  communication_registration_box.append(validation_box_true)


  button.onclick = () => {
    var name_input_value = name_input.value
    var mail_input_value = email_input.value
    var name_valid = false
    var mail_valid = false
    if (!name_input_value) {
      name_error.style.display = 'block'
      validation_box_error.style.display = 'block'
      validation_box_error.style.display = 'flex'
      validation_box_true.style.alignItems = 'start'
      validation_box_error.style.justifyContent = 'center'
    }
    else if (!/^[a-zA-Z]+$/.test(name_input_value)) {
      name_error.style.display = 'block'
      validation_box_error.style.display = 'flex'
      validation_box_true.style.alignItems = 'start'
      validation_box_error.style.justifyContent = 'center'
    }
    else {
      name_error.style.display = 'none'
      name_valid = true
    }
    if (!mail_input_value) {
      email_error.innerText = 'The field is required.'
      validation_box_error.style.display = 'block'
      validation_box_error.style.display = 'flex'
      validation_box_true.style.alignItems = 'start'
      validation_box_error.style.justifyContent = 'center'
    }
    else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail_input_value)) {
      email_error.innerText = 'The field is required.'
      validation_box_error.style.display = 'block'
      validation_box_error.style.display = 'flex'
      validation_box_true.style.alignItems = 'start'
      validation_box_error.style.justifyContent = 'center'
    }
    else {
      email_error.innerText = ''
      mail_valid = true
    }

    if (name_valid == true && mail_valid == true) {
      validation_box_error.style.display = 'none'
      validation_box_true.style.display = 'block'
      validation_box_true.style.display = 'flex'
      validation_box_true.style.alignItems = 'start'
      validation_box_true.style.justifyContent = 'center'
    }
  }
  communication_info.forEach((item) => {
    var title_box = document.createElement('div')
    title_box.classList.add('title_box')
    communication_info_box.append(title_box)
    var title = document.createElement('h1')
    title.innerText = item.title
    title_box.append(title)
    info_box = document.createElement('div')
    info_box.classList.add('info_box')
    communication_info_box.append(info_box)
    var info = document.createElement('p')
    info.innerText = item.info
    info_box.append(info)
    var mail_box = document.createElement('div')
    mail_box.classList.add('mail_box')
    communication_info_box.append(mail_box)
    var mail_icon_box = document.createElement('div')
    mail_icon_box.innerHTML = item.mail_icon
    mail_box.append(mail_icon_box)
    var mail = document.createElement('div')
    mail.classList.add('mail')
    mail.innerHTML = `<span>${item.mail}</span>`
    mail_box.append(mail)
    var phone_box = document.createElement('div')
    phone_box.classList.add('phone_box')
    communication_info_box.append(phone_box)
    var phone_icon_box = document.createElement('div')
    phone_icon_box.innerHTML = item.phone_icon
    phone_box.append(phone_icon_box)
    var phone = document.createElement('div')
    phone.innerHTML = `<span>${item.phone}</span>`
    phone_box.append(phone)
    var resume_box = document.createElement('div')
    resume_box.classList.add('resume_box')
    communication_info_box.append(resume_box)
    var resume_icon_box = document.createElement('div')
    resume_icon_box.innerHTML = item.resume_icon
    resume_box.append(resume_icon_box)
    var resume = document.createElement('div')
    resume.innerHTML = `<span>${item.resume}</span>`
    resume_box.append(resume)
  })


}
communication_container()



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
