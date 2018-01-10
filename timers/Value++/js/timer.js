//It's universal function that does not require an individual reference to an element

let list = document.getElementsByTagName('span'); //create array which consist of every <span>

for (let i = 0; i < list.length; i++) {

    let number = Number(list[i].textContent); //get value of each item from array
    let container = list[i]; //and use it like a container for new value

    setInterval(function () {
        container.innerHTML = number++; //at last increase the value in each <span>
    }, 1000); // for 1 second
}

//Appreciate my work if it deserve it!
//Created with love, good luck!