const btn = document.querySelector('#menu-btn')
const mobileMenu = document.querySelector('#menu')
const panels = document.querySelectorAll('.panel')
const tabs = document.querySelectorAll('.tab')
const accordionItems = document.querySelectorAll('.accordion-item')

/* Open mobile menu */
btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    btn.style.color = '#fff'
    mobileMenu.classList.toggle('flex')
    mobileMenu.classList.toggle('hidden')
})

/* Open a tab in features */
tabs.forEach(tab => tab.addEventListener('click', handleTabClick));

function handleTabClick(e) {
    // deactivate all tabs
    tabs.forEach(tab => {
        // remove class of child elements
        // tab children return a HTML collection, where x[0] is child element and x[1] is prototype
        tab.children[0].classList.remove('border-softRed', 'border-b-4', 'text-softRed')
    });
    // hide all panels
    panels.forEach(panel => panel.classList.add('hidden'));
    // activate a new tab and panel based on the target clicked
    e.target.classList.add('border-softRed', 'border-b-4', 'text-softRed')
    const dataTarget = e.target.getAttribute('data-target')
    document.querySelector('.panels')
        .getElementsByClassName(dataTarget)[0]
        .classList.remove('hidden')
}

accordionItems.forEach(item => item.addEventListener('click', () => {
    item.nextElementSibling.classList.toggle('hidden')
    item.nextElementSibling.classList.toggle('block')
}));