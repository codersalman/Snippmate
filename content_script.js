// Function to create and show a tooltip
function createTooltip() {
    const tooltip = document.createElement("span");
    tooltip.className = "tooltip";

    const strong = document.createElement("strong");
    strong.textContent = "waiting for response...";

    const tooltipContent = document.createElement("span");
    tooltipContent.className = "tooltiptext";

    const p1 = document.createElement("p");
    p1.textContent = "[sex·y] /'seksē/";

    const p2 = document.createElement("p");
    p2.innerHTML = "<em>informal</em>";

    const p3 = document.createElement("p");
    p3.textContent = "exciting; appealing.";

    const link = document.createElement("a");
    link.href = "https://www.google.com";
    link.target = "_blank";
    link.textContent = "link";

    p3.appendChild(link);
    tooltipContent.appendChild(p1);
    tooltipContent.appendChild(p2);
    tooltipContent.appendChild(p3);
    tooltip.appendChild(strong);
    tooltip.appendChild(tooltipContent);

    return tooltip;
}

// Function to show the tooltip on mouseenter
function showTooltip(event) {
    const codeSnippet = event.target.textContent.trim();

    if (!codeSnippet) {
        console.log("No code snippet found");
        return;
    }

    const tooltip = createTooltip();
     event.target.appendChild(tooltip);

    const requestData = `Explain this code snippet: "${codeSnippet}"`;
    fetch(`https://api.scattr.io/api/v1/generativeai/text`, {
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
            const summary = data.data || 'No summary available.';
            tooltip.querySelector(".tooltiptext").textContent = summary;
        })
        .catch((error) => {
            console.error('Error:', error);
            tooltip.querySelector(".tooltiptext").textContent = 'Failed to inspect the code block. Please try again later.';
        });
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
    block.addEventListener("mouseleave", hideTooltip);
});
