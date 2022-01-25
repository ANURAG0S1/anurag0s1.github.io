var side_bar = document.querySelector("#sideBar")
var side_btn = document.querySelector("#sidenav-btn")
var side_btn_navbar = document.querySelector("#nav-logo")
function sideOpen(){
side_bar.style.transform = 'translateX(0)'
side_btn.setAttribute('onclick','sideClose()')
side_btn_navbar.setAttribute('onclick','sideClose()')
}
function sideClose(){
side_bar.style.transform = 'translateX(-110%)'
side_btn.setAttribute('onclick','sideOpen()')
side_btn_navbar.setAttribute('onclick','sideOpen()')
}