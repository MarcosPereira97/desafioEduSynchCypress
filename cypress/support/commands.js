/// <reference types="cypress" />

Cypress.Commands.add('login', (user, pass) => {
    cy.get('#email')
        .should('be.visible')
        .type(user)
    cy.get('#password')
        .should('be.visible')
        .type(pass)
    cy.contains('button', 'Sign In')
        .click()
})
Cypress.Commands.add('startCEFR', () => {
    cy.contains('button', 'Start a CEFR Reading Test')
        .should('be.visible')
        .click()
    cy.contains('button', 'Next')
        .as('next')
        .click()
})
Cypress.Commands.add('takePhoto', () => {
    cy.contains('button', 'Click here to take a photo')
        .wait(500)
        .click({ force: true })
    cy.contains('button', 'Save')
        .click()
        .get('@next')
        .should('be.enabled')
        .click()
})
Cypress.Commands.add('photoWithDoc', () => {
    cy.get(':nth-child(2) > .css-uc660u > .MuiTypography-root')
        .click()
    cy.takePhoto()
    cy.takePhoto()
})
Cypress.Commands.add('roomScan', () => {
    cy.contains('button', 'Begin Room Scan')
        .should('be.enabled')
        .click()
    cy.get('@next')
        .should('be.enabled')
        .click()
})
Cypress.Commands.add('infinitesNext', () => {
    for (let n = 0; n < 8; n++) {
        cy.get('@next')
            .wait(500)
            .should('be.enabled')
            .click()
    }
    cy.contains('button', 'I understand and agree.')
        .should('be.enabled')
        .click({ force: true })
    for (let n = 0; n < 2; n++) {
        cy.contains('button', 'Continue')
            .as('continue')
            .wait(1000)
            .should('not.be.hidden')
            .and('be.enabled')
            .click()
    }
})
Cypress.Commands.add('selectReply', (alternatives) => {
    cy.get('.MuiContainer-root > :nth-child(2) > .MuiTypography-root')
        .invoke('text')
        .then(($question_qtd) => {
            let qtd = $question_qtd.replace('Question 1 of ', '')
            cy.wrap(qtd).as('qtd')
        })

    cy.get('@qtd').then(qtd => {
        for (let n = 0; n < qtd; n++) {
            const letter = Cypress._.sample(alternatives)

            cy.get('.css-p4ia69').then($body => {
                if ($body.find('.css-1aymzu7 > :nth-child(1) > .MuiAvatar-root').length > 0) {
                    //evaluates as true if button exists at all
                    cy.get('.css-1aymzu7 > :nth-child(1) > .MuiAvatar-root').then($header => {
                        if ($header.is(':visible')) {
                            //you get here only if button EXISTS and is VISIBLE
                            cy.get('#question .css-1aymzu7')
                                .within(() => {
                                    cy.contains('div', letter)
                                        .should('be.visible')
                                        .click()
                                })
                            cy.contains('button', 'Back')
                                .next()
                                .wait(500)
                                .click()
                        }
                    });
                } else {
                    //you get here if the button DOESN'T EXIST
                    cy.contains('button', 'Back')
                        .next()
                        .wait(500)
                        .click()
                }
            })
        }
    })
    cy.contains('button', 'Back')
        .next()
        .click()
})
Cypress.Commands.add('finishingTest', () => {
    cy.get('@continue')
        .click()
    cy.get('.css-76qi6u > .MuiBox-root')
        .should('not.be.visible')
    cy.get('.css-uibtbr')
        .then(($txt) => {
            expect($txt).to.be.visible
            expect($txt).to.have.text('This is the end of the section.')
        })
    cy.screenshot()
})
Cypress.Commands.add('backToHome', () => {
    cy.get('@continue')
        .click()
    cy.contains('span', 'Ready to know your English Level?')
        .should('be.visible')
})
Cypress.Commands.add('viewAnalysis', () => {
    cy.contains('button', 'Analysis')
        .should('be.visible')
        .click()
    cy.contains('button', 'View Report')
        .should('be.visible')
        .click()
})
Cypress.Commands.add('generatingCertificate', () => {
    cy.contains('button', 'Get your certificate')
        .should('be.enabled')
        .and('be.visible')
        .click()
    cy.get('.css-106nune')
        .then(($txt) => {
            expect($txt).to.be.visible
            expect($txt).to.have.text('Proficiency Achievement Certificate')
        })
    cy.screenshot()
})