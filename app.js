// --- DYNAMIC JAVASCRIPT LOGIC FOR PREMIUM PORTFOLIO ---

// --- Multilingual i18n Translation Dictionary ---
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_contact: "Contact",
        hero_badge: "Frontend Developer",
        hero_greeting: "Hi! I am",
        hero_subtitle: "An XX-year-old self-taught web developer from Ukraine. Crafting highly aesthetic, responsive, and clean web applications.",
        btn_projects: "View My Projects",
        btn_contact: "Contact Me",
        about_title: "About Me",
        about_intro: "I am highly passionate about coding, user interface design, and dynamic animations. I began my development journey studying independently, working hard to turn ideas into interactive code.",
        about_details: "Currently, I specialize in creating modern layout architectures using HTML5, CSS3, and JavaScript, as well as scripting automation utilities in Python. I focus on visual wow-factor design like Glassmorphism, animations, and high responsiveness to deliver elite experiences.",
        stat_age: "Years Old",
        stat_focus: "Main Core",
        stat_logic: "App Logic",
        projects_title: "Showcase Projects",
        proj1_desc: "A premium financial monitoring SaaS dashboard. Features beautiful Glassmorphism, live Chart.js graphs, dynamic currency conversion APIs, and an AI-inspired savings planner widget.",
        proj2_title: "Personal Portfolio Website",
        proj2_desc: "This very website! A highly customized, futuristic portfolio specifically engineered to showcase elite coding skills, animations, and translation dictionary bindings.",
        btn_demo: "Live Demo",
        btn_current: "Currently Viewing",
        skills_title: "Technical Skills",
        contact_title: "Get In Touch",
        contact_subtitle: "If you have any simple freelance projects or custom landing page requests, click below to copy details or visit my profiles!",
        footer_signature: "Crafted with ❤️ in Ukraine. Lattyx.",
        toast_copy_success: "Copied to clipboard!",
        
        // Expanding biography translation keys
        btn_about_more: "Read More",
        about_more_p1: "I am XX years old, living in Ukraine, and I am completely obsessed with the world of IT. What started as pure curiosity quickly turned into a dedicated daily journey of self-education. Over the past year, I have focused heavily on coding, systems logic, and graphic aesthetics. I love building highly interactive websites, responsive landing pages, robust desktop automation utilities, and scripting tools.",
        about_more_p2: "In addition to frontend layouts, I create custom Telegram bot managers with administrative dashboards, script web scrapers, and develop simple game prototypes. I work with HTML5, CSS3, ES6 JavaScript, Python, C++, and Git. Everything I build is at a solid intermediate level. I am always ready to put in extra hours, research complex documentation on the fly, and dedicate 100% of my energy and focus to learn and deliver outstanding, high-value client projects!",
        about_more_p3: "My philosophy when developing is simple: pixel-perfect visual execution, smooth performance, and clean code that is easy to maintain. I don't just build basic templates; I design custom layouts from scratch, applying modern glassmorphic overlays, vibrant gradients, and responsive grids. Whether it's a financial analytics dashboard or a landing page, I ensure that it looks premium and runs beautifully on any device.",
        about_more_p4: "When it comes to automation and backend tasks, I prioritize stability and user privacy. My custom Telegram bots are built with robust exception handling and database integrations to ensure 24/7 uptime. I am always looking for new challenges that push my boundaries, and I take great pride in delivering solutions that exceed client expectations, showing that age is just a number when it comes to high-quality engineering."
    },
    ua: {
        nav_home: "Головна",
        nav_about: "Про мене",
        nav_projects: "Проєкти",
        nav_skills: "Навички",
        nav_contact: "Контакти",
        hero_badge: "Фронтенд Розробник",
        hero_greeting: "Привіт! Я",
        hero_subtitle: "XX-річний веб-розробник-самоучка з України. Створюю високоякісні, адаптивні та стильні веб-додатки.",
        btn_projects: "Мої проєкти",
        btn_contact: "Зв'язатися",
        about_title: "Про мене",
        about_intro: "Я захоплююся програмуванням, дизайном інтерфейсів та динамічними анімаціями. Почав свій шлях розробника самостійно, перетворюючи ідеї на інтерактивний код.",
        about_details: "Зараз я спеціалізуюся на створенні сучасних інтерфейсів з використанням HTML5, CSS3 та JavaScript, а також на автоматизації скриптів на Python. Особливу увагу приділяю ефектам Glassmorphism, анімаціям та повній адаптивності.",
        stat_age: "Років",
        stat_focus: "Стек верстки",
        stat_logic: "Логіка додатків",
        projects_title: "Вибрані проєкти",
        proj1_desc: "Преміальний SaaS-дашборд фінансового моніторингу. Має ефектний скляний дизайн, інтерактивні графіки Chart.js, конвертер валют та розумний AI-планувальник заощаджень.",
        proj2_title: "Особистий сайт-портфоліо",
        proj2_desc: "Цей самий сайт! Спеціально розроблений футуристичний сайт-портфоліо, покликаний продемонструвати мої навички верстки, анімації та роботи з мовними словниками.",
        btn_demo: "Демо версія",
        btn_current: "Зараз переглядаєте",
        skills_title: "Технічні навички",
        contact_title: "Зворотній зв'язок",
        contact_subtitle: "Якщо у вас є прості замовлення на фрілансі або пропозиції щодо створення лендінгів — тисніть нижче для копіювання контактів!",
        footer_signature: "Створено з ❤️ в Україні. Lattyx.",
        toast_copy_success: "Скопійовано в буфер!",
        
        // Expanding biography translation keys
        btn_about_more: "Детальніше",
        about_more_p1: "Мені XX років, я живу в Україні та повністю присвячую свій час захоплюючому світу ІТ. Те, що починалося як проста цікавість, швидко переросло в щоденне глибоке самонавчання. За останній рік я зосередився на програмуванні, логіці систем та графічній естетиці. Я обожнюю розробляти інтерактивні веб-сайти, адаптивні лендінги, системні утиліти та скрипти автоматизації.",
        about_more_p2: "Окрім верстки інтерфейсів, я створюю Telegram-ботів різної складності (включаючи ботів-менеджерів з адмін-функціями), пишу парсери даних та розробляю прототипи простих ігор. Мій стек включає HTML5, CSS3, ES6 JavaScript, Python, C++ та роботу з Git. Я роблю все це на впевненому середньому рівні, завжди готовий потіти над складними завданнями, вивчати нові технології на льоту та викладатися на всі 100%, щоб створити ідеальний продукт!",
        about_more_p3: "Моя філософія під час розробки проста: піксельно точне візуальне виконання, висока продуктивність і чистий код, який легко підтримувати. Я не просто створюю базові шаблони; я розробляю індивідуальні макети з нуля, застосовуючи сучасні ефекти матового скла (glassmorphism), яскраві градієнти та адаптивні сітки. Будь то аналітична панель чи лендінг, я гарантую, що це виглядатиме преміально і працюватиме ідеально на будь-якому пристрої.",
        about_more_p4: "Коли справа доходить до автоматизації та бекенд-завдань, я віддаю пріоритет стабільності та конфіденційності користувачів. Мої індивідуальні Telegram-боти створюються з надійною обробкою винятків та інтеграцією баз даних для забезпечення безперебійної роботи 24/7. Я завжди шукаю нові виклики, які розширюють мої межі, і дуже пишаюся тим, що пропоную рішення, які перевершують очікування клієнтів, доводячи, що вік — це лише цифра, коли йдеться про високоякісну інженерію."
    }
};

