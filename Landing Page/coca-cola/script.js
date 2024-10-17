document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with class 'elem1'
    let descriptionSection = document.querySelector('.description');
    let descriptionContent = document.querySelector('.description-content');
    let nutrientsSection = document.querySelector('.nutrients');
    let nutrientsContent = document.querySelector('.nutrients-content');
    
    // Function to toggle content visibility
    function toggleContent(section, content) {
        section.addEventListener("click", function() {
            content.classList.toggle("show"); // Toggle the 'show' class
            
            // Change the icon from plus to minus when toggled
            let icon = section.querySelector('i');
            if(content.classList.contains("show")) {
                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");
            } else {
                icon.classList.remove("fa-minus");
                icon.classList.add("fa-plus");
            }
        });
    }

    // Apply toggle to both description and nutrients
    toggleContent(descriptionSection, descriptionContent);
    toggleContent(nutrientsSection, nutrientsContent);
});

