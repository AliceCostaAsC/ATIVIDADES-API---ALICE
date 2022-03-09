function buscar() {
    const CIDADE = document.querySelector("#cidade")

    const showData = (result) => {
        for (const campo in result) {
            result.text = document.getElementById("temp").value = result.main.temp
            result.text = document.getElementById("name").value = result.name
            result.text = document.getElementById("description").value = result.weather[0].description



        }
    }

    let search = document.getElementById("cidade").value

    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&lang=pt_br&appid=f18f8dcb2eea71b237819dd394fc1658`, options)
        .then(response => response.json())
        .then(data => showData(data))

    .catch(e => console.log('Houve um erro'))
}