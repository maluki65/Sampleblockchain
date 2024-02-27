let toggle = document.querySelector("#toggle-sidebar");
const nav1 = document.querySelector("#side-bar");
let main =  document.querySelector("#content");
let allSideDivider = document.querySelectorAll("#side-bar .divider");

toggle.onclick = function () {
    nav1.classList.toggle("active");
    main.classList.toggle("active");

    if(nav1.classList.contains('active')){
        allSideDivider.forEach(item=> {
            item.textContent = "-"
        })
        allDropdown.forEach(item=> {
            const a = item.parentElement.querySelector('a:first-child');
            a.classList.remove('active');
            item.classList.remove('show');
        })
    } else {
        allSideDivider.forEach(item=> {
            item.textContent = item.dataset.text;
        })
    }
}
