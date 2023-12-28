/**
 * Here what we have done that taken the id counter and stored into the countValue;
 */
//const countValue = document.querySelector('#counter')

/**
 * And we have created the increament function which have the logic of increasing the value + one, and updating the value with the newValue;
 */

// const increament = () =>{
//     // get the value from the UI
//     let value = parseInt(countValue.innerText);
//     // increase the valsue 
//     value = value + 1;
//     // and then update the orginal value from the new value
//     countValue.innerText = value;

// };

/**
 * And there is another logic of decreasing the value by one and after that updating the text of the countValue
 */

// const decreament = () =>{
//      // get the value from the UI
//      let value = parseInt(countValue.innerText);
//      // decrease the value 
//      value = value - 1;
//      // and then update the orginal value from the new value
//      countValue.innerText = value;
// };


//***********************************NEW CODE BEGINS***************/


/**
 * Same we are trying to do with the eventListener
 */

const element = document.getElementById('counter');

// increasing the counter

const sumElement = document.getElementById('sum');

//console.log(sumElement);

sumElement.addEventListener('click',function(){
    let value = parseInt(element.innerText);

    value = value + 1;
    
    element.innerText = value;

})

const minusElement = document.getElementById('minus');

//console.log(minusElement);

minusElement.addEventListener('click',function(){
    let value = parseInt(element.innerText);

    value = value - 1;
    
    element.innerText = value;

})
























