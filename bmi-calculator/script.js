// BMI: Body Mass Index
// Formula: BMI = kg/m2
// using a person's height and weight
// Chart:
// Underweight: < 18.5
// Normal: 18.5 - 24.9
// Overweight: 25 - 29.9
// Obese: 
//      Mid: 30 - 34.9
//      Moderate: 35 - 39.9
//      Morbid: < 40

function calculate() {
    var bmi;
    var result = document.getElementById('result');
    // Getting Input Values and Displaying them
    var weight = parseInt(document.getElementById('weight').value);
    var height = parseInt(document.getElementById('height').value);
    document.getElementById('weight-value').textContent = weight + ' Kg';
    document.getElementById('height-value').textContent = height + ' cm';

    // Calculating BMI using formula
    bmi = (weight / Math.pow((height/100), 2)).toFixed(1)

    if(bmi < 18.5) {
        result.textContent = `Under Weight ${bmi}`;
        result.style.color = '#ffc44d';
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        result.textContent = `Normal ${bmi}`;
        result.style.color = '#0be881';
    } else if(bmi >= 25 && bmi <= 29.9) {
        result.textContent = `Over Weight ${bmi}`;
        result.style.color = '#ff884d';
    } else {
        result.textContent = `Obese ${bmi}`;
        result.style.color = '#ff5e57';
    }
}