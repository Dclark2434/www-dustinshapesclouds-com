document.addEventListener("DOMContentLoaded", function () {
    const counter = document.querySelector("#visitorCount");

    async function updateCounter() {
        let response = await fetch("https://rbobt7qnffimjzkx43bgveeeza0vficp.lambda-url.us-east-1.on.aws/");
        let data = await response.json();
        counter.innerHTML = ` ${data}`;
    }

    // Call the updateCounter function when the DOM content is loaded
    updateCounter();
});