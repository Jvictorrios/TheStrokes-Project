    // Função para alternar tema
    function toggleTheme() {
        const body = document.body;
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
    }

    // Função para fechar o pop-up
    function closePopup() {
        document.getElementById("welcomePopup").style.display = "none";
        localStorage.setItem('welcomeShown', 'true'); // Marca o pop-up como exibido
    }

    // Mostrar o pop-up apenas se for a primeira vez
    window.onload = function() {
        if (!localStorage.getItem('welcomeShown')) {
            document.getElementById("welcomePopup").style.display = "block";
        }
    }

