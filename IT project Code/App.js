// Adding active field class in navbar links on scroll//
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('.header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}

// Registration form buttons//
let signupBtn = document.getElementById("signupbtn");
let signinBtn = document.getElementById("signinbtn");
let nameField = document.getElementById("user-field");
let title = document.getElementById("title");
let password2 = document.getElementById("con-field");

signinBtn.onclick = function (){
    nameField.style.maxHeight = "0";
    password2.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disabled");
    signinBtn.classList.remove("disabled");
}

signupBtn.onclick = function (){
    nameField.style.maxHeight = "60px";
    password2.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disabled");
    signinBtn.classList.add("disabled");
}

// popup form display//
document.getElementById("btns").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.getElementById("re").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.getElementById("log").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close-btn").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})



