// Event listeners toevoegen aan de knop en het tekstveld
document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("addButton");
    const inputText = document.getElementById("inputText");
    const outputList = document.getElementById("outputList");

    addButton.addEventListener("click", function() {
        const inputValue = inputText.value;
        if (inputValue !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = inputValue;
            outputList.appendChild(listItem);
            inputText.value = ""; // Leeg het tekstveld
        }
    });

    inputText.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const inputValue = inputText.value;
            if (inputValue !== "") {
                const listItem = document.createElement("li");
                listItem.textContent = inputValue;
                outputList.appendChild(listItem);
                inputText.value = ""; // Leeg het tekstveld
            }
        }
    });
});
