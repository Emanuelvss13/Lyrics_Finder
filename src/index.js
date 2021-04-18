var inpaut = document.getElementById('inp-')
var inpmsc = document.getElementById('inp--')
var div = document.getElementById('letra-')
var btn = document.getElementById('btn-')

btn.addEventListener("click", async () => {
    await axios.get(`https://api.vagalume.com.br/search.php?art=${inpaut.value.replace(/\s/, '%20')}&mus=${inpmsc.value.replace(/\s/, '%20')}`)
    .then(resp => {
        console.log(resp)
        div.innerText = resp.data.mus[0].text
    })
    .catch( (e) => {
        div.innerText = "Música não encontrada"
    } )
})

