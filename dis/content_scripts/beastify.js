(() => {
    /**
     * Check and set a global guard variable.
     * If this content script is injected into the same page again,
     * it will do nothing next time.
     */
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;
    const BLUR = 10

    function blurThings() {
        const avatar = document.querySelectorAll('[class^="contents"] [class^="avatar"]')
        const userNames = document.querySelectorAll('[class^="contents"] [class^="header"]')
        const header = document.querySelector('[class^="chat"] [class^="subtitleContainer"] ')
        if (avatar)
            avatar.forEach(elem => elem.style.filter = `blur(${BLUR}px)`)
        if (userNames)
            userNames.forEach(elem => elem.style.display = 'none')
        if (header)
            header.style.filter = `blur(${BLUR}px)`




        document.querySelector('[class^="privateChannels"]').style.filter = `blur(${BLUR}px)`
        document.querySelector('[class^="userPanelOuter"]').style.filter = `blur(${BLUR}px)`
        document.querySelectorAll('[class^="avatar"]').forEach(elem => elem.style.filter = `blur(${BLUR}px)`)
        console.clear()
        console.log("Done");

    }



    /**
     * Listen for messages from the background script. 
     */
    browser.runtime.onMessage.addListener((message) => {
        if (message.command === "beastify") {
            blurThings();
        }
    });
})();
