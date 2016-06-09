
describe('Testando o protótipo da "classe" Array: ',function(){
  
  it('Testando Array.pop(): ',function(){
    var childs = $('.texto1 > *');
    
    expect( childs.length ).toBe(3);
    childs.pop();
    expect( childs.length ).toBe(2);
  });
  
  it('Testando Array.splice(): ',function(){
    var childs = $('.texto1 > *');
    
    expect( childs.length ).toBe(3);
    childs.splice(1,2);
    expect( childs.length ).toBe(1);
  });
  
  it('Testando Array.push(...): ',function(){
    var childs = $('.texto1 > *').eq(0);
    
    expect( childs.length ).toBe(1);
    childs.push( $('.texto1 > *').eq(1) );
    expect( childs.length ).toBe(2);
    
    var childs = $('.texto1 > *').eq(0);
    childs.push( $('.texto1 > *') );
    expect( childs.length ).toBe(4);
    childs.removeDuplicates();
    expect( childs.length ).toBe(3);
  });
  
});
