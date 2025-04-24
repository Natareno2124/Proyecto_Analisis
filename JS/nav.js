// JavaScript to handle interactive menu functionality
const menuItemDropDown = document.querySelectorAll('.menu-item-dropdown');
const menuItemStatic = document.querySelectorAll('.menu-item-static')
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menu-btn');
const sidebarBtn = document.getElementById('sidebar-btn');

sidebarBtn.addEventListener('click',()=>{
    document.body.classList.toggle('sidebar-hidden')
})


menuBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('minimize');
})



menuItemDropDown.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        const subMenu = menuItem.querySelector('.sub-menu');
        const isActive = menuItem.classList.toggle('sub-menu-toggle');
        if (subMenu) {
            if (isActive) {
                subMenu.style.height = `${subMenu.scrollHeight + 6}px`; // Ajusta la altura del submenú
            } else {
                subMenu.style.height = '0'; // Colapsa el submenú
            }
        }
        menuItemDropDown.forEach((item)=>{
            if(item !== menuItem){
                const otherSubmenu = item.querySelector('.sub-menu');
                if(otherSubmenu){
                    item.classList.remove('sub-menu-toggle');
                    otherSubmenu.style.height='0';
                }
            }
        });
    });
});

menuItemStatic.forEach((menuItem)=>{
    menuItem.addEventListener('mouseenter',()=>{
        if (!sidebar.classList.contains('minimize')) return;
        menuItemDropDown.forEach((item)=>{
                const otherSubmenu = item.querySelector('.sub-menu');
                if(otherSubmenu){
                    item.classList.remove('sub-menu-toggle');
                    otherSubmenu.style.height='0';
                }
        });
    })
})

function checkWindowsSize(){
    sidebar.classList.remove('minimize')
}

checkWindowsSize();
window.addEventListener('resize',checkWindowsSize);