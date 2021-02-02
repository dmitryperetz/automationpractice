describe(
    'Loading Web Site' , () => {
        it('Load website',() => {
            let env = process.env.CONFIG
            var envVars = require('../envs/'+ env+ '.js');
            var url = envVars.config.mainUrl;
            console.log('Main url = ', url)
            browser.url(url)
            //browser.maximizeWindow()
            browser.pause(5000)
            expect(browser).toHaveUrl(url + '/index.php')
            expect(browser).toHaveTitle('My Store')
        })
        it('Move to Women section', () => {          
            $('//a[@title="Women"]').moveTo()
            browser.pause(2000)
        })
        it('Select Summer Dresses', () => {
            $('//a[@title="Summer Dresses"]').click()  
            browser.pause(5000)
            expect(browser).toHaveTitle('Summer Dresses') //error expected
        })

    })