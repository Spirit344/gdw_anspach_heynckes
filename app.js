const request = require('request')
const express = require('express')

const app = express()


app.get('/', (req, res) => {

    if (!req.query.search) {
        return res.send('Please provide a search string...')
    }

    //API Test for spoonacular.com
    const url = 'https://api.spoonacular.com/recipes/search?query=' + encodeURIComponent(req.query.search) + '&apiKey=1efb2f9ae6864354b18067f277cc45dd'

    //API Test for giphy.com
    //const url = 'http://api.giphy.com/v1/gifs/search?q=' + encodeURIComponent(req.query.search) + '&api_key=Ac6NWESPeT4EIELIPVaPprpWOExfiKul'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            return res.send('Unable to connect.')
        }
        res.send(body)
    })
})

app.listen(3000, () => {
    console.log('Server is up!')
})

//Teste im Browser mit http://localhost:3000/?search=rice zum Beispiel