document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const href = this.getAttribute("href");

            if (!href || href === "#") {
                return;
            }

            const target = document.querySelector(href);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================================
       ONLINE VISIT
       WHATSAPP
    ========================================= */

    const whatsappNumber = "989112876264";

    const whatsappMessage =
        "سلام، برای ویزیت آنلاین مطب دکتر آنا پورایمانی پیام داده‌ام.";


    /* تمام دکمه‌هایی که مربوط به ویزیت آنلاین هستند */

    const whatsappButtons = document.querySelectorAll(
        ".booking-start, .header-btn"
    );


    whatsappButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(whatsappMessage);

            window.open(
                whatsappURL,
                "_blank"
            );

        });

    });


    /* =========================================
       SERVICE BUTTONS
    ========================================= */

    const serviceButtons =
        document.querySelectorAll(".service-card a");

    serviceButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const booking =
                document.querySelector("#booking");

            if (booking) {

                booking.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});