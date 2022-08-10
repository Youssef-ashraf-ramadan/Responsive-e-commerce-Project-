var menu = document.getElementById('MenuItems');


function menutoggle() {
  if (menu.style.maxHeight=="0px"){
    menu.style.maxHeight="200px"
    menu.style.background="#333"
    menu.style.display="inline"
   
   


  }else{
    menu.style.maxHeight="0px"
    menu.style.display="none"
  }
}
