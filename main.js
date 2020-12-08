const sidenav = document.getElementById('sidenav');
const menu = document.getElementById('menu');
const content = document.getElementById('content');
const X = document.getElementById('closeBtn');

menu.addEventListener('click', openNav);
X.addEventListener('click', closeNav);
//open Navbar, changing size and width
function openNav() {
    sidenav.style.width = "250px";
    content.style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    menu.style.display = "none";
    X.style.display = "inline";
}
//close Navbar, resetting 
function closeNav() {
    sidenav.style.width = "0px";
    content.style.marginLeft = "0px";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
    menu.style.display = "inline";
    X.style.display = "none";
}


//get navlinks by class, for loop trough them to add eventlistener and function
const links = document.getElementsByClassName('link');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', normal)
}
//same as closeNav
function normal() {
    sidenav.style.width = "0px";
    content.style.marginLeft = "0px";
    document.body.style.backgroundColor = "rgba(0,0,0,0)";
    menu.style.display = "inline";
    X.style.display = "none";
}