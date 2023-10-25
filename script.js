// Autocomplete search
// data stored in research-directory.js
//
const searchInput = document.getElementById('searchInput');
const suggestions = document.getElementById('suggestions');

// Function to filter and display suggestions
function updateSuggestions() {
    const inputValue = searchInput.value.trim().toLowerCase(); // Trim whitespace
    const filteredData = data.filter(item => item.name.toLowerCase().includes(inputValue));

    suggestions.innerHTML = '';

    // Show or hide the suggestions based on the input
    if (inputValue === '') {
        suggestions.style.display = 'none';
    } else {
        filteredData.forEach(item => {
            const anchor = document.createElement('a');
            anchor.textContent = item.name;
            anchor.href = item.link;
            const div = document.createElement('div');
            div.appendChild(anchor);
            suggestions.appendChild(div);
        });

        suggestions.style.display = 'block';
    }
}

// Event listener for input changes
searchInput.addEventListener('input', updateSuggestions);