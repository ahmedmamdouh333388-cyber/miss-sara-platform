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
    const driveFrame = document.getElementById('driveFrame');

    // روابط الفيديوهات المباشرة من Google Drive
    const lecture1Url = "https://drive.google.com/file/d/1TB75jnnymQN14oLm-k5eXqodXpaw8058/preview";
    const lecture2Url = "https://drive.google.com/file/d/1TB75jnnymQN14oLm-k5eXqodXpaw8058/preview";

    // تسجيل الدخول
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (passwordInput.value.trim() === '1234') { // كلمة السر
            loginSection.classList.add('hidden');
            lecturesSection.classList.remove('hidden');
            errorMsg.style.display = 'none';
        } else {
            errorMsg.style.display = 'block';
        }
    });

    // فتح المحاضرة الأولى
    if (lecture1Card) {
        lecture1Card.addEventListener('click', () => {
            videoTitle.textContent = "المحاضرة الأولى";
            if (driveFrame) driveFrame.src = lecture1Url;
            lecturesSection.classList.add('hidden');
            videoSection.classList.remove('hidden');
        });
    }

    // فتح المحاضرة الثانية
    if (lecture2Card) {
        lecture2Card.addEventListener('click', () => {
            videoTitle.textContent = "المحاضرة الثانية";
            if (driveFrame) driveFrame.src = lecture2Url;
            lecturesSection.classList.add('hidden');
            videoSection.classList.remove('hidden');
        });
    }

    // زر العودة للمحاضرات
    if (backToLecturesBtn) {
        backToLecturesBtn.addEventListener('click', () => {
            videoSection.classList.add('hidden');
            lecturesSection.classList.remove('hidden');
            // إيقاف الفيديو عند الخروج
            if (driveFrame) driveFrame.src = "";
        });
    }
});
