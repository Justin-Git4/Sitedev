// const button = document.getElementById('myButton');

// button.addEventListener('click', function() {
//     alert('You clicked the button!');
// });

// const openButton = document.getElementById('openPopup');
// const closeButton = document.getElementById('closePopup');
// const popup = document.getElementById('popup');

// openButton.addEventListener('click', function() {
//     popup.classList.remove('hidden');
// });

// closeButton.addEventListener('click', function() {
//     popup.classList.add('hidden');
// });

// class="hidden" → keeps it invisible.

// When you click Open, JavaScript removes hidden.
// When you click Close, JavaScript adds hidden back.

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Randomize the size of the bubble
    const size = Math.random() * (60 - 20) + 20; // Random size between 20px and 60px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Randomize the starting position of the bubble
    const startPosX = Math.random() * window.innerWidth;
    bubble.style.left = `${startPosX}px`;

    // Randomize animation speed and delay
    const speed = Math.random() * 2 + 3; // Random speed between 3s and 5s
    const delay = Math.random() * 5; // Random delay for each bubble

    bubble.style.animationDuration = `${speed}s`;
    bubble.style.animationDelay = `-${delay}s`;

    // Append the bubble to the container
    document.getElementById('bubble-container').appendChild(bubble);

    // Remove the bubble after animation ends (to keep things clean)
    setTimeout(() => {
        bubble.remove();
    }, speed * 1000); // Match the animation duration
}

// Create bubbles at intervals
setInterval(createBubble, 200); // Create a new bubble every 200ms