const navSlide = () => {
    const burger = document.querySelector(".nav-burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active")

        navLinks.forEach( (link, index)=> {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`
            }
        })
    })
}

const toggletNavBar = () => {

    const navLinks = document.querySelectorAll(".nav-links span")
    const sections = document.querySelectorAll(".tab")
    
    sections.forEach((section) => {
        section.style.display = 'none'
    })

    sections[0].style.display = 'flex'

    navLinks.forEach(function(link, index){
        link.addEventListener("click", () => {
            sections.forEach((section) => {
                    section.style.display = 'none'
                    })
            sections[index].style.display = 'flex'

            
            navLinks.forEach(function(l, ind){
                navLinks[ind].classList.remove("navlink-active-orange")
            })
            navLinks[index].classList.toggle("navlink-active-orange")
        })
    })
}

navSlide()
toggletNavBar()
