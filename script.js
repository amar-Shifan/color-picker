
const resultElement = document.getElementById('result');
    let form = document.getElementById('response');
    let frame = document.getElementById('frame');
    let image = document.getElementById('image');
    let copied = document.getElementById('copied');
    let file = document.getElementById('file');
 

document.getElementById('pick').addEventListener("click", () =>{
    
    const eyeDroper = new EyeDropper();

    file.style.display = 'none';

    eyeDroper
    .open()
    
    .then((result)=>{

        resultElement.textContent = result.sRGBHex;
        let colors = result.sRGBHex;

        let colorContainer = document.createElement("div");

        resultElement.appendChild(colorContainer);

        colorContainer.classList.add("color");
        colorContainer.style.background = colors;

        let newElement ='<div><i class="fa-regular fa-copy"></i></div>';

        resultElement.insertAdjacentHTML('beforeend',newElement);

        resultElement.addEventListener('click',()=>{
            console.log("working copy")
            navigator.clipboard.writeText(colors);
            copied.style.display = 'flex';

            setTimeout(()=>{
                copied.style.display = 'none'
            },2000)
        })      
        
    })
})


function sample(){
    image.style.display = 'flex'
}

function preview(event){
    console.log(event,'event')
    frame.src=URL.createObjectURL(event.files[0]);
}
