let myName = "Lyewerton João da Silva"
document.getElementById("myName").innerHTML = `<i>${myName}</i>`

let description = "Prazer, me chamo lyewerton e sou estudante de Análise e Desenvolvimento de Sistemas pela faculdade Uniasselvi. Procuro um trabalho no meio de Desenvolvimento Web, onde eu já possuo um pouco de conhecimento."
document.getElementById("description").innerHTML = `<i>${description}</i>`

let descriptionInEn = "Hey, my name is lyewerton and I am a student of Systems Analysis and Development at Uniasselvi College. I'm looking for a job in the Web Development environment, where I already have a little knowledge."
function changeLangEn(){
     document.getElementById("description").innerHTML = `<i>${descriptionInEn}</i>`
    }

function changeLangPT(){
    document.getElementById("description").innerHTML = `<i>${description}</i>`
}

function changeLangEn2(){
    document.getElementById("knowledge").innerHTML = `<i>${knowledgeInEn}</i>`
   }

function changeLangPT2(){
    document.getElementById("knowledge").innerHTML = `<i>${knowledge}</i>`
   }

document.querySelector('.changeColor').addEventListener('click', (e) => {
    e.target.classList.toggle('.changeColor-checked')
})

let knowledge = "Linguagens utilizadas"
let knowledgeInEn = "technologies used"
document.getElementById("knowledge").innerHTML = `<i>${knowledge}</i>`

let tecs = "HTML, CSS e JavaScript"
document.getElementById("tec").innerHTML = `<i>${tecs}</i>`