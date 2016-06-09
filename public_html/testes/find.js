
describe('Testando funções de busca pelo DOM e no objeto "$":',function(){
  
  it('Testando $(...):',function(){
    expect( $('.find1 > .elemento1').length ).toBe(1);
    expect( $('.find1 .elemento1').length ).toBe(2);
    expect( $('.find1 [data-attr1="valor2"] ul li').length ).toBe(3);
    expect( $('.find1 > .elemento3 section h3').length ).toBe(1);
  });
  
  // "$.is" é um apelido para "$.matches" (impl. nativa do navegador).
  it('Testando $.is(...):',function(){
    expect( $('.find1').is('.find1') ).toBe(true);
    expect( $('.find1 .elemento1').is('.elemento1') ).toBe(true);
    // diferença de maiúscula e minúscula no nome de classe!
    expect( $('.find1 .elemento1').is('.EleMento1') ).toBe(false); 
    expect( $('.find1 .elemento2').is('[data-attr1="valor2"]') ).toBe(true);
    expect( $('.find1 > .elemento3 section h3').is('h3') ).toBe(true);
    expect( $('.find1 > .elemento3 section h3').is('H3') ).toBe(true);
    // Atenção! Só verifica o primeiro elemento da lista!
    expect( $('.find1 .elemento1').is('li') ).toBe(false); 
    expect( $('.find1 .elemento1').eq(1).is('li') ).toBe(true); 
  });
  it('Testando $.find(...):',function(){
    var el = $('.find1');
    
    expect( el.find('.elemento1').length ).toBe(2);
    expect( el.find('[data-attr1="valor2"] ul li').length ).toBe(3);
    expect( el.find('.elemento3 section h3').length ).toBe(1);
  });
  it('Testando $.children(...):',function(){
    var el = $('.find1');
    
    expect( el.children('.elemento1').length ).toBe(1);
    expect( el.children('[data-attr1="valor2"]').children('ul').children('li').length ).toBe(3);
    expect( el.children('.elemento3').children('section').children('h3').length ).toBe(1);
  });
  it('Testando $.parent(...):',function(){
    var el = $('.find1');
    
    expect( el.parent().is('.find1Parent1') ).toBe(true);
    expect( el.parent().parent().is('.find1Parent2') ).toBe(true);
    expect( el.parent().parent().parent().is('body') ).toBe(true);
    
    expect( $('.find1 > *').parent().length ).toBe(3);
    expect( $('.find1').find('.elemento1').parent().length ).toBe(2);
    expect( $('.find1').children('.elemento1').parent().length ).toBe(1);
  });
  
});
