document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('passwordInput');
    const errorMsg = document.getElementById('errorMsg');
    
    const loginSection = document.getElementById('loginSection');
    const lecturesSection = document.getElementById('lecturesSection');
    const videoSection = document.getElementById('videoSection');
    
    const lecture1Card = document.getElementById('lecture1Card');
    const lecture2Card = document.getElementById('lecture2Card');
    const backToLecturesBtn = document.getElementById('backToLecturesBtn');
    const videoTitle = document.getElementById('videoTitle');

    // تسجيل الدخول
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (passwordInput.value.trim() === '1234') { // كلمة السر الخاصة بك
            loginSection.classList.add('hidden');
            lecturesSection.classList.remove('hidden');
        } else {
            errorMsg.style.display = 'block';
        }
    });

    // المحاضرة الأولى
    if (lecture1Card) {
        lecture1Card.addEventListener('click', () => {
            videoTitle.textContent = "المحاضرة الأولى";
            lecturesSection.classList.add('hidden');
            videoSection.classList.remove('hidden');
        });
    }

    // المحاضرة الثانية
    if (lecture2Card) {
        lecture2Card.addEventListener('click', () => {
            videoTitle.textContent = "المحاضرة الثانية";
            lecturesSection.classList.add('hidden');
            videoSection.classList.remove('hidden');
        });
    }

    // زر العودة للمحاضرات
    if (backToLecturesBtn) {
        backToLecturesBtn.addEventListener('click', () => {
            videoSection.classList.add('hidden');
            lecturesSection.classList.remove('hidden');
        });
    }
});
