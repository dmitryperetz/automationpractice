describe(
    'Loading Web Site' , () => {
        it('Load website',() => {
            let env = process.env.CONFIG
            var envVars = require('../envs/'+ env+ '.js');
            var url = envVars.config.mainUrl;
            console.log('Main url = ', url)
            browser.url(url)
            browser.maximizeWindow()
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
            expect(browser).toHaveTitle('Summer Dresses - My Store')
        })
        it('Select Printed Summer Dress', () => {
             $('//body[1]/div[1]/div[2]/div[1]/div[3]/div[2]/ul[1]/li[1]/div[1]/div[1]/div[1]/a[1]/img[1]').moveTo()
             browser.pause(2000)
            
        })
        it('Click Quick View ', () => {
            $('//body[1]/div[1]/div[2]/div[1]/div[3]/div[2]/ul[1]/li[1]/div[1]/div[1]/div[1]/a[2]/span[1]').click()
            browser.pause(5000)
        })
        
        it('click On Size Options ', () => {
            let frame = $("//iframe")
            browser.switchToFrame(frame)
            browser.pause(1000)
            // $('div[class="attribute_list"]').$('select').$('option=S').click()
            let selectBox = $('div[class="attribute_list"]').$('select')   
            selectBox.selectByVisibleText('M');
            browser.pause(2000)
            $('button[type="submit"]').$('span=Add to cart').click()
            browser.switchToParentFrame()
            browser.pause(5000)
        })

        it('Click on Continue Shopping Button' , () => {            
            $('span[title="Continue shopping"]').click()
            browser.pause(3000)
        })

        it('Card Hover' , () => {            
            $('a[title="View my shopping cart"]').moveTo()
            browser.pause(1000)
        })

        it('Card Checkout' , () => {            
            $('#button_order_cart').click()
            browser.pause(3000)
        })

        it('Process to Checkout' , () => {            
            //$('//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/p[2]/a[1]/span[1]').click()
            let procBtn = $('#columns').$('a[title="Proceed to checkout"]')
            procBtn.click()
            browser.pause(5000)
        })

        it('Create New Account With Email' , () => { 
            const newemail = Math.random().toString(36).substring(2,7)  
            $('#email_create').addValue(newemail+'@fakedomain.com')
            browser.pause(2000)
            $('#SubmitCreate').click()
            browser.pause(5000)
            
        })

        it('Fill in Mandatory Fields ' , () => {   
            
            $('div[class="radio"]').$('#id_gender1').click()
            $('#customer_firstname').addValue('Dmitry')
            $('#customer_lastname').addValue('Peretz')
            $('#passwd').addValue('qwerty')
            $('#days').selectByAttribute('value', '15')
            $('#months').selectByAttribute('value', '5')
            $('#years').selectByAttribute('value', '1987')
            $('#firstname').addValue('Dmitry')
            $('#lastname').addValue('Peretz')
            $('#address1').addValue('5 Jays Drive')
            $('#city').addValue('Whitby')
            $('#id_state').selectByAttribute('value', '5')
            browser.pause(2000)
            $('#postcode').addValue('12345')
            $('#phone_mobile').addValue('6478775544')
            $('#submitAccount').click()
            browser.pause(5000)

        })
        it('Process to Checkout' , () => {            
            $('//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/form[1]/p[1]/button[1]').click()
            browser.pause(5000)
        })
        it('Terms of Service and Process to Checkout ' , () => {            
            $('div[class="checker"]').$('#cgv').click()
            browser.pause(1000)
            $('//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/p[1]/button[1]').click()
            browser.pause(5000)

        })

        it('Pay by Check' , () => {            
            $('//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]/div[3]/div[2]/div[1]/p[1]/a[1]/span[1]').click()
            browser.pause(2000)
            $('//body[1]/div[1]/div[2]/div[1]/div[3]/div[1]/form[1]/p[1]/button[1]/span[1]').click()
            browser.pause(10000)
            
        })

        




        
       

    }
)
