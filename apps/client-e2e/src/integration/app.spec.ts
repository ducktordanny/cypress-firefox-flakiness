describe('client', () => {
  beforeEach(() => cy.visit('/'));

  it('should type something', () => {
    cy.get('[data-test-id="name-input"]').type('This is a test...')
  });
});
