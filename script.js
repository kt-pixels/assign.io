const makePayment = document.getElementById('btnSbmit');
const paymentForm = document.getElementById('paymentForm');
const Usersinfo = document.getElementById('Usersinfo');


// function showReceiptForm() {
//     makePayment.addEventListener('click', function(){
//         if (paymentForm.style.display === 'none' || paymentForm.style.display === '') {
//             paymentForm.style.display = 'block'
//             Usersinfo.style.display = 'none'
//         }else{
//             paymentForm.style.display = 'none';
//             Usersinfo.style.display = 'block'
//         }
//     })
// }

// showReceiptForm()

function submitForm() {
    // Get form values and perform validation as needed
    const payerName = document.getElementById("payerName").value;
    const payerEmail = document.getElementById("payerEmail").value;

    // const submit = document.getElementById('Sbmitform');
    // Display receipt
        alert(`Money Receipt:
        Payer's Name: ${payerName}
        Payer's Email: ${payerEmail}`);
        
    // Clear the receipt form
    document.getElementById("Usersinfo").reset();

}

// FOR DROPDOWN BUTTON OF SERVICES 

function dropdown() {
    const dropDown = document.getElementById('dropdown');
    const dropbtn = document.getElementById('dropbtn');
    const icon = dropbtn.querySelector('i');

    dropbtn.addEventListener('click', function(){
        if (dropDown.style.display === 'none' || dropDown.style.display === '') {
            dropDown.style.display = 'block'
            icon.classList.remove = 'fa-angle-down'
            icon.classList.add = 'fa-angle-double-up'
        }
        else {
            dropDown.style.display = 'none'
        }
    })
}

dropdown();


// FOR HAMBURGER DROPDOWN

function hamburger() {
    const bars = document.querySelectorAll('.bars');
    const myNav = document.querySelector('.myNav');

    bars[0].addEventListener('click', function(){
        if (myNav.style.display === 'none' || myNav.style.display === '') {
            myNav.style.display = 'block'
            myNav.style.position = 'absolute'
            myNav.style.width = '-webkit-fill-available'
            myNav.style.zIndex = '1'
        }
        else{
            myNav.style.display = 'none'
        }
    })
}

hamburger();

// SCROLLING BUTTON 

function scrollbtn() {
    const scrollbutton = document.getElementById('scrollOnOrder');
    const Usersinfo = document.getElementById('Usersinfo');

    scrollbutton.addEventListener('click', function(){
        Usersinfo.scrollIntoView({behavior: "smooth"});
    })
}

scrollbtn();