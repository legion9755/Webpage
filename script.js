// Randomize box positions
function randomizeBoxPositions() {
  const containers = document.querySelectorAll('.grid-container');

  containers.forEach(container => {
    const boxes = Array.from(container.querySelectorAll('div'));
    for (let i = boxes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [boxes[i], boxes[j]] = [boxes[j], boxes[i]];
    }
    boxes.forEach(box => container.appendChild(box));
  });
}

// Call the function to initially randomize positions
randomizeBoxPositions();

// Add an event listener to re-randomize positions on window resize
window.addEventListener('resize', randomizeBoxPositions);

// Dark Mode Functionality
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Enable dark mode by default
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('dark-mode');
});

// Create Dark Mode Toggle Button
const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'Toggle Dark Mode';
darkModeButton.style.position = 'fixed';
darkModeButton.style.bottom = '20px';
darkModeButton.style.right = '20px';
darkModeButton.style.padding = '10px';
darkModeButton.style.backgroundColor = '#007bff';
darkModeButton.style.color = '#ffffff';
darkModeButton.style.border = 'none';
darkModeButton.style.borderRadius = '5px';
darkModeButton.style.cursor = 'pointer';

darkModeButton.addEventListener('click', toggleDarkMode);
document.body.appendChild(darkModeButton);
s