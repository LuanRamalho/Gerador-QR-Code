const wrapper = document.querySelector(".wrapper"),
    genbtn = document.querySelector(".form button"),
    qrinput = document.querySelector(".form input"),
    qrimg = document.querySelector(".qr_code img");


genbtn.addEventListener("click",() =>{
    let qrvalue = qrinput.value;

    // console.log(qrvalue);

    genbtn.innerHTML="Please Wait..";

    qrimg.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;

    qrimg.addEventListener("load",() =>{
        wrapper.classList.add("active");

        genbtn.innerHTML = "Gerado com Sucesso";
    })
});


qrinput.addEventListener("keyup",()=>{
    wrapper.classList.remove("active");
    genbtn.innerHTML = "Gerar QR Code";
});