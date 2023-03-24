// import IMask from "/imask";


let input = document.getElementById('input')
let btn  = document.getElementById('btnSubmit')

let table = document.getElementById('t_body')
let click_times = 0



// IMask

    


btn.addEventListener('click', ()=>{

    let link =  `https://viacep.com.br/ws/${input.value}/json`
    fetch(link)
    .then(responce => responce.json())
    .then(data => {
        refresh(data)
        
    })
    .catch(error => console.log(error))
})




function refresh(data){
    // alert(input.value)
    click_times+=1

    // cep.id = null
    // localidade.id = null
    // logradouro.id = null
    
    let cep_new = document.createElement('td')
    let localidade_new = document.createElement('td')
    let logradouro_new = document.createElement('td')
    let th = document.createElement('th')
    let row = document.createElement('tr')
   
    th.innerText = click_times
    th.scope = 'row'
    cep_new.innerText = data.cep
    localidade_new.innerText = data.localidade
    logradouro_new.innerText = data.logradouro



    row.append(th,cep_new,localidade_new,logradouro_new)
    

    table.appendChild(row)
}


