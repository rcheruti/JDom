
describe('Testando funções auxiliares estáticas de $:',function(){
  var el = $(),
      data = new Date(),
      func = function(){},
      undefined; // Deixar sem valor para valer "undefined"
  
  it('Testando $.is$(...):',function(){
    expect( $.is$(el) ).toBe(true);
    expect( $.is$({}) ).toBe(false);
    expect( $.is$([]) ).toBe(false);
    expect( $.is$(func) ).toBe(false);
    expect( $.is$(data) ).toBe(false);
    expect( $.is$('Texto') ).toBe(false);
    expect( $.is$(5.34) ).toBe(false);
    expect( $.is$(true) ).toBe(false);
    expect( $.is$(null) ).toBe(false);
    expect( $.is$(undefined) ).toBe(false);
  });
  it('Testando $.isObj(...):',function(){
    expect( $.isObj(el) ).toBe(true);
    expect( $.isObj({}) ).toBe(true);
    expect( $.isObj([]) ).toBe(false);
    expect( $.isObj(func) ).toBe(false);
    expect( $.isObj(data) ).toBe(true);
    expect( $.isObj('Texto') ).toBe(false);
    expect( $.isObj(5.34) ).toBe(false);
    expect( $.isObj(true) ).toBe(false);
    expect( $.isObj(null) ).toBe(false);
    expect( $.isObj(undefined) ).toBe(false);
  });
  it('Testando $.isArray(...):',function(){
    expect( $.isArray(el) ).toBe(false); // Talvez poderia ser "true"!
    expect( $.isArray({}) ).toBe(false);
    expect( $.isArray([]) ).toBe(true);
    expect( $.isArray(func) ).toBe(false);
    expect( $.isArray(data) ).toBe(false);
    expect( $.isArray('Texto') ).toBe(false);
    expect( $.isArray(5.34) ).toBe(false);
    expect( $.isArray(true) ).toBe(false);
    expect( $.isArray(null) ).toBe(false);
    expect( $.isArray(undefined) ).toBe(false);
  });
  it('Testando $.isDate(...):',function(){
    expect( $.isDate(el) ).toBe(false);
    expect( $.isDate({}) ).toBe(false);
    expect( $.isDate([]) ).toBe(false);
    expect( $.isDate(func) ).toBe(false);
    expect( $.isDate(data) ).toBe(true);
    expect( $.isDate('Texto') ).toBe(false);
    expect( $.isDate(5.34) ).toBe(false);
    expect( $.isDate(true) ).toBe(false);
    expect( $.isDate(null) ).toBe(false);
    expect( $.isDate(undefined) ).toBe(false);
  });
  it('Testando $.isUndef(...):',function(){
    expect( $.isUndef(el) ).toBe(false);
    expect( $.isUndef({}) ).toBe(false);
    expect( $.isUndef([]) ).toBe(false);
    expect( $.isUndef(func) ).toBe(false);
    expect( $.isUndef(data) ).toBe(false);
    expect( $.isUndef('Texto') ).toBe(false);
    expect( $.isUndef(5.34) ).toBe(false);
    expect( $.isUndef(true) ).toBe(false);
    expect( $.isUndef(null) ).toBe(false);
    expect( $.isUndef(undefined) ).toBe(true);
  });
  it('Testando $.isDef(...):',function(){
    expect( $.isDef(el) ).toBe(true);
    expect( $.isDef({}) ).toBe(true);
    expect( $.isDef([]) ).toBe(true);
    expect( $.isDef(func) ).toBe(true);
    expect( $.isDef(data) ).toBe(true);
    expect( $.isDef('Texto') ).toBe(true);
    expect( $.isDef(5.34) ).toBe(true);
    expect( $.isDef(true) ).toBe(true);
    expect( $.isDef(null) ).toBe(true);
    expect( $.isDef(undefined) ).toBe(false);
  });
  it('Testando $.isFunc(...):',function(){
    expect( $.isFunc(el) ).toBe(false);
    expect( $.isFunc({}) ).toBe(false);
    expect( $.isFunc([]) ).toBe(false);
    expect( $.isFunc(func) ).toBe(true);
    expect( $.isFunc(data) ).toBe(false);
    expect( $.isFunc('Texto') ).toBe(false);
    expect( $.isFunc(5.34) ).toBe(false);
    expect( $.isFunc(true) ).toBe(false);
    expect( $.isFunc(null) ).toBe(false);
    expect( $.isFunc(undefined) ).toBe(false);
  });
  it('Testando $.isNumber(...):',function(){
    expect( $.isNumber(el) ).toBe(false);
    expect( $.isNumber({}) ).toBe(false);
    expect( $.isNumber([]) ).toBe(false);
    expect( $.isNumber(func) ).toBe(false);
    expect( $.isNumber(data) ).toBe(false);
    expect( $.isNumber('Texto') ).toBe(false);
    expect( $.isNumber(5.34) ).toBe(true);
    expect( $.isNumber(true) ).toBe(false);
    expect( $.isNumber(null) ).toBe(false);
    expect( $.isNumber(undefined) ).toBe(false);
  });
  it('Testando $.isString(...):',function(){
    expect( $.isString(el) ).toBe(false);
    expect( $.isString({}) ).toBe(false);
    expect( $.isString([]) ).toBe(false);
    expect( $.isString(func) ).toBe(false);
    expect( $.isString(data) ).toBe(false);
    expect( $.isString('Texto') ).toBe(true);
    expect( $.isString(5.34) ).toBe(false);
    expect( $.isString(true) ).toBe(false);
    expect( $.isString(null) ).toBe(false);
    expect( $.isString(undefined) ).toBe(false);
  });
  
});
