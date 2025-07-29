'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // element toggle function (kept for general use if needed)
    const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
    if (sidebarBtn && sidebar) {
        sidebarBtn.addEventListener("click", function () {
            elementToggleFunc(sidebar); // Toggles the 'active' class on the sidebar
        });
    }


    
    const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
    const modalContainer = document.querySelector("[data-modal-container]");
    const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
    const overlay = document.querySelector("[data-overlay]");

    const modalImg = modalContainer ? modalContainer.querySelector("[data-modal-img]") : null;
    const modalTitle = modalContainer ? modalContainer.querySelector("[data-modal-title]") : null;
    const modalText = modalContainer ? modalContainer.querySelector("[data-modal-text]") : null;

    const testimonialsModalFunc = function () {
        if (modalContainer && overlay) {
            modalContainer.classList.toggle("active");
            overlay.classList.toggle("active");
        }
    }

    for (let i = 0; i < testimonialsItem.length; i++) {
        testimonialsItem[i].addEventListener("click", function () {
            if (modalImg && modalTitle && modalText) {
                modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
                modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
                modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
                modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
                testimonialsModalFunc();
            }
        });
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", testimonialsModalFunc);
    }
    if (overlay) {
        overlay.addEventListener("click", testimonialsModalFunc);
    }

    // contact form variables
    const form = document.querySelector("[data-form]");
    const formInputs = document.querySelectorAll("[data-form-input]");
    const formBtn = document.querySelector("[data-form-btn]");

    if (form && formInputs.length > 0 && formBtn) {
        for (let i = 0; i < formInputs.length; i++) {
            formInputs[i].addEventListener("input", function () {
                if (form.checkValidity()) {
                    formBtn.removeAttribute("disabled");
                } else {
                    formBtn.setAttribute("disabled", "");
                }
            });
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const fullname = form.querySelector("[name='fullname']").value;
            const email = form.querySelector("[name='email']").value;
            const message = form.querySelector("[name='message']").value;
            const subject = "New Message from Portfolio Contact Form";
            const body = `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`;
            const mailtoLink = `mailto:bellerzoltanezra@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
            form.reset();
            formBtn.setAttribute("disabled", "");
        });
    }

    // page navigation variables
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    for (let i = 0; i < navigationLinks.length; i++) {
        navigationLinks[i].addEventListener("click", function () {
            const targetPage = this.getAttribute("data-nav-link");

            for (let j = 0; j < pages.length; j++) {
                if (targetPage === pages[j].dataset.page) {
                    pages[j].classList.add("active");
                    navigationLinks[i].classList.add("active");
                    window.scrollTo(0, 0);
                } else {
                    pages[j].classList.remove("active");
                    navigationLinks[j].classList.remove("active");
                }
            }

            
            navigationLinks.forEach(link => {
                if (link.getAttribute("data-nav-link") === targetPage) {
                    link.classList.add("active");
                } else {
                    link.classList.remove("active");
                }
            });


            
            if (sidebar && sidebar.classList.contains('active')) {
                elementToggleFunc(sidebar);
            }
        });
    }

    
    const githubLinkIcon = document.querySelector("ion-icon[name='logo-github']");
    const linkedinLinkIcon = document.querySelector("ion-icon[name='logo-linkedin']");

    if (githubLinkIcon) {
        githubLinkIcon.parentElement.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("#", "_blank");
        });
    }

    if (linkedinLinkIcon) {
        linkedinLinkIcon.parentElement.addEventListener("click", function (event) {
            event.preventDefault();
            window.open("#", "_blank");
        });
    }
});