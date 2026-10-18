let activeEngine = "duckduckgo";

const buttons = document.querySelectorAll('.engine-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
        activeEngine = button.getAttribute('data-engine');
    });
});

const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value.trim();
        if (!query) return;

        let url = "";

        if (activeEngine === 'duckduckgo') {
            url = "https://duckduckgo.com/?q=" + encodeURIComponent(query);
        }
        else if (activeEngine === 'youtube') {
            url = "https://www.youtube.com/results?search_query=" + encodeURIComponent(query);
        }
        else if (activeEngine === 'duckai') {
            url = "https://duck.ai/chat?ia=" + encodeURIComponent(query);
        }
        else if (activeEngine === 'archwiki') {
            url = "https://wiki.archlinux.org/index.php?search=" + encodeURIComponent(query);
        }
        else if (activeEngine === 'archpackages') {
            url = "https://archlinux.org/packages/?q=" + encodeURIComponent(query);
        }
        else if (activeEngine === 'flathub') {
            url = "https://flathub.org/apps/search?q=" + encodeURIComponent(query);
        }

        window.location.href = url;
    }
});