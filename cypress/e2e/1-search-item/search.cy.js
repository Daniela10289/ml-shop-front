describe('Búsqueda de items', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        // Verificando que el header se renderice correctamente

    })
    
    it('Validar que se renderice correctamente el sitio', () => {
        // Verificando que siempre existan las etiquetas principales
        cy.get('.logo').should('be.visible')
        cy.get('.search').should('be.visible')
        cy.get('.search').should('have.attr', 'placeholder', 'Nunca dejes de buscar')
        cy.get('#search-button').should('be.visible')
    })

    it('Flujo de usuario - búsqueda, lista y detalle de item', () => {
        // Escribiendo en el buscador el parámetro de búsqueda
        cy.get(".search").type("Funko pop")

        // Haciendo clic en el botón de buscar
        cy.get('#search-button').click()

        // Verificando que exista la categoría especifica del item
        cy.get('[role=categories-ul] li').last().should('have.text', "Muñecos y Figuras de Acción")

        // Categorías visibles
        cy.get('[role=categories-ul]').should('be.visible')

        // Imagenes visibles
        cy.get('[role=img-id]').should('be.visible')

        // Verificando que cada cards tenga un item
        cy.get('.cards .items').should('be.visible')

        // Seleccionado un item para ver el detalle
        cy.get('.link-item').first().click()

        // Categorias del detalle visibles
        cy.get('[role=categories-ul]').should('be.visible')

        // Verificando la categoría del detalle del item
        cy.get('[role=categories-ul] li').last().should('have.text', "Muñecos y Figuras de Acción")

        // Imagen de detalle del item visible
        cy.get('[role=img-id]').should('be.visible')

        // Botón de compra visible
        cy.get('[role=button-detail]').should('be.visible')

        // Verificando la descripción del producto
        cy.contains("Descripción del producto")
        
    })
})