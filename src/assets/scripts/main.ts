
function eventListeners(){
    const buttonElement = document.getElementById('ham_menu') !;
    const crossButtonElement = document.querySelector('.cross') !;
    const menuElement = document.querySelector('.menu-mobile') !;
    const hamBtnCallback = (): void=>{
        if(buttonElement !== null){
            menuElement.classList.add('menu-opened');
        }
    }

    const crossBtnCallback = (): void=>{
        if(crossButtonElement !== null){
            menuElement.classList.remove('menu-opened');
        }
    }

    buttonElement.addEventListener('click',hamBtnCallback);
    crossButtonElement.addEventListener('click',crossBtnCallback);
    window.addEventListener('resize',()=>{
        const windowWidth = window.screen.width;
        if(windowWidth > 768){
            crossBtnCallback();
        }
    });

    buttonElement.removeEventListener('click',hamBtnCallback);
}

export default function main(){
    eventListeners();
}

main();