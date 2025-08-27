context('Coba dulu hehe', () => {
  beforeEach(() => {
    cy.visit('/commands/actions')
  })

  it('should click canvas', () => {
    cy.get('#action-canvas').click(80, 75)
    cy.get('#action-canvas').click(170, 75)
  })

  it('should double click canvas', () => {
    cy.get('#action-canvas').dblclick(80, 75)
    cy.get('#action-canvas').dblclick(170, 75)
  })

  it('should right click canvas', () => {
    cy.get('#action-canvas').rightclick(80, 75)
    cy.get('#action-canvas').rightclick(170, 75)
  })

  it('show the nav links on hover', () => {
    cy.get('.dropdown-toggle').trigger('mouseover')
    cy.wait(5000)
  })
})
