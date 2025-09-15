// تاريخ بداية علاقتكما (يمكنك تغيير هذا التاريخ)
const startDate = new Date('2024-06-20T00:00:00');

function updateCountdown() {
    const now = new Date();
    const difference = now - startDate;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// تحديث العداد كل ثانية
setInterval(updateCountdown, 1000);

// استدعاء الوظيفة عند تحميل الصفحة لأول مرة
updateCountdown();


// الكود الجديد للزر
document.getElementById('apologyBtn').addEventListener('click', function() {
    document.getElementById('apologyMessage').textContent = 'I Miss U';
});
