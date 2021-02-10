
  const arrow = document.querySelector(".arrow");
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  const changeArrowDirection = () => {

    if (window.scrollY > window.innerHeight/4) {
      arrow.classList.add("arrow--up")
    }
    else{
      arrow.classList.remove("arrow--up")
    }

  }
  

  const toggleMenu = () =>{
    menu.classList.toggle("menu--active");
    hamburger.classList.toggle("hamburger--active")
  }

document.addEventListener('scroll', changeArrowDirection)

hamburger.addEventListener('click', toggleMenu)


