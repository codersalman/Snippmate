document.addEventListener('DOMContentLoaded', function () {
    const summarizeBtn = document.getElementById('summarizeBtn');
    summarizeBtn.addEventListener('click', summarizeArticle);
});
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const activeTab = tabs[0];
    document.getElementById('title').innerText = activeTab.title
})

chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const activeTab = tabs[0];

    chrome.scripting.executeScript({
        target: {tabId: activeTab.id},
        files: ["content_script.js"],
    }).then(() => console.log("script injected"));
});
