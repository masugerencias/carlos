export default {
    getLastestFilms() {
        let slides = [
            'First',
            'Second',
            'Third',
            'Fourth',
            'Fifth',
        ]
        return slides
    },
    getColors() {
        let colors = [
            'primary',
            'succes',
            'dark',
            'error',
            'pink lighten-1'
        ]
        return colors
    },

    getPokemon(id) {

        let resultadoBusqueda =
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(response => response.json())
                .then(responseJson => { return responseJson });
        return resultadoBusqueda.then(data => { return data })
    }
}

//no sabemos como vienen y los queremoms en .json.
//el fetch no sabe como vienen.
//en el segundo then es donde empezamos a utilizarlas. Es mi dato que he traido pero
//convertido en json.