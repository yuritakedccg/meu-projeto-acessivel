document.addEventListener('DOMContentLoaded', () => {
    const accessibilityBtn = document.getElementById('accessibility-btn');
    const accessibilityOptions = document.getElementById('accessibility-options');
    const highContrastBtn = document.getElementById('high-contrast-btn');
    const body = document.body;

    // Alterna a visibilidade do menu de acessibilidade
    accessibilityBtn.addEventListener('click', () => {
        accessibilityOptions.classList.toggle('hidden');
        accessibilityBtn.setAttribute('aria-expanded', accessibilityOptions.classList.contains('hidden') ? 'false' : 'true');
    });

    // Alterna o modo de alto contraste
    highContrastBtn.addEventListener('click', () => {
        body.classList.toggle('high-contrast-mode');
        
        // Salva a preferência do usuário no localStorage
        if (body.classList.contains('high-contrast-mode')) {
            localStorage.setItem('highContrast', 'enabled');
        } else {
            localStorage.removeItem('highContrast');
        }
    });

    // Carrega a preferência de alto contraste do usuário ao carregar a página
    if (localStorage.getItem('highContrast') === 'enabled') {
        body.classList.add('high-contrast-mode');
    }
});
