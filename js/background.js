//On click of the extension icon, use browser API to get clipboard contents
chrome.action.onClicked.addListener(async function (tab) {
    await chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            //Get clipboard contents
            navigator.clipboard.readText().then(clipText => {
                //Send clipboard contents to background.js
                chrome.runtime.sendMessage({clipboard: clipText});
                clipText = "Generate me a ics-compliant text for the following schedule details: " + clipText;
                prom=document.getElementById("prompt-textarea");
                prom.value = clipText;
            });
        }
    });
});




