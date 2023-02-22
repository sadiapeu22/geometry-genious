document.getElementById('first-card').addEventListener('click', function(){
    // console.log(e.target);
        const triangleFirstInput = document.getElementById('triangle-input-first-value');
        const inputFirstValue = triangleFirstInput.value;
        // console.log(inputFirstValue);
        const triangleSecondInput = document.getElementById('triangle-input-second-value');
        const inputSecondInput = triangleSecondInput.value;
        // console.log(inputSecondInput);
         const newTotalCalculate = ( 0.5 * inputFirstValue * inputSecondInput) ;
        //  console.log(newTotalCalculate);
        const finalCalculationArea = document.getElementById('amount-area');
        const finalValueTotal = finalCalculationArea.innerText;
        finalCalculationArea.innerText = newTotalCalculate;

    // console.log(triangleFirstName.innerText);
})

// 2nd card
document.getElementById('second-card').addEventListener('click', function(){
    const rectangleFirstInput = document.getElementById('rectangle-first-input');
    const inputFirstValueRectangle = rectangleFirstInput.value;

    const rectangleSecondInput = document.getElementById('rectangle-second-input');
    const inputSecondInputRectangle = rectangleSecondInput.value;

    const newRectangleTotalCalculate = inputFirstValueRectangle * inputSecondInputRectangle;

    const finalRectangleArea = document.getElementById('rectangle-area');
    const finalRectangleTotal = finalRectangleArea.innerText;
    finalRectangleArea.innerText = newRectangleTotalCalculate;


})

// 3rd card

document.getElementById('third-card').addEventListener('click', function(){
    const parallelogramFirstValue = document.getElementById('parallelogram-first-value');
    const inputParallelogramFirstValue =  parallelogramFirstValue.innerText;
    const thirdInputValue = parseFloat(inputParallelogramFirstValue);

    const parallelogramSecondValue = document.getElementById('parallelogram-second-value');
    const inputParallelogramSecondValue = parallelogramSecondValue.innerText;
    const thirdSecondInputValue = parseFloat(inputParallelogramSecondValue);
    const newTotalValueParallelogram = thirdInputValue * thirdSecondInputValue;

    const findCalculationParallelogram = document.getElementById('parallelogram-area');
    const finalValueParallelogram = findCalculationParallelogram.innerText;
    findCalculationParallelogram.innerText = newTotalValueParallelogram;


})

// 4th card
document.getElementById('fourth-card').addEventListener('click', function(){
    const rhombusFirstValue = document.getElementById('rhombus-first-value');
    const inputRhombusFirstValue = rhombusFirstValue.innerText;
    const fourthInputValue = parseFloat(inputRhombusFirstValue);

    const rhombusSecondValue = document.getElementById('rhombus-second-value');
    const inputRhombusSecondValue = rhombusSecondValue.innerText;
    const fourthSecondValue = parseInt(inputRhombusSecondValue);
    const newTotalValueRhombus = 0.5 *  fourthInputValue * fourthSecondValue;

    const findCalculationRhombus = document.getElementById('rhombus-area');
    const finalValueRhombus = findCalculationRhombus.innerText;
    findCalculationRhombus.innerText= newTotalValueRhombus;

})

// 5th card

document.getElementById('fifth-card').addEventListener('click', function(){
    const pentagonFirstValue = document.getElementById('pentagon-first-value');
    const inputPentagonFirstValue = pentagonFirstValue.innerText;
    const fifthInputValue = parseFloat(inputPentagonFirstValue);

    const pentagonSecondValue = document.getElementById('pentagon-second-value');
    const inputPentagonSecondValue = pentagonSecondValue.innerText;
    const fifthSecondValue = parseFloat(inputPentagonSecondValue);
    const newTotalValuePentagon = 0.5 * fifthInputValue  * fifthSecondValue;

    const findCalculationPentagon = document.getElementById('pentagon-area');
    const finalValuePentagon =  findCalculationPentagon.innerText;
    findCalculationPentagon.innerText = newTotalValuePentagon;
})

// 6th card

document.getElementById('sixth-card').addEventListener('click', function(){
    const ellipseFirstValue = document.getElementById('ellipse-first-value');
    const inputEllipseFirstValue = ellipseFirstValue.innerText;
    const sixthInputValue = parseFloat(inputEllipseFirstValue);

    const ellipseSecondValue = document.getElementById('ellipse-second-value');
    const inputEllipseSecondValue = ellipseSecondValue.innerText;
    const sixthSecondValue = parseFloat(inputEllipseSecondValue);
    const newTotalValueEllipse = 3.14 * sixthInputValue * sixthSecondValue;

    const findCalculationEllipse = document.getElementById('ellipse-area');
    const findValueEllipse = findCalculationEllipse.innerText;
    findCalculationEllipse.innerText = newTotalValueEllipse;
})
