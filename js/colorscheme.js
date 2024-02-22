function setDarkTheme(darkTheme) {
    if (darkTheme) {
        document.querySelectorAll(".desc").forEach((element) => {
            if (element.classList) {
                element.classList.add("dark");
            }
        });
        if (document.body.classList) {
            document.body.classList.add("dark");
        }
    } else {
        document.querySelectorAll(".desc").forEach((element) => {
            if (element.classList) {
                element.classList.remove("dark");
            }
        });
        if (document.body.classList) {
            document.body.classList.remove("dark");
        }
    }
}

// Check user's system preferences
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Use DOMContentLoaded event to ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    setDarkTheme(prefersDarkMode);
});