// Global translation state
let state = {
    lang: 'en'
};

// --- DOM Elements ---
const clamshellBtn = document.getElementById('clamshell-btn');
const clamshellContent = document.getElementById('clamshell-content');
const clamshellItems = document.querySelectorAll('.clamshell-item');
const clamshellCurrentFlag = document.getElementById('clamshell-current-flag');
const clamshellCurrentName = document.getElementById('clamshell-current-name');
const clamshellArrow = document.querySelector('.clamshell-arrow');
const toastEl = document.getElementById('toast');
const toastMsgEl = document.getElementById('toast-message');

const aboutMoreBtn = document.getElementById('about-more-btn');
const aboutMoreContent = document.getElementById('about-more-content');

// Translate Page Function
function translatePage() {
    const dict = translations[state.lang] || translations.en;
    
    // Localize elements marked with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            const icon = el.querySelector('i');
            if (icon) {
                el.innerHTML = '';
                el.appendChild(icon);
                el.appendChild(document.createTextNode(' ' + dict[key]));
            } else {
                el.innerText = dict[key];
            }
        }
    });

    // Update trigger flag and display text
    const flags = { en: '🇺🇸', ua: '🇺🇦' };
    if (clamshellCurrentFlag) clamshellCurrentFlag.innerText = flags[state.lang];
    if (clamshellCurrentName) clamshellCurrentName.innerText = state.lang.toUpperCase();

    // Highlight active option inside accordion
    clamshellItems.forEach(item => {
        if (item.getAttribute('data-lang') === state.lang) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Translate dynamic text on about more button depending on expanded state
    if (aboutMoreBtn && aboutMoreContent) {
        const isHidden = aboutMoreContent.classList.contains('hidden');
        const textSpan = aboutMoreBtn.querySelector('span');
        const icon = aboutMoreBtn.querySelector('i');
        if (textSpan) {
            if (isHidden) {
                textSpan.innerText = dict.btn_about_more;
                if (icon) icon.className = 'fa-solid fa-angles-down';
            } else {
                textSpan.innerText = state.lang === 'en' ? "Collapse" : "Згорнути";
                if (icon) icon.className = 'fa-solid fa-angles-up';
            }
        }
    }
}

// Handler helper for language change
function changeLanguage(langKey) {
    state.lang = langKey;
    translatePage();
}

// Toggle language clamshell on button click
if (clamshellBtn && clamshellContent) {
    clamshellBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = clamshellContent.classList.contains('open');
        if (isOpen) {
            clamshellContent.classList.remove('open');
            if (clamshellArrow) clamshellArrow.classList.remove('active');
        } else {
            clamshellContent.classList.add('open');
            if (clamshellArrow) clamshellArrow.classList.add('active');
        }
    });
}

