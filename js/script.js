function showHome() {
    document.getElementById('mainContent').className = 'container mt-4 active';
    document.getElementById('aboutContent').style.display = 'none';
    document.getElementById('newsContent').style.display = 'none';
    document.getElementById('homeLink').className = 'nav-link active';
    document.getElementById('aboutLink').className = 'nav-link';
    document.getElementById('newsLink').className = 'nav-link';
    console.log('Показан раздел "Главная"');
}

function showAbout() {
    document.getElementById('mainContent').className = 'container mt-4';
    document.getElementById('aboutContent').style.display = 'block';
    document.getElementById('newsContent').style.display = 'none';
    document.getElementById('homeLink').className = 'nav-link';
    document.getElementById('aboutLink').className = 'nav-link active';
    document.getElementById('newsLink').className = 'nav-link';
    console.log('Показан раздел "О нас"');
}

function showNews() {
    document.getElementById('mainContent').className = 'container mt-4';
    document.getElementById('aboutContent').style.display = 'none';
    document.getElementById('newsContent').style.display = 'block';
    document.getElementById('homeLink').className = 'nav-link';
    document.getElementById('aboutLink').className = 'nav-link';
    document.getElementById('newsLink').className = 'nav-link active';
    console.log('Показан раздел "Новости"');
}

showHome();