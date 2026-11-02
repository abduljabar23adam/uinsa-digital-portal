const translations = {
    id: {
        navTitle: "Sistem Informasi UIN Sunan Ampel",
        heroHeading: "Portal Layanan Akademik & Arsip Digital",
        heroDesc: "Sistem pengelolaan data berbasis Docker yang cepat, aman, dan efisien untuk civitas akademika UIN Sunan Ampel Surabaya.",
        actionBtn: "Simulasi Akses Data",
        statusSuccess: "Berhasil terhubung ke Server Sistem UINSA!",
        stat1Title: "Arsip Digital",
        stat2Title: "Mahasiswa Aktif",
        stat3Title: "Fakultas",
        formTitle: "Ajukan Layanan Surat / Transkrip",
        labelName: "Nama Lengkap:",
        labelService: "Jenis Layanan:",
        submitBtn: "Kirim Permohonan",
        formSuccess: (name) => `Terima kasih, ${name}! Permohonan layanan Anda telah berhasil dikirim ke sistem UINSA.`,
        feature1: "Aplikasi berjalan terisolasi dan konsisten di seluruh lingkungan server.",
        feature2: "Mendukung Bahasa Indonesia dan Bahasa Inggris secara dinamis."
    },
    en: {
        navTitle: "UIN Sunan Ampel Information System",
        heroHeading: "Academic Service & Digital Archive Portal",
        heroDesc: "A fast, secure, and efficient Docker-based data management system for UIN Sunan Ampel Surabaya academic community.",
        actionBtn: "Simulate Data Access",
        statusSuccess: "Successfully connected to UINSA System Server!",
        stat1Title: "Digital Archives",
        stat2Title: "Active Students",
        stat3Title: "Faculties",
        formTitle: "Request Certificate / Transcript",
        labelName: "Full Name:",
        labelService: "Service Type:",
        submitBtn: "Submit Request",
        formSuccess: (name) => `Thank you, ${name}! Your service request has been successfully submitted to the UINSA system.`,
        feature1: "App runs isolated and consistently across all server environments.",
        feature2: "Dynamically supports Indonesian and English language switching."
    }
};

let currentLang = 'id';

function setLanguage(lang) {
    currentLang = lang;
    document.getElementById('btn-id').classList.toggle('active', lang === 'id');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    
    document.getElementById('nav-title').textContent = translations[lang].navTitle;
    document.getElementById('hero-heading').textContent = translations[lang].heroHeading;
    document.getElementById('hero-desc').textContent = translations[lang].heroDesc;
    document.getElementById('action-btn').textContent = translations[lang].actionBtn;
    document.getElementById('stat-1-title').textContent = translations[lang].stat1Title;
    document.getElementById('stat-2-title').textContent = translations[lang].stat2Title;
    document.getElementById('stat-3-title').textContent = translations[lang].stat3Title;
    document.getElementById('form-title').textContent = translations[lang].formTitle;
    document.getElementById('label-name').textContent = translations[lang].labelName;
    document.getElementById('label-service').textContent = translations[lang].labelService;
    document.getElementById('submit-btn').textContent = translations[lang].submitBtn;
    document.getElementById('feature-1').textContent = translations[lang].feature1;
    document.getElementById('feature-2').textContent = translations[lang].feature2;
    document.getElementById('status-output').textContent = "";
    document.getElementById('form-output').textContent = "";
}

function triggerAction() {
    document.getElementById('status-output').textContent = translations[currentLang].statusSuccess;
}

function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('studentName').value;
    document.getElementById('form-output').textContent = translations[currentLang].formSuccess(name);
}