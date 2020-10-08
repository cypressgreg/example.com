describe('example.com', () => {
	beforeEach(() => {
		cy.visit('https://example.com')
	})

	it('has Example Domain as header2', () => {
		
		cy.get('h1').should('contain', 'Example Domain')
	})

	it('has More Information link', () => {
		cy.get('a')
		.should('contain', 'More information...')
		.and('have.attr', 'href', 'https://www.iana.org/domains/example')

		cy.noop()
	})

	describe('text', () => {
		beforeEach(() => {
			cy.wait(2000)
		})

		it('a', () => {
			// asdf
		})

		it('b', () => {

		})

		it('d', () => {})
	})

})