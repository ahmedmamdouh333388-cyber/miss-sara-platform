document.addEventListener('DOMContentLoaded', () => {
    const CORRECT_PASSWORD = "2468";
    const PHONE_NUMBER = "201225428692";
    const WHATSAPP_MESSAGE = encodeURIComponent("السلام عليكم 👋🏻\nكلمه السر تبع منصه مس ساره 🤍");

    const loginSection = document.getElementById('loginSection');
    const lecturesSection = document.getElementById('lecturesSection');
    const videoSection = document.getElementById('videoSection');
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('passwordInput');
    const errorMsg = document.getElementById('errorMsg');
    const lecture1Card = document.getElementById('lecture1Card');
    const backToLecturesBtn = document.getElementById('backToLecturesBtn');
    const lectureVideo = document.getElementById('lectureVideo');
    const fullscreenBtn = document.getElementById('fullscreenBtn');

    // رابط الواتساب
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${WHATSAPP_MESSAGE}`;
    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.href = whatsappUrl;
        btn.target = "_blank";
    });

    // تسجيل الدخول
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (passwordInput.value.trim() === CORRECT_PASSWORD) {
            errorMsg.style.display = 'none';
            loginSection.classList.add('hidden');
            lecturesSection.classList.remove('hidden');
        } else {
            errorMsg.style.display = 'block';
        }
    });

    // فتح المحاضرة
    lecture1Card.addEventListener('click', () => {
        lecturesSection.classList.add('hidden');
        videoSection.classList.remove('hidden');
        lectureVideo.play().catch(e => console.log(e));
    });

    // العودة
    backToLecturesBtn.addEventListener('click', () => {
        lectureVideo.pause();
        videoSection.classList.add('hidden');
        lecturesSection.classList.remove('hidden');
    });

    // تشغيل الفيديو ملء الشاشة وتدويره
    fullscreenBtn.addEventListener('click', () => {
        if (lectureVideo.requestFullscreen) {
            lectureVideo.requestFullscreen();
        } else if (lectureVideo.webkitRequestFullscreen) {
            lectureVideo.webkitRequestFullscreen();
        } else if (lectureVideo.msRequestFullscreen) {
            lectureVideo.msRequestFullscreen();
        }

        if (screen.orientation && screen.orientation.lock) {
            screen.orientation.lock('landscape').catch(() => {});
        }
    });
});
