// Category active state
const categoryLinks = document.querySelectorAll('.categories a');
categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        categoryLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// View filter active state
const viewLinks = document.querySelectorAll('.view-filter a');
viewLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        viewLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        const title = card.querySelector('.game-title').textContent.toLowerCase();
        const subtitle = card.querySelector('.game-subtitle').textContent.toLowerCase();
        if (title.includes(searchTerm) || subtitle.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Hover effect enhancement for game cards
const cards = document.querySelectorAll('.game-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.zIndex = '10';
    });
    card.addEventListener('mouseleave', () => {
        card.style.zIndex = '1';
    });
});

// Pagination click
const pages = document.querySelectorAll('.pagination .page');
pages.forEach(page => {
    page.addEventListener('click', (e) => {
        e.preventDefault();
        pages.forEach(p => p.classList.remove('active'));
        page.classList.add('active');
        // In real implementation, you would fetch new page data here
        console.log(`Page ${page.textContent} clicked`);
    });
});

console.log('Download click handler loaded');

// Open download link when clicking anywhere on a game card
document.addEventListener('click', (e) => {
    // Let normal links work (menus, pagination, etc.)
    if (e.target.closest('a')) return;

    const card = e.target.closest('.game-card[data-download]');
    if (!card) return;

    const url = card.dataset.download;
    if (!url) return;

    window.open(url, '_blank', 'noopener');
});
