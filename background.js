let state = true;

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ state }, function () {
        console.log('State is set to ' + state);
    });
});

