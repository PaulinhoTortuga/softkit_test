let blocks = document.querySelectorAll('.block');

function random(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let blueBlocksCount = 0;
function generateBlueBlocks(){
    blueBlocksCount = 0;
    blocks.forEach((e) => {
        console.log("random" ,random(0, 1));

        if(blueBlocksCount === 3){
            return;
        }
        if(random(0, 1)){
            blueBlocksCount++;
            e.classList.add("blue");
        }
        console.log("generate", blueBlocksCount);
    });
}
generateBlueBlocks();
let button = document.querySelector('.button');

blocks.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle("border");
    });
})

button.addEventListener('click', () => {
    let count = 0;  
    blocks.forEach((b) => {
        if(b.classList.contains('blue') && b.classList.contains('border')){
            count++;
        }
    });
    console.log(count);
    console.log(blueBlocksCount);

    if (count === blueBlocksCount){
        alert('success')
        blueBlocksCount = 0;
        generateBlueBlocks();
    }  else {
        alert('error')
    }
    removeBorder();

})

function removeBorder(e){
    blocks.forEach((e) => {
            e.classList.remove("border");
    });
}