// Click outside to collapse clamshell selector
document.addEventListener('click', () => {
    if (clamshellContent) {
        clamshellContent.classList.remove('open');
        if (clamshellArrow) clamshellArrow.classList.remove('active');
    }
});

// Click list item inside accordion
clamshellItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
        const langKey = item.getAttribute('data-lang');
        changeLanguage(langKey);
        clamshellContent.classList.remove('open');
        if (clamshellArrow) clamshellArrow.classList.remove('active');
    });
});

// --- Toast helper ---
function showToast(message) {
    if (!toastEl || !toastMsgEl) return;
    toastMsgEl.innerText = message;
    toastEl.classList.remove('hidden');
    setTimeout(() => {
        toastEl.classList.add('hidden');
    }, 2500);
}

// --- Copy to Clipboard Handler ---
const copyItems = document.querySelectorAll('[data-copy]');
copyItems.forEach(item => {
    item.addEventListener('click', () => {
        const textToCopy = item.getAttribute('data-copy');
        navigator.clipboard.writeText(textToCopy).then(() => {
            const dict = translations[state.lang] || translations.en;
            showToast(dict.toast_copy_success);
        });
    });
});

// --- Active Nav Tab Highlight on Scroll ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach(sec => {
        const sectionTop = sec.offsetTop;
        if (pageYOffset >= sectionTop - 180) {
            currentSection = sec.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// --- Interactive About More Biography Toggle ---
if (aboutMoreBtn && aboutMoreContent) {
    aboutMoreBtn.addEventListener('click', () => {
        const isHidden = aboutMoreContent.classList.contains('hidden');
        const dict = translations[state.lang] || translations.en;
        const textSpan = aboutMoreBtn.querySelector('span');
        const icon = aboutMoreBtn.querySelector('i');

        if (isHidden) {
            aboutMoreContent.classList.remove('hidden');
            aboutMoreBtn.classList.add('active');
            if (textSpan) textSpan.innerText = state.lang === 'en' ? "Collapse" : "Згорнути";
            if (icon) icon.className = 'fa-solid fa-angles-up';
        } else {
            aboutMoreContent.classList.add('hidden');
            aboutMoreBtn.classList.remove('active');
            if (textSpan) textSpan.innerText = dict.btn_about_more;
            if (icon) icon.className = 'fa-solid fa-angles-down';
        }
    });
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
    translatePage();
});
