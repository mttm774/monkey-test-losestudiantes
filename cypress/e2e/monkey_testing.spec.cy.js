
describe('Los estudiantes under monkeys', function() {
  it('visits los estudiantes and survives monkeys', function() {
      cy.visit('https://losestudiantes.co');
      cy.wait(1000);
      randomClick(20);
      randomEvent(100);
  })
})
function randomClick(monkeysLeft) {

  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  };

  var monkeysLeft = monkeysLeft;
  if(monkeysLeft > 0) {
      cy.get('a').then($links => {
          var randomLink = $links.get(getRandomInt(0, $links.length));
          if(!Cypress.dom.isHidden(randomLink)) {
              cy.wrap(randomLink).click({force: true});
              monkeysLeft = monkeysLeft - 1;
          }
          cy.wait(1000);
          randomClick(monkeysLeft);
      });
  }   
}

function randomEvent(monkeysLeft){

    

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    

    
    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        //seleccionar evento
        var evento=getRandomInt(0,3);
        console.log(evento);

        if(evento==0){//Hacer click en un link al azar 0
            cy.get('a').then($links => {
                var randomLink = $links.get(getRandomInt(0, $links.length));
                if(!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({force: true});
                    
                }
                cy.wait(1000);
                
            });
            monkeysLeft = monkeysLeft - 1;
            randomEvent(monkeysLeft);

        }
        else if(evento==1){//Llenar un campo de texto al azar 1
            cy.get('input').then($inputs => {
                var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
                if(!Cypress.dom.isHidden(randomInput)) {
                    cy.get(randomInput).type("some text",{force: true});
                    monkeysLeft = monkeysLeft - 1;
                }
                cy.wait(1000);
            });
            monkeysLeft = monkeysLeft - 1;
            randomEvent(monkeysLeft);
        }
        else if(evento==2){//Seleccionar un combo al azar 2
            cy.document().then((doc) => {
                const combos = doc.querySelectorAll('select');
                cy.wrap(combos).each((select) => {
                    const randomIndex = Math.floor(Math.random() * select.length);
                    cy.get('select').eq(0).find('option').eq(randomIndex).then((option) => {
                        cy.wrap(option).invoke('val').then((value) => {
                        cy.get('select').eq(0).select(value);
                        
                        });
                    });
                    cy.wait(1000);

                });
            });
        
            monkeysLeft = monkeysLeft - 1;
            randomEvent(monkeysLeft);
        
        }
        else if(evento==3){//Hacer click en un botón al azar 3
            cy.get('button').then($butons => {
                var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
                if(!Cypress.dom.isHidden(randomButton)) {
                    cy.wrap(randomButton).click({force: true});
                }
                cy.wait(1000);

            });
            monkeysLeft = monkeysLeft - 1;
            randomEvent(monkeysLeft);
        }



        



    }   
}