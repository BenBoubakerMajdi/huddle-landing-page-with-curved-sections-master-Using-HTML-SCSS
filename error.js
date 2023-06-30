const input = document.getElementById('sub_input');
const btn = document.getElementById('sub_btn');
const error = document.getElementById('sub_error');

function validateEmail(email) {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
}

btn.addEventListener('click',() => {
    let email = input.value;
    if( ! validateEmail(email) ) {
        error.style.display = "block";
        input.style.border = "0.0625rem solid hsl(0, 100%, 63%)";
    }
    else {
        error.style.display = "none";
        input.style.border = "0.0625rem solid #fff";

    }
});