chrome.webNavigation.onCommitted.addListener(async (details) => {
  const url = new URL(details.url);

  if (url.searchParams.has("fbclid")) {
    url.searchParams.delete("fbclid");

    // Redirecting to the cleaned URL (fbclid removed)
    chrome.tabs.update(details.tabId, { url: url.toString() });
  }
});