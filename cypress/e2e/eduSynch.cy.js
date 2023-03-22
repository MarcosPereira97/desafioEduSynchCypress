context('EduSynch Challenge', () => {
  let information
  beforeEach(() => {
    cy.fixture('user')
      .then(c => {
        information = c
      })

    cy.visit('/')
  })
  it('CEFR Reading Test', () => {
    const data = information.listaUsuarios
    const alternatives = information.options

    cy.login(data.usuario, data.senha)
    cy.startCEFR()
    cy.takePhoto()
    cy.photoWithDoc()
    cy.roomScan()
    cy.infinitesNext()
    cy.selectReply(alternatives)
    cy.finishingTest()
    cy.backToHome()
  })
  it('CEFR Reading Test with Certificate', () => {
    const data = information.listaUsuarios
    const alternatives = information.options

    cy.login(data.usuario, data.senha)
    cy.startCEFR()
    cy.takePhoto()
    cy.photoWithDoc()
    cy.roomScan()
    cy.infinitesNext()
    cy.selectReply(alternatives)
    cy.finishingTest()
    cy.viewAnalysis()
    cy.generatingCertificate()
  })
})
