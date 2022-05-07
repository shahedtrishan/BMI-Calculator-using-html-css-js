const btn = document.getElementById('button');


btn.addEventListener('click', function() {

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if (height == '' || weight == '') {
        alert('Please fill the information asked');
        return;
    }

    height = height / 100

    let BMI = (weight / (height * height));

    BMI = BMI.toFixed(2);

    document.querySelector('#rs').innerHTML = BMI;

    let status = "";

    if (BMI < 18.5) {
        status = "Underweight";
    }
    if (BMI >= 18.5 && BMI < 25) {
        status = "Healthy";
    }
    if (BMI >= 25 && BMI < 30) {
        status = "Overweight";
    }
    if (BMI >= 30) {
        status = "Obese";
    }
    document.querySelector(
        ".comment"
    ).innerHTML = `Comment: you are <span id="comment">${status}</span>`;







});
