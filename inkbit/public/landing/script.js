// ==========================
// Grab Elements
// ==========================
const formContainer = document.querySelector('.form-container');
const addButton = formContainer.querySelector('button');
const titleInput = formContainer.querySelector('input[type="text"]');
const numberInputs = formContainer.querySelectorAll('input[type="number"]');
const textarea = formContainer.querySelector('textarea');

// Stats elements
const stats = document.querySelectorAll('.stat-box h3');

// ==========================
// Simulate adding items
// ==========================
let totalItems = 0;
let completed = 0;
let reading = 0;
let totalRatings = 0;

addButton.addEventListener('click', (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const author = formContainer.querySelectorAll('input')[1].value.trim();
    const rating = parseInt(numberInputs[0].value) || 0;
    const volumesOwned = parseInt(numberInputs[1].value) || 0;
    const totalVolumes = parseInt(numberInputs[2].value) || 0;
    const comments = textarea.value.trim();

    if (!title) {
        alert('Please enter a title.');
        return;
    }

    // Update stats (demo logic)
    totalItems++;
    totalRatings += rating;
    // For simplicity, add 1 to reading as example
    reading++;

    // Update stat-box text
    stats[0].textContent = totalItems;
    stats[1].textContent = completed;
    stats[2].textContent = reading;
    stats[3].textContent = totalRatings;

    // Reset form
    formContainer.querySelectorAll('input, textarea').forEach(el => el.value = '');
    alert(`Item "${title}" added successfully!`);
});
