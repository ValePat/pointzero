import './assets/main.css'

window.onload = function() {
    debugger
    // Controlla se è già stato salvato un flag di ricarica
    var reloadFlag = localStorage.getItem('reloadFlag');
    // Se non è stato salvato alcun flag di ricarica, ricarica la pagina
    if (!reloadFlag) {
        // Salva un flag di ricarica nello storage locale
        localStorage.setItem('reloadFlag', 'true');
        // Esegui il refresh della pagina
        window.location.reload();
    } else {
        // Se è già stato salvato un flag di ricarica, rimuovilo
        localStorage.removeItem('reloadFlag');
    }
}
