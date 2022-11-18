 

const bulbSwitch = document.querySelector('#bulbSwitch');
const bulb = document.querySelector('#bulb');

bulbSwitch.addEventListener('click', function(){
    // console.log(bulb.src);
    bulb.src = './bulb-on.gif';
})
