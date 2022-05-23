window.onload = () =>{
    let mySwitch = document.getElementById("checkIsEnable");
    chrome.storage.sync.get("state", ({ state }) => {
        mySwitch.checked = state;
    });
    
    mySwitch.addEventListener("change", () => {
        state = mySwitch.checked;
        chrome.storage.sync.set({ state }, () => {
            console.log('State is set to ' + !state);
        });
        chrome.tabs.reload();
    });

}