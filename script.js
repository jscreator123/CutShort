const form = document.querySelector('#shortcut-form');
const shortcutNameInput = document.querySelector('#shortcut-name');
const shortcutUrlInput = document.querySelector('#shortcut-url');
const shortcutIconInput = document.querySelector('#shortcut-icon');
const shortcutList = document.querySelector('#shortcut-list');
const clearShortcutsButton = document.querySelector('#clear-shortcuts');

let shortcuts = JSON.parse(localStorage.getItem('shortcuts')) || [];

function renderShortcuts() {
  shortcutList.innerHTML = '';
  for (let i = 0; i < shortcuts.length; i++) {
    const shortcut = shortcuts[i];
    const li = document.createElement('li');
    li.innerHTML = `
      <a id="shortcut" href="${shortcut.url}" target="__blank">
        <img src="${shortcut.icon}" alt="${shortcut.name}">
        <span>${shortcut.name}</span>
      </a>
      &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp <button class="delete-button" data-index="${i}">Delete</button>
    `;
    shortcutList.appendChild(li);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = shortcutNameInput.value;
  const url = shortcutUrlInput.value;
  const icon = shortcutIconInput.value;
  const shortcut = { name, url, icon };
  shortcuts.push(shortcut);
  localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
  shortcutNameInput.value = '';
  shortcutUrlInput.value = '';
  shortcutIconInput.value = '';
  renderShortcuts();
});

shortcutList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-button')) {
    const index = event.target.getAttribute('data-index');
    shortcuts.splice(index, 1);
    localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
    renderShortcuts();
  }
});

clearShortcutsButton.addEventListener('click', () => {
  shortcuts = [];
  localStorage.removeItem('shortcuts');
  renderShortcuts();
});

renderShortcuts();

 window.onload = function() {
        var heading = document.getElementsByTagName("h1")[0];
        document.title = heading.innerHTML;
        heading.addEventListener("input", function() {
          document.title = heading.innerHTML;
        });
      }

function add(){
javascript:(function() {
  let name = prompt("Enter shortcut name:");
  let url = prompt("Enter shortcut URL:");

  if (!url.startsWith("https://")) {
    url = "https://" + url;
  }

  let icon = prompt("Enter shortcut icon URL:");
  const shortcut = { name, url, icon };

  let shortcuts = JSON.parse(localStorage.getItem('shortcuts')) || [];
  shortcuts.push(shortcut);
  localStorage.setItem('shortcuts', JSON.stringify(shortcuts));

  location.reload();
})();

}

const pageTitle = document.getElementById("page-title");

// Check if there is a title saved in local storage
if(localStorage.getItem("pageTitle")) {
  pageTitle.textContent = localStorage.getItem("pageTitle");
}

// Save the title to local storage whenever it changes
pageTitle.addEventListener("input", () => {
  localStorage.setItem("pageTitle", pageTitle.textContent);
});

const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.querySelector('body');

// Check if user has previously set a theme preference
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  body.classList.add(storedTheme);
}

toggleButton.addEventListener('click', () => {
  // Toggle between light and dark modes
  body.classList.toggle('dark-mode');

  // Save the current theme preference to localStorage
  const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', currentTheme);
});
