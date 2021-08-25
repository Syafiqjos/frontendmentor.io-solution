function InitializeHeaderToggle(){
    const headerToggle = document.getElementById('header-toggle');
    const headerNav = document.getElementById('header-nav');
    
    const hiddenClass = 'header__list-container--hidden';
    let isHidden = false;

    function toggle(){
        isHidden = !isHidden;

        if (headerNav !== null){
            if (isHidden){
                headerNav.classList.add(hiddenClass);
            } else {
                headerNav.classList.remove(hiddenClass);
            }
        }
    }

    if (headerToggle !== null){
        headerToggle.addEventListener('click', toggle);
    }

    toggle();
}

InitializeHeaderToggle();