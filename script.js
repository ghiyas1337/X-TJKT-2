document.getElementById('addPhotoButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const scrapbook = document.getElementById('scrapbook');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
            const photoDiv = document.createElement('div');
            photoDiv.classList.add('photo');

            const img = document.createElement('img');
            img.src = e.target.result;

            photoDiv.appendChild(img);
            scrapbook.appendChild(photoDiv);
        };

        reader.readAsDataURL(file);
        fileInput.value = ''; // Reset input
    } else {
        alert('Silakan pilih foto terlebih dahulu!');
    }
});
