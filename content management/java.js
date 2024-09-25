// Function to handle adding text
document.getElementById('add-text').addEventListener('click', function() {
    const textInput = document.getElementById('text-input').value;
    
    if (textInput.trim() !== "") {
        // Create a new paragraph element
        const newText = document.createElement('p');
        newText.textContent = textInput;
        newText.classList.add('user-text'); // Optional class for styling

        // Append the new text to the display area
        document.getElementById('display-area').appendChild(newText);

        // Clear the text area
        document.getElementById('text-input').value = '';
    } else {
        alert("Please enter some text.");
    }
});

// Function to handle adding an image
document.getElementById('add-image').addEventListener('click', function() {
    const imageInput = document.getElementById('image-input');
    
    if (imageInput.files && imageInput.files[0]) {
        const file = imageInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            // Create a new image element
            const newImage = document.createElement('img');
            newImage.src = e.target.result;
            newImage.alt = "User Image";
            newImage.classList.add('user-image'); // Optional class for styling

            // Append the new image to the display area
            document.getElementById('display-area').appendChild(newImage);
        };

        reader.readAsDataURL(file);
        
        // Clear the image input
        imageInput.value = '';
    } else {
        alert("Please select an image.");
    }
});
