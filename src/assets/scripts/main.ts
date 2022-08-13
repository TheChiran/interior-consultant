
function eventListeners(){
    const buttonElement = document.getElementById('ham_menu') !;
    const crossButtonElement = document.querySelector('.cross') !;
    const menuElement = document.querySelector('.menu-mobile') !;
    const body = document.querySelector('body') !;
    const hamBtnCallback = (): void=>{
        if(buttonElement !== null){
            menuElement.classList.add('menu-opened');
            body.style.overflow = 'hidden';
        }
    }

    const crossBtnCallback = (): void=>{
        if(crossButtonElement !== null){
            menuElement.classList.remove('menu-opened');
            body.style.overflow = 'auto';
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

}

export default function main(){
    eventListeners();
}

main();