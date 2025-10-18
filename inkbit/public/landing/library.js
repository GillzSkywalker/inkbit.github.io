/**
 * ========================================
 * JAVASCRIPT FOR 'My Collections' PAGE
 * ========================================
 */

// 1. DATA MANAGEMENT (MOCK DATA)
// In a real application, this data would come from an API or a database.
const seriesData = [
    { title: "Series Title 1", author: "Author Name", status: "Ongoing", owned: 5, total: 12 },
    { title: "Series Title 2", author: "Another Author", status: "Completed", owned: 10, total: 10 },
    // Add more mock data here if needed
];


/**
 * 2. CORE DOM MANIPULATION FUNCTIONS
 */

// Function to create a single library item element
function createLibraryItem(series) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('library-item');

    // Simple status class for potential CSS styling
    const statusClass = series.status.toLowerCase();

    itemDiv.innerHTML = `
        <h3>${series.title}</h3>
        <p>Author: ${series.author}</p>
        <p>Status: <span class="status-${statusClass}">${series.status}</span></p>
        <p>Volumes Owned: ${series.owned} / ${series.total}</p>
    `;

    return itemDiv;
}

// Function to render all series data into the container
function renderLibrary() {
    const container = document.querySelector('.container');
    // Clear existing static HTML content, except for the button div
    const itemsToRemove = container.querySelectorAll('.library-item');
    itemsToRemove.forEach(item => item.remove());

    // Filter out the button div before adding new items
    const buttonDiv = container.querySelector('.library-button');
    if (buttonDiv) {
        buttonDiv.remove();
    }


    seriesData.forEach(series => {
        const itemElement = createLibraryItem(series);
        container.appendChild(itemElement);
    });

    // Re-append the button div at the end
    if (buttonDiv) {
        container.appendChild(buttonDiv);
    }
}


/**
 * 3. EVENT HANDLERS
 */

// Function to handle the "Add New Series" button click
function handleAddSeries() {
    // 1. In a real app, this would open a modal/form for user input.
    // 2. For this example, we'll simulate adding a new series.

    const newSeries = {
        title: `New Series ${seriesData.length + 1}`,
        author: "New Contributor",
        status: "Planned",
        owned: 0,
        total: 5
    };

    // Add the new series to the data array
    seriesData.push(newSeries);

    // Re-render the library to show the new item
    renderLibrary();

    // Give the user feedback (optional)
    alert(`Successfully added "${newSeries.title}" to your library!`);
}


/**
 * 4. INITIALIZATION
 */

document.addEventListener('DOMContentLoaded', () => {
    // A. Initial rendering of the library based on the mock data
    // NOTE: This will replace the static items in the HTML for better management.
    renderLibrary();

    // B. Attach the event listener to the "Add New Series" button
    const addButton = document.querySelector('.btn-add');
    if (addButton) {
        addButton.addEventListener('click', handleAddSeries);
    } else {
        console.error("The 'Add New Series' button was not found.");
    }
});