const menuIcon = document.getElementById('menu-icon')
const sidebar = document.querySelector('.sidebar')
const hideItems = document.querySelectorAll('.hide')

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('open')
    hideItems.forEach(function (item) {
        item.classList.toggle('hide')
    })
})