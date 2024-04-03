/*
* File: hexadecagonter
* Author: Ács Bence
* Copyright: 2024, Ács Bence
* Group: Szoft-2-N
* Date: 2024-04-03
* Github: https://github.com/acsbence/
*/

const numberInput = document.getElementById('szam'); 
const parseButton = document.getElementById('parseButton'); 

parseButton.addEventListener("click", () => { 
    const szam = parseFloat(numberInput.value); 
    if (!isNaN(szam)) { 
        const area = (16 * szam * szam) / (4 * Math.tan(Math.PI / 16)); 
        console.log("A szabályos 16 szög területe: " + area); 
    } 
    else {
         console.log("Hiba! Kérem, adjon meg egy számot."); 
        } 
    });