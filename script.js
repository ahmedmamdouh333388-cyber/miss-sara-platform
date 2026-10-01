document.addEventListener("DOMContentLoaded", () => {
    // --- تفعيل سحب وتحريك زر المساعدة العائم ---
    const dragItem = document.getElementById("draggableHelpBtn");
    let active = false;
    let currentX, currentY, initialX, initialY;
    let xOffset = 0, yOffset = 0;

    // أحداث الماوس واللمس
    dragItem.addEventListener("touchstart", dragStart, false);
    dragItem.addEventListener("touchend", dragEnd, false);
    dragItem.addEventListener("touchmove", drag, false);

    dragItem.addEventListener("mousedown", dragStart, false);
    document.addEventListener("mouseup", dragEnd, false);
    document.addEventListener("mousemove", drag, false);

    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if (e.target === dragItem || dragItem.contains(e.target)) {
            active = true;
        }
    }

    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        active = false;
    }

    function drag(e) {
        if (active) {
            e.preventDefault();

            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, dragItem);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }

    // --- ربط أزرار الواتساب برابط المساعدة ---
    const whatsappLinks = document.querySelectorAll('.whatsapp-btn');
    whatsappLinks.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // قم بتغيير رقم الواتساب إلى رقمك الخاص
            window.open('https://wa.me/201000000000', '_blank');
        });
    });

    // --- المنطق الأساسي للتنقل بين الصفحات ---
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('passwordInput');
    const errorMsg = document.getElementById('errorMsg');

    const loginSection = document.getElementById('loginSection');
    const lecturesSection = document.getElementById('lecturesSection');
    const videoSection = document.getElementById('videoSection');

    const lecture1Card = document.getElementById('lecture1Card');
    const backToLecturesBtn = document.getElementById('backToLecturesBtn');
    const lectureVideo = document.getElementById('lectureVideo');
    const fullscreenBtn = document.getElementById('fullscreenBtn');

    // تسجيل الدخول
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // كلمة السر الافتراضية
        if (passwordInput.value === '1234') { 
            errorMsg.style.display = 'none';
            loginSection.classList.add('hidden');
            lecturesSection.classList.remove('hidden');
        } else {
            errorMsg.style.display = 'block';
        }
    });

    // فتح الفيديو
    lecture1Card.addEventListener('click', () => {
        lecturesSection.classList.add('hidden');
        videoSection.classList.remove('hidden');
        lectureVideo.play();
    });

    // العودة للمحاضرات
    backToLecturesBtn.addEventListener('click', () => {
        lectureVideo.pause();
        videoSection.classList.add('hidden');
        lecturesSection.classList.remove('hidden');
    });

    // ملء الشاشة
    fullscreenBtn.addEventListener('click', () => {
        if (lectureVideo.requestFullscreen) {
            lectureVideo.requestFullscreen();
        } else if (lectureVideo.webkitRequestFullscreen) {
            lectureVideo.webkitRequestFullscreen();
        }
    });
});
