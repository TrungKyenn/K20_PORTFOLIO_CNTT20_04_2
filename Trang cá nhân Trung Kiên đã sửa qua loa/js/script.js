// ========================================
// PORTFOLIO - VŨ TRUNG KIÊN
// JAVASCRIPT
// ========================================


// ========================================
// 1. DARK MODE
// ========================================

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (themeToggle) {
        themeToggle.textContent = "☀️";
    }
} else {
    if (themeToggle) {
        themeToggle.textContent = "🌙";
    }
}

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "dark");

        } else {

            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "light");

        }

    });

}


// ========================================
// 2. HIỆU ỨNG XUẤT HIỆN KHI CUỘN
// ========================================

const revealElements = document.querySelectorAll(
    "section, .skill-card, .project-card, .contact-card"
);

function revealOnScroll() {

    revealElements.forEach(function (element) {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ========================================
// 3. NÚT BACK TO TOP
// ========================================

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";
backToTop.className = "back-to-top";
backToTop.title = "Về đầu trang";

document.body.appendChild(backToTop);

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ========================================
// 4. HIỆU ỨNG CHỮ ĐANG GÕ
// ========================================

const typingElement = document.querySelector(".typing");

if (typingElement) {

    const texts = [
        "Sinh viên Công nghệ Thông tin",
        "Lập trình viên tương lai",
        "Web Developer",
        "Người yêu thích công nghệ"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typingEffect() {

        const currentText = texts[textIndex];

        if (!deleting) {

            typingElement.textContent =
                currentText.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentText.length) {

                deleting = true;

                setTimeout(typingEffect, 1500);
                return;
            }

        } else {

            typingElement.textContent =
                currentText.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                textIndex++;

                if (textIndex >= texts.length) {
                    textIndex = 0;
                }

            }

        }

        setTimeout(
            typingEffect,
            deleting ? 50 : 100
        );
    }

    typingEffect();
}


// ========================================
// 5. MENU MOBILE
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", function () {

        nav.classList.toggle("active");

    });

}


// ========================================
// 6. TỰ ĐỘNG ĐÓNG MENU SAU KHI BẤM LINK
// ========================================

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (nav) {
            nav.classList.remove("active");
        }

    });

});


// ========================================
// 7. HIỆU ỨNG KHI TRANG ĐƯỢC TẢI
// ========================================

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});