var btn = document.querySelector('#item-1')
var btn2 = document.querySelector('#btn2')
var targett = document.querySelector("#search")
var more_menu_btn = document.querySelector('#more_menu_btn')
var more_menuu = document.querySelector('#more-menu')
var pro_menu = document.querySelector('#profile_menu')
var pro_menu_btn = document.querySelector('#item-3')

function Show_search() {
    targett.style.transform = 'scale(1)';
    btn2.setAttribute('onclick', 'Hide_search()')
    btn.style.display = 'none'
    targett.style.display = 'flex'

}

function Hide_search() {
    btn.style.display = 'block'
    targett.style.transform = 'scale(0)';
    targett.style.display = 'none'

    btn.setAttribute('onclick', 'Show_search()')

}

function more_menu() {
    if (more_menu_btn.classList.contains('active')) {
        more_menuu.setAttribute('class', 'active')
    } else {
        more_menuu.removeAttribute('class', 'active')
    }
}
document.querySelector('#bottom-bar li').addEventListener(onclick, more_menu())