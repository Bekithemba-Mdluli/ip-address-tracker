const menu = document.querySelector('.header__menu');
// const val = document.getElementById('val');
const imgg = document.querySelector('.imgg')
const mobile = document.querySelector('.header-mobile')


// const drop = document.querySelector('.dropdown-btn');
const b = document.getElementById('btn')
const dropMenu = document.querySelector('.dropdown-menu')
const dropMenu2 = document.querySelector('.dropdown2-menu')

const dropMenuItems = document.querySelector('.dropdown-menu__items')
const dropMenuItems2 = document.querySelector('.dropdown2-menu__items')

// const open = () => {
//     console.log("Open")
// }

var isOpen = false
var isOpenn = false


function open() {
    // console.log("Open")
    mobile.style.width = "65%";
    // alert("HEY")
    console.log('HELLO')
}

function close() {
    mobile.style.width = "0%";
}



function openDrop() {

    isOpen = !isOpen

    if (isOpen) {
        dropMenu.style.padding = "25px"
        dropMenu.style.height = "unset"
        dropMenuItems.style.visibility = "visible"
    } else {
        dropMenu.style.padding = "0"
        dropMenu.style.height = "0"
        dropMenuItems.style.visibility = "hidden"
    }


}

function openDrop2() {
    // console.log("Working")
    isOpenn = !isOpenn
    console.log(isOpenn)

    if (isOpenn) {
        dropMenu2.style.padding = "25px"
        dropMenu2.style.height = "unset"
        dropMenuItems2.style.visibility = "visible"
    } else {
        dropMenu2.style.padding = "0"
        dropMenu2.style.height = "0"
        dropMenuItems2.style.visibility = "hidden"
    }


}

imgg.addEventListener("click", close);
menu.addEventListener("click", open);
// drop.addEventListener("click", openDrop)
// b.addEventListener("click", openDrop)