const themeSelector = document.getElementById("theme-selector");

themeSelector.addEventListener("change", () => {
  const selectedTheme = themeSelector.value;

  if (selectedTheme === "light") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", selectedTheme);
  }
});
