document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('etch-a-sketch');
    const drawButton = document.getElementById('draw-button');
    let canDraw = false; // Flag to control whether drawing mode is enabled
    let isDrawing = false; // Flag to control the current drawing action

    // Toggle draw mode
    drawButton.addEventListener('click', () => {
        canDraw = !canDraw;
        drawButton.textContent = canDraw ? 'Drawing Mode: ON' : 'Drawing Mode: OFF';
    });

    const gridSize = 256; // 16x16 grid

    // Create grid cells
    for (let i = 0; i < gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('pixel');
        container.appendChild(cell);

        // Mouseover event to draw if drawing mode is active and mouse is pressed
        cell.addEventListener('mouseover', () => {
            if (canDraw && isDrawing) {
                cell.style.backgroundColor = 'black';
            }
        });

        // Mousedown event to start drawing
        cell.addEventListener('mousedown', (event) => {
            event.preventDefault(); // Prevents default text selection behavior
            if (canDraw) {
                isDrawing = !isDrawing; // Toggle drawing state
            }
        });
    }

    // Mouseup and mouseleave events to stop drawing
    document.addEventListener('mouseup', () => {
        isDrawing = false;
    });
    container.addEventListener('mouseleave', () => {
        isDrawing = false;
    });

    // Clear button functionality
    document.querySelector('.js-clear-button').addEventListener('click', clearButton);
});

function clearButton() {
    const cells = document.querySelectorAll('.pixel');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
} 