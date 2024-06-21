const result = document.getElementById('result');
const calculateBmi = () => {
    const age = document.getElementById('age').value;
    const weight = parseFloat(document.getElementById('weight').value/100);
    const height = parseFloat(document.getElementById('height').value/100);

    if(isNaN(age) || age <=0){
        result.textContent = "Please Enter A Valid Age";
        return;
    }

    if(isNaN(weight) || weight <=0){
        result.textContent = "Please Enter A Valid Weight";
        return;
    }

    if(isNaN(height) || height <= 0){
        result.textContent = "Please Enter A Valid Height";
        return;
    }

   const bmi = weight / (height * height);
   const bmiCatagory = getBmiCatagory(bmi);

   result.innerHTML = `
        <p>Your Age is: ${age}</p>
        <p>Your weight is: ${weight}</p>
        <p>Your height is: ${height}</p>
        <p>Your BMI is: ${bmi.toFixed(1)}</p>
        <p>BMI: ${bmiCatagory} </p>
   `                 //innterHtml because we add tag
}

const getBmiCatagory = (bmi) => {
    if(bmi < 18.5){
        return 'Under weight';
    }else if(bmi >= 18.5 && bmi <25){
        return 'Normal Weight';
    }else if(bmi >= 25 && bmi <30){
        return 'Over Weight';
    }else{
        return 'Obesity';
    }
}
