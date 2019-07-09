const calculation = document.querySelector('#answer')
const clearNum = document.querySelector('#clear-all')

const numZero = document.querySelector('#num-button-0')
const numOne = document.querySelector('#num-button-1')
const numTwo = document.querySelector('#num-button-2')
const numThree = document.querySelector('#num-button-3')
const numFour = document.querySelector('#num-button-4')
const numFive = document.querySelector('#num-button-5')
const numSix = document.querySelector('#num-button-6')
const numSeven = document.querySelector('#num-button-7')
const numEight = document.querySelector('#num-button-8')
const numNine = document.querySelector('#num-button-9')
const opAdd = document.querySelector('#op-button-add')
const opSubtract = document.querySelector('#op-button-subtract')
const opMultiply = document.querySelector('#op-button-multiply')
const opDivide = document.querySelector('#op-button-divide')
const opEqual = document.querySelector('#op-button-equal')
const numDecimal = document.querySelector('#op-button-decimal')

clearNum.addEventListener('click', function () {
    calculation.value = ""
  })
  

numDecimal.addEventListener('click', function () {
    calculation.value += numDecimal.value
  })

numZero.addEventListener('click', function () {
    calculation.value += numZero.value
  })

numOne.addEventListener('click', function () {
    calculation.value += numOne.value 
  })
  
numTwo.addEventListener('click', function () {
    calculation.value += numTwo.value 
  })

numThree.addEventListener('click', function () {
    calculation.value += numThree.value 
  })

numFour.addEventListener('click', function () {
    calculation.value += numFour.value 
  })

numFive.addEventListener('click', function () {
    calculation.value += numFive.value 
  })

numSix.addEventListener('click', function () {
    calculation.value += numSix.value 
  })

numSeven.addEventListener('click', function () {
    calculation.value += numSeven.value 
  })

numEight.addEventListener('click', function () {
    calculation.value += numEight.value 
  })

numNine.addEventListener('click', function () {
    calculation.value += numNine.value 
  })

opAdd.addEventListener('click', function () {
    calculation.value += opAdd.value 
  })

opSubtract.addEventListener('click', function () {
    calculation.value += opSubtract.value 
  })

opMultiply.addEventListener('click', function () {
    calculation.value += opMultiply.value 
  })

opDivide.addEventListener('click', function () {
    calculation.value += opDivide.value 
  })

opEqual.addEventListener('click', function () {
    const currString = calculation.value
    calculation.value = eval(currString)
  })