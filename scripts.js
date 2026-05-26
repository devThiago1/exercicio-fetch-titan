const inputCep = document.getElementById("cep")
const btnCep = document.getElementById("btnCep")
const resultadoCep = document.querySelector(".resultadoCep")

btnCep.addEventListener("click", handleClick)

function handleClick(event) {
  event.preventDefault()
  const cep = inputCep.value.trim()
  searchCep(cep)
}

function searchCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((data) => {
      resultadoCep.innerText = data
    })
    .catch((error) => {
      console.error("Erro ao buscar o CEP:", error)
    })
}

const btcElement = document.querySelector(".btc")

function fetchBtc() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("lastBtcPrice", data.USD.last)

      btcElement.innerText = `Preço do Bitcoin em USD: $${data.USD.last.toFixed(2)}`
    })
    .catch((error) => {
      console.error("Erro ao buscar o preço do Bitcoin:", error)
    })
}
setInterval(fetchBtc, 5000)
fetchBtc()
