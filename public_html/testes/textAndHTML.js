
describe('Testando funções de texto e HTML (incluindo criar nós com texto)',function(){
  
  it('Testando $.text(...):',function(){
    var el = $('.texto1 > *');
    
    // Retorna apenas o texto do 1o elemento:
    expect( el.text() ).toBe('Texto 1');
    expect( el.eq(0).text() ).toBe('Texto 1');
    expect( el.eq(1).text() ).toBe('Texto 2');
    expect( el.eq(2).text() ).toBe('Texto 3');
    
    el.text('Novo texto');
    expect( el.text() ).toBe('Novo texto');
    expect( el.eq(0).text() ).toBe('Novo texto');
    expect( el.eq(1).text() ).toBe('Novo texto');
    expect( el.eq(2).text() ).toBe('Novo texto');
  });
  it('Testando $.html(...):',function(){
    var el = $('.html1 > *');
    
    // Retorna apenas o texto do 1o elemento:
    expect( el.html() ).toBe('Texto 1');
    expect( el.eq(0).html() ).toBe('Texto 1');
    expect( el.eq(1).html() ).toBe('<span>Texto 2</span>');
    expect( el.eq(2).html() ).toBe('Texto 3');
    
    el.html('<ul><li>Novo texto</li></ul>');
    expect( el.html() ).toBe('<ul><li>Novo texto</li></ul>');
    expect( el.eq(0).html() ).toBe('<ul><li>Novo texto</li></ul>');
    expect( el.eq(1).html() ).toBe('<ul><li>Novo texto</li></ul>');
    expect( el.eq(2).html() ).toBe('<ul><li>Novo texto</li></ul>');
  });
  it('Testando $.append(...):',function(){
    var elAppend1 = $('.append1');
    
    elAppend1.children('.elemento1').append('<ul><li>Novo texto</li></ul>');
    expect( elAppend1.find('li').length ).toBe(1);
    elAppend1.children('.elemento2').append( elAppend1.children('.elemento3') );
    expect( $('.append1 > *').length ).toBe(2);
    expect( elAppend1.children('.elemento2').children().length ).toBe(2);
  });
  
});
