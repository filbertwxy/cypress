// const navbarText = Cypress.env('navbarText')

// context('Coba dulu hehe', () => {
//   beforeEach(() => {
//     cy.visit('/commands/actions')
//   })
//   //     before(()=>{
//   //     cy.request('https://api.spaceXdata.com/v4/launches/past')
//   //     .its('status')
//   //     .should('eq',200)sss
//   // })

//   // it('pulls data from fixture file', () => {

//   //     cy.fixture('example.json').then((data) => {
//   //         console.log(data)
//   //     })
//   // })
//   // it('update data in fixture file', () => {
//   //     cy.fixture('example.json').then((data) => {
//   //         data.email = "filbert@gmail.com"
//   //         cy.log('updated data:', data)
//   //     })
//   // })

//   // it('set a token in local storage', () => {
//   //     cy.setlocalstorage('token','123abc')
//   //     cy.getlocalstorage('token').should('eq','123abc')
//   // })
//   // it ('has on h1 on page', () => {
//   //     cy.get('h1').should('have.text','Actions')
//   // })

//   // it ('should contain correct text under h1', () => {
//   //     cy.get('.container').eq(1).find('p').should('exist')
//   // })

//   // it('renders a section with a correct elemenst', () => {
//   //      cy.get('.container').eq(2).within(() => {
//   //         cy.get('h4').should('exist')
//   //         cy.get('p').should('exist')
//   //      })

//   // })
//   // it('show a email field', () => {
//   //     cy.get('.well').find('input[type="email"]').should('exist')

//   //     })

//   // it('render cypress link', () => {
//   //     cy.findByText(navbarText).should('exist')

//   //     })

//   it('should input email field', () => {
//     cy.visit('/commands/actions')
//     cy.get('.action-email').type('fake@email.com')
//     cy.get('.action-email').should('have.value', 'fake@email.com')
//     cy.wait(2000)
//     console.log('ini adalah pertanda pengujian sudah selesai')
//     fetch('https://api.spaceXdata.com/v4/launches/past')
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//   })
//   // it('show an active class on current page', () => {
//   //     cy.visit('commands/actions')
//   //     cy.get('.dropdown-menu').find('li').eq(2).should('have.class','active')

//   // })
//   // it('should not have an inactive class on active page', () => {
//   //     cy.visit('commands/actions')
//   //     cy.get('.dropdown-menu').find('li').first()
//   //     .should('not.have.class','active')
//   //     .find('a')
//   //     .should('have.attr','href')
//   //     .and('include','/commands/querying')

//   // })
//   //     it('LINK TO THE ACTION PAGE', () => {
//   //         cy.visit('/')
//   //         cy.findAllByText('Commands').first().click()
//   //         cy.findAllByText('Actions').eq(0).wait(2000).click()
//   //         cy.url().should('include','/commands/actions')
//   //         cy.findByPlaceholderText('Email').type('test').should('have.value','test')

//   //     })

//   it('clear an input field', () => {
//     cy.visit('/commands/actions')
//     cy.findByPlaceholderText('Email').type('test').should('have.value', 'test')
//     cy.wait(2000)
//     cy.findByPlaceholderText('Email').clear().should('have.value', '')
//   })
//   //     it('click a checkbox', () => {
//   //         cy.visit('/commands/actions')
//   //         cy.get('.action-checkboxes').find('input[type="checkbox"]').first().check().should('be.checked')
//   //         cy.wait(2000)
//   //         cy.get('.action-checkboxes').find('input[type="checkbox"]').first().uncheck().should('not.be.checked')

//   //     })

//   //     it('shows active class on current page', () => {
//   //         cy.visit('/commands/actions')
//   //         cy.get('.dropdown-menu').find('li').eq(2).should('have.class','active')

//   //     })

//   //     it('links to the action page', () => {
//   //         cy.visit('/')
//   //         cy.findAllByText('Commands').first().click()
//   //         cy.findAllByText('Actions').eq(0).wait(2000).click()
//   //         cy.url().should('include','/commands/actions')
//   //         cy.findByPlaceholderText('Email').type('test').should('have.value','test')

//   // })

//   //         it('type in the input field', () => {
//   //         cy.visit('/commands/actions')
//   //         cy.findByPlaceholderText('Email').type('test').should('have.value','test')
//   //         cy.wait(2000)
//   //         cy.findByPlaceholderText('Email').clear().should('have.value','')

//   // })
//   //         it('check and uncheck the checkbox', () => {
//   //         cy.visit('/commands/actions')
//   //         cy.get('.action-checkboxes').find('input[type="checkbox"]').first().check().should('be.checked')
//   //         cy.wait(2000)
//   //         cy.get('.action-checkboxes').find('input[type="checkbox"]').first().uncheck().should('not.be.checked')
//   //         })

//   //     })
// })
