const customCSS = `
  body {
    background-color: lightblue;
  }
  h1 {
    color: purple;
  }
`;

// Inject the custom CSS into the current tab
chrome.tabs.insertCSS({
    code: customCSS
}, () => {
    if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
    } else {
        console.log("Custom CSS injected successfully!");
    }
});
