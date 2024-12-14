document.addEventListener('DOMContentLoaded', () => {
    const soundContainer = document.getElementById('sounds-container');

    // Fetch sound data from backend
    fetch('https://backend-l7x9.onrender.com/api/sounds') // Adjust the endpoint as needed
        .then(response => response.json())
        .then(data => {
            const { sounds } = data;

            // Clear existing content if needed
            soundContainer.innerHTML = '';

            // Iterate over each sound and create sound-item elements
            sounds.slice(0,5).forEach(sound => {
                const soundItem = document.createElement('div');
                soundItem.className = 'sound-item';
                const audioSrc = `https://backend-l7x9.onrender.com${sound.filePath}`; // Construct the audio src URL

                soundItem.innerHTML = `
                    <div class="top">
                        <div class="add">
                            <button>ADD</button>
                        </div>
                        <div class="sound-img">
                            <img src="https://backend-l7x9.onrender.com${sound.imagePath}" alt="${sound.name}" />
                        </div>
                    </div>
                    <div class="middle">
                        <div class="icon"></div>
                        <div class="play">
                            <button onclick="toggleSound(this)">Listen to the sounds</button>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="song-name"><p>${sound.name}</p></div>
                    </div>
                    <audio src="${audioSrc}" data-sound-id="${sound._id}" loop></audio>
                `;

                soundContainer.appendChild(soundItem);
            });
        })
        .catch(error => {
            console.error('Error fetching sounds:', error);
        });
});

function toggleSound(button) {
    const soundItem = button.closest('.sound-item');
    const audio = soundItem.querySelector('audio');
    
    
    if (audio.paused) {
        audio.play();
        button.innerText = 'Pause'; // Change button text to 'Pause'

        // Apply dynamic styles when the sound is playing
        soundItem.style.border = "3px solid #FFAB40"; // Soft Orange border
        soundItem.style.boxShadow = "0 0 10px #FFAB40"; // Glow effect
        soundItem.style.backgroundColor = "#FFE8D6"; // Very light orange background
    } else {
        audio.pause();
        button.innerText = 'Listen to the sounds'; // Change button text back

        // Remove dynamic styles when the sound is paused
        soundItem.style.border = "none";
        soundItem.style.boxShadow = "none";
        soundItem.style.backgroundColor = "#f0f8ff"; // Or use the original background color
    }
}
