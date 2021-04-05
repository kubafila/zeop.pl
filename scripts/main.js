
  const arrow = document.querySelector(".arrow");
  const hamburger = document.querySelector(".hamburger");

  const menuLinks = document.querySelectorAll(".menu__link");
  const menu = document.querySelector(".menu");

  const excerpt = document.querySelector('.excerpt')
  const excerptButton = document.querySelector('.excerpt-button')

  const form = document.forms[0];
  const emailInput = document.querySelector('.newsletter__email')

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

menuLinks.forEach(link => link.addEventListener('click', toggleMenu));

excerptButton.addEventListener('click', ()=>{
  excerpt.classList.toggle('excerpt--expanded')
  if (excerpt.classList.contains('excerpt--expanded')){
    excerptButton.innerText="Pokaż mniej"
  }
  else{
    excerptButton.innerText = "Pokaż więcej"
  }
})

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  emailInput.value = "Trwają prace, zapraszamy wkrótce ;)"

})


