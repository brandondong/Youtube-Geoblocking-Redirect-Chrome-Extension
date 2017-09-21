if (document.documentElement.innerHTML.includes("The uploader has not made this video available in your country")) {
	// Notify the background script so that it can update the URL of this tab.
	chrome.runtime.sendMessage({});
}
