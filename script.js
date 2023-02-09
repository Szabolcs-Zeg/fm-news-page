document.getElementById("hamburger").addEventListener("click", menusw)

function menusw(){
   
    
    if (document.getElementById("mainmenu").classList.contains("opened") )
      {
        document.getElementById("mainmenu").classList.remove("opened")
        document.getElementById("hamburger").classList.remove("opened")
      }
      else
      {
        document.getElementById("mainmenu").classList.add("opened")
        document.getElementById("hamburger").classList.add("opened")
      }

}