// Function to create and show a tooltip
function createTooltip() {
    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";

    const strong = document.createElement("div");
    strong.textContent = "waiting for response...";
strong.className = "tooltipheader";


    const tooltipContent = document.createElement("div");
    tooltipContent.className = "tooltiptext";

    tooltip.appendChild(strong);
    tooltip.appendChild(tooltipContent);


    return tooltip;
}

// Function to show the tooltip on mouseenter
async function showTooltip(event) {
    const codeSnippet = event.target.textContent;

    if (!codeSnippet) {
        console.log("No code snippet found");
        return;
    } else {
        console.log("Code snippet found");

        if (event.target.getAttribute("data-inspected") === "true") {
            event.target.setAttribute("data-inspected", "true");
            console.log('Already Inspected')
        } else {
            console.log('Not Inspected')

            const tooltip = createTooltip();
            event.target.setAttribute("data-inspected", "true");
            event.target.insertAdjacentElement("afterend", tooltip);
            const requestData = `Explain this code snippet in text only: "${codeSnippet}"`;

            await fetch(`https://api.scattr.io/api/v1/generativeai/text`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    prompt: requestData
                })
            })
                .then((response) => response.json())
                .then((data) => {
                    event.target.setAttribute("data-inspected", "true");
                    const summary = data.data || 'No summary available.';
                    tooltip.querySelector(".tooltipheader").textContent = summary;

                })
                .catch((error) => {
                    console.error('Error:', error);
                    tooltip.querySelector(".tooltiptext").textContent = 'Failed to inspect the code block. Please try again later.';
                });
        }
    }


}

// Function to hide the tooltip on mouseleave
function hideTooltip(event) {
    const tooltip = event.target.querySelector(".tooltip");
    if (tooltip) {
        tooltip.remove();
    }
}

// Attach event listeners to code blocks
const codeBlocks = document.querySelectorAll("pre, code");
codeBlocks.forEach((block) => {
    block.addEventListener("mouseenter", showTooltip);
    block.addEventListener("mousehover", hideTooltip);
    block.addEventListener("mouseleave", hideTooltip);
});
