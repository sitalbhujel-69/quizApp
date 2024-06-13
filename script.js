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
    disable(false)
    remove()

}

function show(data){
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
        element.addEventListener("click",(e)=>{
            if(e.target.innerHTML == data[0].correctAnswer){
                e.target.classList.add("green")
                num.innerHTML = parseInt(num.innerHTML)+1

                }
            else{
                e.target.classList.add("red")
            }
        disable(true)
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

        else if(e.classList.contains('red')){
            e.classList.remove('red')
        }
    })
}
next.addEventListener("click",getdata)