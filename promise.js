// Promise Concepts.....

const step1 = document.querySelector('.one')
const step2 = document.querySelector('.two')
const step3 = document.querySelector('.three')
const step4 = document.querySelector('.four')
const step5 = document.querySelector('.five')
const step6 = document.querySelector('.six')
const step7 = document.querySelector('.seven')
const step8 = document.querySelector('.eight')



const Button = document.querySelector('.btn');



Button.addEventListener('click', () => {
    MakeBiryani(10000, step1,'block')
   
  
})


function MakeBiryani(time, element, effect) {
    return new Promise((resolve, reject) => {
        if (element) {
            
            setTimeout(() => {
                
                element.style.display = effect;
               step2.style.display = 'block';
               step3.style.display = 'block'
               setTimeout(() => {
                   step4.style.display='block'
                   step5.style.display = 'block'
                   step6.style.display = 'block'
                   setTimeout(() => {
                       step7.style.display = 'block';
                       step8.style.display = 'block'
                   }, 5000);
               }, 5000);
                
            }, time);
          
            resolve();
        }
        else{
            reject(new Error(`Hey something is Wrong!`))
        }
    })
}