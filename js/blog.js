// dark mode toggle
const themeToggle = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia(('prefers-color-scheme:dark'));

// system preference

const currentTheme = localStorage.getItem('theme') ||
(prefersDarkScheme.matches ? 'dark' : 'light');

document.documentElement.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
});

// tag filter

function initTagFilter() {
    const tagButtons = document.querySelectorAll('.tags-filter .tag');
    const posts = document.querySelectorAll('.post-card');

    tagButtons.forEach(btn => btn.classList.remove('active'));
    tagButtons.classList.add('active');

    posts.forEach(posts => {
        const postTags = post.dataset.tags.split(',');
        post.style.display = 
            tag === 'all' || postTags.include(tag) ? 'block' : 'none';
    });
}


// reading time estimator

function calculateReadingTime() {
const article = document.querySelector('article');
const text = article.textContent;
const wordCount = text.trim().split(/\s+/).length;
const readingTime = Math.ceil(wordCount / 200); // Asumsi 200 kata per menit

const readingTimeElement = document.getElementById('readingTime');
readingTimeElement.textContent = `${readingTime} menit membaca`;

}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', calculateReadingTime);

