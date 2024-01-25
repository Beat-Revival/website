console.log("Theme switcher initialised");

function setDarkTheme(darkTheme) {
    if (darkTheme) {
        document.querySelectorAll(".desc").forEach((element) => {
            element.classList.add("dark");
        });
        document.body.classList.add("dark");
    } else {
        document.querySelectorAll(".desc").forEach((element) => {
            element.classList.remove("dark");
        });
        document.body.classList.remove("dark");
    }

}

// Check user's system preferences
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
// Use window load event to ensure the DOM is fully loaded before executing the script
window.addEventListener('load', () => {
    setDarkTheme(prefersDarkMode);
});