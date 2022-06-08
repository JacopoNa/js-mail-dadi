
// e-mail list 
const listMail = ['pinco.pallo@alice.it', 'pinco.pallo@virgilio.it', 'pinco.pallo@hotmail.it', 'pinco.pallo@gmail.com']

// ask user e-mail and validation
const newButton = document.getElementById('submit')

// at the click
newButton.addEventListener ('click',
        function() {
            // validation
            let userMail = document.getElementById('user-mail').value

            // check list
            let rightMail = false

            for( let i = 0; i < listMail.length; i++ ) {
                let singleMail = listMail[i]

                if (userMail === singleMail) {
                    rightMail = true
                } 
            }

            // rightMail true or false --> output message
            if (rightMail) {
                document.getElementById('title').innerHTML = 'Benvenuto!'
            } else {
                document.getElementById('title').innerHTML = 'La mail non è corretta, riprovare.'
            }
            
        }
    )
