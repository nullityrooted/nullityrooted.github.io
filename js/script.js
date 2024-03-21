document.addEventListener('DOMContentLoaded', function() {
    // Toggle the side menu
    var menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Handle clicks outside the side menu to close it
    window.addEventListener('click', function(e) {
        var sidemenu = document.getElementById("sidemenu");
        if (sidemenu.contains(e.target) || menuToggle.contains(e.target)) {
            // Clicked inside menu or toggle, do nothing
        } else {
            // Clicked outside, close the menu if it's open
            if (sidemenu.style.right === "0px") {
                sidemenu.style.right = "-200px";
            }
        }
    });

    function toggleMenu() {
        var sidemenu = document.getElementById("sidemenu");
        if (sidemenu.style.right === "0px") {
            sidemenu.style.right = "-200px";
        } else {
            sidemenu.style.right = "0px";
        }
    }

    // Handle tab switching
    var tabLinks = document.querySelectorAll('.tab-links');
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            openTab(event.target.textContent.toLowerCase(), event);
        });
    });

    function openTab(tabName, event) {
        var i, tabContents, tabLinks;
        tabContents = document.getElementsByClassName("tab-contents");
        for (i = 0; i < tabContents.length; i++) {
            tabContents[i].style.display = "none";
        }
        tabLinks = document.getElementsByClassName("tab-links");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className = tabLinks[i].className.replace(" active-link", "");
        }
        document.getElementById(tabName).style.display = "block";
        event.currentTarget.className += " active-link";
    }

    // Scroll behavior for back to top button
    var wrapper = document.querySelector('.wrapper');
    wrapper.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (wrapper.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("backToTopBtn").style.display = "block";
        } else {
            document.getElementById("backToTopBtn").style.display = "none";
        }
    }

    document.getElementById("backToTopBtn").onclick = function() {
        wrapper.scrollTo({top: 0, behavior: 'smooth'});
    };
});

// Existing JavaScript file modifications
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-toggle').addEventListener('touchstart', function(event) {
        event.preventDefault();
        toggleMenu();
    });

    // Attach event listeners to links for testing
    document.querySelectorAll('#sidemenu a').forEach(function(link) {
        link.addEventListener('touchstart', function(event) {
            // Prevent the default anchor behavior
            event.preventDefault();

            // Close the menu
            document.getElementById("sidemenu").style.right = "-200px";

            // Navigate to the section
            const href = this.getAttribute("href");
            const offsetTop = document.querySelector(href).offsetTop;

            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    });
});

// Adjust the existing toggleMenu and other functions as necessary
