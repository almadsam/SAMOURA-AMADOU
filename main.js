function toggleTheme() {
    document.body.classList.toggle('dark');
}
document.querySelector('.themeButton').addEventListener('click', toggleTheme);