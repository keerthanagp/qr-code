const qrText= document.getElementById('text');
const sizes= document.getElementById('sizes');
const generatebtn= document.getElementById('generatebtn');
const downloadbtn= document.getElementById('downloadbtn');
const qrContent = document.querySelector('.body');

let size = sizes.value;
generatebtn.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyInput();
    
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value; 
    isEmptyInput();
});

downloadbtn.addEventListener('click',()=>{
    let img= document.querySelector('.body img');
    if(img !== null){
        let imageAttri = img.getAttribute('src')
        downloadbtn.setAttribute("href", imageAttri)
    }
    else{
        downloadbtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
})
function isEmptyInput(){
    qrText.value.length >0 ? generateQrCode() :  alert('Text or Url is missing');

}



function generateQrCode(){
    qrContent.innerHTML="";
   new QRCode(qrContent, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: '#fff', 
        colorDark: '#000',
    });
}