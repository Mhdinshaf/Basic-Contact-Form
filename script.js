const form=document.getElementById('contactForm');
const successMsg=document.getElementById('success-msg');

form.addEventListener('submit',
    function(e){

        e.preventDefault();
        
        successMsg.style.display='block';
        successMsg.innerText="Message Sent Successfully!";

        setTimeout(()=>{
                successMsg.style.display='none';
        },3000);

    });