function initMobileNav() {
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

function handleURLChange() {
    const navLinks = document.querySelectorAll(".nav-links a")

    for (let link of navLinks) {        
        console.log(link.href)
        const hashIndex = link.href.indexOf('#')
        const hash = link.href.substring(hashIndex)
        console.log(hash)

        link.classList.remove("navlink-active-orange")
        if (hash == window.location.hash) {
            link.classList.toggle("navlink-active-orange")
        }
    }
}

function main() {
    window.onhashchange = handleURLChange
    initMobileNav()
}

main()

