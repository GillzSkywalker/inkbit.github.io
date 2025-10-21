// collection data

// ==========================
// Sample Collections Data
// ==========================
const collections = [
    {
        title: "Collection Title 1",
        description: "Description of Collection 1"
    },
    {
        title: "Collection Title 2",
        description: "Description of Collection 2"
    },
    {
        title: "Collection Title 3",
        description: "Description of Collection 3"
    },
    {
        title: "Collection Title 4",
        description: "Description of Collection 4"
    }
];

// ==========================
// Render Collections
// ==========================
const container = document.querySelector('.more-collections .container');

function renderCollections(list) {
    container.innerHTML = ""; // Clear existing
    list.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('collection-item');
        div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <button class="view-btn" data-index="${index}">View</button>
        `;
        container.appendChild(div);
    });
}

// ==========================
// Search Filter
// ==========================
const searchInput = document.createElement('input');
searchInput.type = "text";
searchInput.placeholder = "Search collections...";
searchInput.style.marginBottom = "1rem";
searchInput.style.padding = "0.5rem";
searchInput.style.width = "100%";
document.querySelector('.more-collections').prepend(searchInput);

searchInput.addEventListener('input', (e) => {
    const filtered = collections.filter(item => 
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    renderCollections(filtered);
});

// ==========================
// Button Click Interaction
// ==========================
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-btn')) {
        const index = e.target.dataset.index;
        alert(`You clicked on: ${collections[index].title}`);
    }
});

// Initial Render
renderCollections(collections);
