const axios = require('axios')

axios
          .get('https://repods.io/api/markode/FIFAWorldCup/reports/5818', {
            auth: {
                username: '908ce8e1-95bc-43b7-a9f3-20512f2851b7',
                password: ''
            }
    }) // HTTP GET Request
          // .get('https://api.chucknorris.io/jokes/random')
          .then(response => {
            console.log('give me the result', response);
          })
          .catch(error => { // Executes if an error occurs if code is not >= 200 && < 300

          })
