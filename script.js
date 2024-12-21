function randomizeBoxPositions() {
    const containers = document.querySelectorAll('.grid-container');
  
    containers.forEach(container => {
      const boxes = Array.from(container.querySelectorAll('div'));
      // Shuffle the boxes array randomly
      for (let i = boxes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [boxes[i], boxes[j]] = [boxes[j], boxes[i]];
      }
      // Re-append the boxes to the container in the new order
      boxes.forEach(box => container.appendChild(box));
    });
  }
  
  // Call the function to initially randomize positions
  randomizeBoxPositions();
  
  // Add an event listener to re-randomize positions on window resize
  window.addEventListener('resize', randomizeBoxPositions);