//querySelectorAll in toggle Buttons
//Loop through nodelist (forEach)
//addEventListener
//toggle active class on parent node

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})