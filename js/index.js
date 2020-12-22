'use strict';

{
    window.onload = () =>{
        let btn = document.querySelector('#button');
        let font = document.querySelectorAll('span');

        btn.onclick = () =>{
            let count = 0;
            console.log("開始");
            
            let fontCount = () => {

                font[count].classList.add('show');
                count ++;

                if (count===font.length) {
                    clearInterval(timer);
                    console.log("終了");
                }
            }

            let timer = setInterval(fontCount, 200);
        }
    }
}