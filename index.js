const dragArea = document.querySelector('.AppBody');
const text = document.querySelector('h3');
const myBtn = document.querySelector('button');
const input = document.querySelector('input');

let myFile ;

myBtn.addEventListener('click' , openFile);

function openFile(){
    input.click()
};

input.addEventListener('change' , function(){
    myFile = this.files[0];
    showMe()
});

dragArea.addEventListener('dragover' , (e) => {
    e.preventDefault();

    text.textContent = 'Upload file';

});

dragArea.addEventListener('dragleave' , (e) => {
    e.preventDefault();

    text.innerHTML = 'Drag & Drop'

});

dragArea.addEventListener('drop' , (e) =>{
    e.preventDefault()
    myFile = e.dataTransfer.files[0];
    showMe()


})

function showMe(){
    let fileType = myFile.type ;

    let valid = ['image/jpeg' , 'image/jpg' , 'image/png'];

    if( valid.includes (fileType)){

        let fileRead = new FileReader();

        fileRead.onload= () =>{
            let imgUrl = fileRead.result;
            let img = `<img src="${imgUrl}" alt="">`

            dragArea.innerHTML = img
        }

        fileRead.readAsDataURL(myFile);


    }else{
        alert('This file is not valid');
        text.innerHTML = 'Drag & Drop'
    }
}