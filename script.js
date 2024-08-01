

const darkModeToggle = document.getElementById('toggle-dark-mode');


darkModeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
});

