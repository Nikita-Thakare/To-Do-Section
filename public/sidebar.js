// sidebar.js

// Function to load the sidebar
function loadSidebar() {
  fetch("sidebar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sidebar").innerHTML = data;
    })
    .catch((error) => console.error("Error loading sidebar:", error));
}

// Call the function to load the sidebar when the page loads
window.onload = loadSidebar;
