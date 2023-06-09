describe('Testes de e2e - Nota', () => {
    beforeEach(() => {
      // Executar as ações necessárias antes de cada caso de teste, como limpar o estado, fazer login, etc.
    });
  
    it('Deve calcular a média final corretamente', () => {
      const nota = new Nota('Matemática', 7, 8, 6);
      
      // Acessar a página ou a funcionalidade relacionada à nota
      
      // Realizar as ações necessárias para preencher os campos ou simular a entrada de dados
      
      // Executar a ação que calcula a média final
      
      // Verificar se o resultado exibido corresponde à média final esperada
      cy.get('#resultadoMedia').should('contain', '7.4');
    });
  
    it('Deve retornar o conceito "MM - Médio" para uma nota entre 5.0 e 6.9', () => {
      const nota = new Nota('Português', 6.5, 7, 5.5);
      
      // Acessar a página ou a funcionalidade relacionada à nota
      
      // Realizar as ações necessárias para preencher os campos ou simular a entrada de dados
      
      // Executar a ação que obtém o conceito final
      
      // Verificar se o conceito final exibido corresponde ao esperado
      cy.get('#conceitoFinal').should('contain', 'MM - Médio');
    });
  
    it('Deve retornar "Nota inválida" para uma nota menor que 0.0', () => {
      const nota = new Nota('História', -2, 8, 7);
      
      // Acessar a página ou a funcionalidade relacionada à nota
      
      // Realizar as ações necessárias para preencher os campos ou simular a entrada de dados
      
      // Executar a ação que obtém o conceito final
      
      // Verificar se a mensagem de "Nota inválida" é exibida
      cy.get('#conceitoFinal').should('contain', 'Nota inválida');
    });
  });
  