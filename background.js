const YOUTUBE = "https://www.youtube.com";

const REDIRECT = "http://eachvideo.com";

// Static content scripts don't work because of how Youtube page navigation works.
chrome.tabs.onUpdated.addListener((id, changeInfo) => {
	if (changeInfo.url && changeInfo.url.startsWith(YOUTUBE)) {
		chrome.tabs.executeScript(id, {"file":"redirect.js"});	
	}
});
	
chrome.runtime.onMessage.addListener((request, sender) => {
	// A blocked video was detected.
	chrome.tabs.update(sender.tab.id, {"url":sender.tab.url.replace(YOUTUBE, REDIRECT)});
});