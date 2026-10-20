const menuButton = document.querySelector(".menu-button")
const navigation = document.querySelector(".nav-links")
const navigationLinks = navigation.querySelectorAll("a")

function setMenuOpen(isOpen) {
  menuButton.classList.toggle("is-open", isOpen)
  navigation.classList.toggle("is-open", isOpen)
  menuButton.setAttribute("aria-expanded", String(isOpen))
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation",
  )
  document.body.classList.toggle("menu-open", isOpen)
}

menuButton.addEventListener("click", () => {
  setMenuOpen(!navigation.classList.contains("is-open"))
})

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false))
})

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    setMenuOpen(false)
    menuButton.focus()
  }
})

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    setMenuOpen(false)
  }
})
