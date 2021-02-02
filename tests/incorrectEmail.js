describe(
    'Wrong Email' , () => {
        it('Load website',() => {
            let env = process.env.CONFIG
            var envVars = require('../envs/'+ env+ '.js');
            var url = envVars.config.createAccountEmail;
            console.log('createAccountEmail = ', url)
            browser.url(url)
            //browser.maximizeWindow()
            browser.pause(5000)
            expect(browser).toHaveUrl(url)
            
        })
        it('create new account with email' , () => { 
                const newemail = Math.random().toString(36).substring(2,7)  
                $('#email_create').addValue(newemail+'fakedomain.com')
                browser.pause(2000)
                $('#SubmitCreate').click()
                browser.pause(5000)
                expect(browser).toHaveTitle('Login - My Store')
                browser.pause(10000)
                
            })

    })