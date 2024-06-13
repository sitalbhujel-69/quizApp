const API = "https://the-trivia-api.com/api/questions?limit=10"
const question = document.querySelector("#question")
const answers = document.querySelectorAll(".answer-btn")
const score = document.querySelector("#num")

const next = document.getElementById("next")


const getdata =async  ()=>{
    let response = await fetch(API)
    let data = await response.json()
    show(data)
    check(data)
    remove()
    disable(false)
    next.disabled = true

}

function show(data){
    console.log(data[0])
    let ans = [...data[0].incorrectAnswers,data[0].correctAnswer]
    let ans2 = ans.sort()
    console.log(ans2)
    question.textContent = data[0].question
    for(let i=0;i<4;i++){
        answers[i].innerHTML = ans2[i]
    }

}
let click = 0
function check(data){
    
    answers.forEach((element)=>{
        let correct = data[0].correctAnswer
        
        element.addEventListener("click",(e)=>{
            if(e.target.innerHTML == correct){
                remove()
                e.target.classList.add("green")
                num.innerHTML = parseInt(num.innerHTML)+1
                }
            else{
                remove()
                e.target.classList.add("red") 
                some(data)
                
            }
        disable(true)
        next.disabled = false
        })
    })
}

getdata()
function disable(para){
    answers.forEach((element)=>{
        element.disabled = para
    })
}
function remove(){
    answers.forEach((e)=>{
        if(e.classList.contains("green")){
            e.classList.remove("green")
        }

         if(e.classList.contains('red')){
            e.classList.remove('red')
        }
    })
}
function some (data){
    for(let i = 0; i<4;i++){
        if(answers[i].innerHTML == data[0].correctAnswer){
            answers[i].classList.add("green")
        }
    }
}
next.addEventListener("click",getdata)
