
describe('Testando funções que busca a posição do elemento no DOM: ',function(){
  
  it('Testando $.position():',function(){
    var childs = $('.pos1 > *');
    
    expect( childs.position() ).toEqual({ top:21, left:21, right:21, bottom:21 });
    expect( childs.eq(0).position() ).toEqual({ top:21, left:21, right:21, bottom:21 });
    expect( childs.eq(1).position() ).toEqual({ top:61, left:31, right:11, bottom:-19 });
  });
  
  it('Testando $.offset():',function(){
    var childs = $('.pos1 > *');
    
    expect( childs.offset().top ).toBe( 121 );
    expect( childs.offset().left ).toBe( 321 );
    expect( childs.eq(0).offset().top ).toBe( 121 );
    expect( childs.eq(0).offset().left ).toBe( 321 );
    expect( childs.eq(1).offset().top ).toBe( 161 );
    expect( childs.eq(1).offset().left ).toBe( 331 );
    
    // Quando for informado um parâmetro de filtragem, a subida do DOM
    // para quando o primeiro elemento que passar no teste "$(...).is(...)"
    // for encontrado. 
    // Se não for encontrado, a subida acontece como se nenhum parâmetro
    // tenha sido informado.
    expect( childs.offset( childs.parent() ) ).toEqual( childs.position() );
  });
  
});
