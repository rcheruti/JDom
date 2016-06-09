
describe('Testando funções que manipulam classes e atributos',function(){
  
  it('Testando $.hasClass(...):',function(){
    var el = $('.classes1');
    var childs = el.children();
    
    expect( childs.hasClass('classeTesteX') ).toBe(true);
    expect( childs.hasClass('classeTesteY') ).toBe(true);
    // Só verifica o primerio elemento da lista!
    expect( childs.hasClass('classeTesteZ') ).toBe(false); 
    
    // Só verifica o primeiro parâmetro, a primeira classe da chamada!
    expect( childs.hasClass('classeTesteX', 'classeTesteY') ).toBe(true);
    expect( childs.hasClass('classeTesteX', 'classeTesteZ') ).toBe(true);
    expect( childs.hasClass('classeTesteZ', 'classeTesteX') ).toBe(false); // Atenção!
  });
  
  it('Testando $.addClass(...):',function(){
    var el = $('.classes1');
    expect( el.is('.classeTeste1') ).toBe(false);
    el.addClass('classeTeste1');
    expect( el.is('.classeTeste1') ).toBe(true);
    
    expect( el.is('.classeTeste2') ).toBe(false);
    expect( el.is('.classeTeste3') ).toBe(false);
    el.addClass('classeTeste2', 'classeTeste3');
    expect( el.is('.classeTeste2') ).toBe(true);
    expect( el.is('.classeTeste3') ).toBe(true);
    
    expect( el.is('.classeTeste4') ).toBe(false);
    expect( el.is('.classeTeste5') ).toBe(false);
    el.addClass(['classeTeste4', 'classeTeste5']); // Não será possível!
    expect( el.is('.classeTeste4') ).toBe(false);
    expect( el.is('.classeTeste5') ).toBe(false);
    
    var childs = el.children();
    expect( childs.eq(0).is('.classeTeste1') ).toBe(false);
    expect( childs.eq(1).is('.classeTeste1') ).toBe(false);
    expect( childs.eq(2).is('.classeTeste1') ).toBe(false);
    childs.addClass('classeTeste1');
    expect( childs.eq(0).is('.classeTeste1') ).toBe(true);
    expect( childs.eq(1).is('.classeTeste1') ).toBe(true);
    expect( childs.eq(2).is('.classeTeste1') ).toBe(true);
    
    expect( childs.eq(0).is('.classeTeste2') ).toBe(false);
    expect( childs.eq(0).is('.classeTeste3') ).toBe(false);
    expect( childs.eq(1).is('.classeTeste2') ).toBe(false);
    expect( childs.eq(1).is('.classeTeste3') ).toBe(false);
    expect( childs.eq(2).is('.classeTeste2') ).toBe(false);
    expect( childs.eq(2).is('.classeTeste3') ).toBe(false);
    childs.addClass('classeTeste2', 'classeTeste3');
    expect( childs.eq(0).is('.classeTeste2') ).toBe(true);
    expect( childs.eq(0).is('.classeTeste3') ).toBe(true);
    expect( childs.eq(1).is('.classeTeste2') ).toBe(true);
    expect( childs.eq(1).is('.classeTeste3') ).toBe(true);
    expect( childs.eq(2).is('.classeTeste2') ).toBe(true);
    expect( childs.eq(2).is('.classeTeste3') ).toBe(true);
  });
  
  it('Testando $.removeClass(...):',function(){
    var el = $('.classes1');
    
    expect( el.is('.classeTeste1') ).toBe(true);
    el.removeClass('classeTeste1');
    expect( el.is('.classeTeste1') ).toBe(false);
    
    expect( el.is('.classeTeste2') ).toBe(true);
    expect( el.is('.classeTeste3') ).toBe(true);
    el.removeClass('classeTeste2', 'classeTeste3');
    expect( el.is('.classeTeste2') ).toBe(false);
    expect( el.is('.classeTeste3') ).toBe(false);
    
    var childs = el.children();
    expect( childs.eq(0).is('.classeTeste1') ).toBe(true);
    expect( childs.eq(1).is('.classeTeste1') ).toBe(true);
    expect( childs.eq(2).is('.classeTeste1') ).toBe(true);
    childs.removeClass('classeTeste1');
    expect( childs.eq(0).is('.classeTeste1') ).toBe(false);
    expect( childs.eq(1).is('.classeTeste1') ).toBe(false);
    expect( childs.eq(2).is('.classeTeste1') ).toBe(false);
    
    expect( childs.eq(0).is('.classeTeste2') ).toBe(true);
    expect( childs.eq(0).is('.classeTeste3') ).toBe(true);
    expect( childs.eq(1).is('.classeTeste2') ).toBe(true);
    expect( childs.eq(1).is('.classeTeste3') ).toBe(true);
    expect( childs.eq(2).is('.classeTeste2') ).toBe(true);
    expect( childs.eq(2).is('.classeTeste3') ).toBe(true);
    childs.removeClass('classeTeste2', 'classeTeste3');
    expect( childs.eq(0).is('.classeTeste2') ).toBe(false);
    expect( childs.eq(0).is('.classeTeste3') ).toBe(false);
    expect( childs.eq(1).is('.classeTeste2') ).toBe(false);
    expect( childs.eq(1).is('.classeTeste3') ).toBe(false);
    expect( childs.eq(2).is('.classeTeste2') ).toBe(false);
    expect( childs.eq(2).is('.classeTeste3') ).toBe(false);
  });
  
  it('Testando $.toggleClass(...):',function(){
    var el = $('.classes1');
    expect( el.is('.classeTeste1') ).toBe(false);
    el.toggleClass('classeTeste1');
    expect( el.is('.classeTeste1') ).toBe(true);
    el.toggleClass('classeTeste1');
    expect( el.is('.classeTeste1') ).toBe(false);
    
    expect( el.is('.classeTeste2') ).toBe(false);
    expect( el.is('.classeTeste3') ).toBe(false);
    el.toggleClass('classeTeste2', 'classeTeste3');
    expect( el.is('.classeTeste2') ).toBe(true);
    expect( el.is('.classeTeste3') ).toBe(true);
    el.toggleClass('classeTeste2', 'classeTeste3');
    expect( el.is('.classeTeste2') ).toBe(false);
    expect( el.is('.classeTeste3') ).toBe(false);
    
    var childs = el.children();
    expect( childs.eq(0).is('.classeTeste1') ).toBe(false);
    expect( childs.eq(1).is('.classeTeste1') ).toBe(false);
    expect( childs.eq(2).is('.classeTeste1') ).toBe(false);
    childs.toggleClass('classeTeste1');
    expect( childs.eq(0).is('.classeTeste1') ).toBe(true);
    expect( childs.eq(1).is('.classeTeste1') ).toBe(true);
    expect( childs.eq(2).is('.classeTeste1') ).toBe(true);
    childs.toggleClass('classeTeste1');
    expect( childs.eq(0).is('.classeTeste1') ).toBe(false);
    expect( childs.eq(1).is('.classeTeste1') ).toBe(false);
    expect( childs.eq(2).is('.classeTeste1') ).toBe(false);
    
    expect( childs.eq(0).is('.classeTeste2') ).toBe(false);
    expect( childs.eq(0).is('.classeTeste3') ).toBe(false);
    expect( childs.eq(1).is('.classeTeste2') ).toBe(false);
    expect( childs.eq(1).is('.classeTeste3') ).toBe(false);
    expect( childs.eq(2).is('.classeTeste2') ).toBe(false);
    expect( childs.eq(2).is('.classeTeste3') ).toBe(false);
    childs.toggleClass('classeTeste2', 'classeTeste3');
    expect( childs.eq(0).is('.classeTeste2') ).toBe(true);
    expect( childs.eq(0).is('.classeTeste3') ).toBe(true);
    expect( childs.eq(1).is('.classeTeste2') ).toBe(true);
    expect( childs.eq(1).is('.classeTeste3') ).toBe(true);
    expect( childs.eq(2).is('.classeTeste2') ).toBe(true);
    expect( childs.eq(2).is('.classeTeste3') ).toBe(true);
    childs.toggleClass('classeTeste2', 'classeTeste3');
    expect( childs.eq(0).is('.classeTeste2') ).toBe(false);
    expect( childs.eq(0).is('.classeTeste3') ).toBe(false);
    expect( childs.eq(1).is('.classeTeste2') ).toBe(false);
    expect( childs.eq(1).is('.classeTeste3') ).toBe(false);
    expect( childs.eq(2).is('.classeTeste2') ).toBe(false);
    expect( childs.eq(2).is('.classeTeste3') ).toBe(false);
    
    
    // Testando invertidos:
    el.addClass('classeTeste4');
    expect( el.is('.classeTeste4') ).toBe(true);
    expect( el.is('.classeTeste5') ).toBe(false);
    el.toggleClass('classeTeste4', 'classeTeste5');
    expect( el.is('.classeTeste4') ).toBe(false);
    expect( el.is('.classeTeste5') ).toBe(true);
    el.toggleClass('classeTeste4', 'classeTeste5');
    expect( el.is('.classeTeste4') ).toBe(true);
    expect( el.is('.classeTeste5') ).toBe(false);
  });
  
  //==========================================================================
  //==========================================================================
  // =================   Testar atributos   ==================================
  
  it('Testando $.attr(...):',function(){
    var el = $('.attr1');
    var childs = el.children();
    
    expect( childs.attr('attr-que-nao-existe') ).toBe(null);
    
    // Como Get só verifica o primeiro elemento da lista:
    expect( childs.attr('data-attr1') ).toBe('valor1');
    expect( childs.attr('data-attr2') ).toBe('valor2');
    expect( childs.attr('data-attr3') ).toBe(null);
    
    expect( childs.eq(0).attr('data-attr1') ).toBe('valor1');
    expect( childs.eq(1).attr('data-attr1') ).toBe('valor1');
    expect( childs.eq(2).attr('data-attr1') ).toBe(null);
    
    childs.attr('data-attr1','valorX');
    expect( childs.eq(0).attr('data-attr1') ).toBe('valorX');
    expect( childs.eq(1).attr('data-attr1') ).toBe('valorX');
    expect( childs.eq(2).attr('data-attr1') ).toBe('valorX');
  });
  
  it('Testando $.removeAttr(...):',function(){
    var el = $('.attr1');
    var childs = el.children();
    
    childs.removeAttr('attr-que-nao-existe');
    expect( childs.attr('attr-que-nao-existe') ).toBe(null);
    
    childs.attr('data-attrX','valorX');
    expect( childs.eq(0).attr('data-attrX') ).toBe('valorX');
    expect( childs.eq(1).attr('data-attrX') ).toBe('valorX');
    expect( childs.eq(2).attr('data-attrX') ).toBe('valorX');
    childs.removeAttr('data-attrX');
    expect( childs.eq(0).attr('data-attrX') ).toBe(null);
    expect( childs.eq(1).attr('data-attrX') ).toBe(null);
    expect( childs.eq(2).attr('data-attrX') ).toBe(null);
    
    // Removendo vários:
    expect( !!childs.eq(0).attr('data-attr1') ).toBe(true);
    expect( !!childs.eq(0).attr('data-attr2') ).toBe(true);
    childs.removeAttr('data-attr1','data-attr2');
    expect( childs.eq(0).attr('data-attr1') ).toBe(null);
    expect( childs.eq(0).attr('data-attr2') ).toBe(null);
  });
  
});
