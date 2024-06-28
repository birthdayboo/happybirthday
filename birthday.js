document.getElementById('present').addEventListener('click', function() {
    const present = document.getElementById('present');
    present.classList.add('clicked');
    setTimeout(() => {
        present.style.display = 'none';
        const messageContainer = document.getElementById('messageContainer');
        messageContainer.style.display = 'block';
        document.getElementById('message').style.display = 'block';
        document.getElementById('joshImage').classList.add('fadeInZoom');
        createConfetti();
        createBalloons();
        createHearts();
    }, 500); // Match the blowUp animation duration
});

function createConfetti() {
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '15';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.backgroundColor = getRandomColor();
        confettiContainer.appendChild(confetti);
    }
}

function createBalloons() {
    const balloonContainer = document.createElement('div');
    balloonContainer.style.position = 'fixed';
    balloonContainer.style.width = '100%';
    balloonContainer.style.height = '100%';
    balloonContainer.style.pointerEvents = 'none';
    balloonContainer.style.zIndex = '3';
    document.body.appendChild(balloonContainer);

    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDelay = `${Math.random() * 6}s`;
        balloon.style.backgroundColor = getRandomColor();
        balloonContainer.appendChild(balloon);
    }
}

function createHearts() {
    const heartContainer = document.createElement('div');
    heartContainer.style.position = 'fixed';
    heartContainer.style.width = '100%';
    heartContainer.style.height = '100%';
    heartContainer.style.pointerEvents = 'none';
    heartContainer.style.zIndex = '4';
    document.body.appendChild(heartContainer);

    for (let i = 0; i < 16; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 6}s`;
        heart.style.backgroundColor = getRandomColor();
        heartContainer.appendChild(heart);
    }
}

function getRandomColor() {
    const colors = ['#ff4081', '#ff80ab', '#ffc107', '#ffeb3b', '#8bc34a', '#00bcd4', '#3f51b5', '#9c27b0'];
    return colors[Math.floor(Math.random() * colors.length)];
}
