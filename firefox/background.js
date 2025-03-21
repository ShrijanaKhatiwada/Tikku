// Background script for Tikku extension
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the page is fully loaded and has a URL
  if (changeInfo.status === 'complete' && tab.url) {
    // You can add URL pattern matching here if the extension only works on specific pages
    // For example: if (tab.url.includes('your-ticketing-system-domain.com'))
    
    // Inject the content script when the page is loaded
    browser.scripting.executeScript({
      target: { tabId: tabId },
      func: prepareTicketPage,
    });
  }
});

// This function will be injected into the page to ensure the text area is ready
function prepareTicketPage() {
  // Try to find the text area or create a mutation observer to detect when it's added
  const findTextArea = () => {
    const textArea = document.querySelector('.ajax__html_editor_extender_texteditor');
    return textArea !== null;
  };

  // If the text area already exists, we're ready
  if (findTextArea()) {
    console.log('Tikku extension: Ticket text area found and ready');
    return;
  }

  // If not, set up an observer to watch for it
  const observer = new MutationObserver((mutations, obs) => {
    if (findTextArea()) {
      console.log('Tikku extension: Ticket text area detected and ready');
      obs.disconnect(); // Stop observing once found
    }
  });

  // Start observing the document with the configured parameters
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
