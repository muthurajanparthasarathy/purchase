// Select all items with the class 'item'
const items = document.querySelectorAll('.item');

// function to reset all items
function resetAllItems() {
    items.forEach(item => {
        item.classList.remove("selected-section"); // Remove selected styling

        // Hide any tables within the item
        const table = item.querySelector('table');
        if (table) {
            table.classList.add('d-none');
        }

        // Uncheck radio buttons
        const radioButton = item.querySelector('input[type="radio"]');
        if (radioButton) {
            radioButton.checked = false;
        }
    });
}

// Add event listener to each item
items.forEach(item => {
    item.addEventListener("click", () => {
        // If the current item is already selected, do nothing
        if (item.classList.contains("selected-section")) {
            return;
        }

        // Reset all items before selecting the current one
        resetAllItems();

        // Highlight the clicked item
        item.classList.add("selected-section");
        const discountPrice = item.querySelector('.discount-price');
        if (discountPrice) {
            // console.log(discountPrice.textContent); // Log the discount price text
            document.getElementById('total').innerText = discountPrice.textContent;
        }        // Check the radio button inside the clicked item
        const radioButton = item.querySelector('input[type="radio"]');
        if (radioButton) {
            radioButton.checked = true;
        }

        // Display the table within the clicked item
        const table = item.querySelector('table');
        if (table) {
            table.classList.remove('d-none');
        }
    });
});


