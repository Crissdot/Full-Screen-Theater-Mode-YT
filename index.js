try {
    YTButtons = document.querySelectorAll('button.ytp-size-button.ytp-button');
    
    makeTheaterMode(YTButtons, theaterContainer, navBar, contentContainer);
    
} catch(error) {
    console.log(error);

    let YTButtons = document.querySelectorAll('button.ytp-size-button.ytp-button');
    const theaterContainer = document.getElementById('player-theater-container');
    const navBar = document.querySelector('#masthead-container.ytd-app');
    const contentContainer = document.querySelector('#content.style-scope.ytd-app');

    makeTheaterMode(YTButtons, theaterContainer, navBar, contentContainer);
}


function makeTheaterMode(YTButtons, theaterContainer, navBar, contentContainer) {
    if(theaterContainer.getAttribute('style') === null) {
        YTButtons.forEach(YTButton => {
            if(YTButton.attributes.title.value === "Theater mode (t)") {
                let theaterModeButton = YTButton;
                theaterModeButton.click();
            }
        });

        theaterContainer.style.maxHeight = '100vh';
        theaterContainer.style.height = '100vh';
        theaterContainer.style.zIndex = '2021';

        navBar.style.transform = 'scale(0)';
        navBar.style.zIndex = '-2021';

        contentContainer.style.transform = 'translateY(-55px)';
    } else {
        theaterContainer.removeAttribute('style');
        navBar.removeAttribute('style');
        contentContainer.removeAttribute('style');

        YTButtons.forEach(YTButton => {
            if(YTButton.attributes.title.value === "Default view (t)") {
                let theaterModeButton = YTButton;
                theaterModeButton.click();
            }
        });
    }
}
