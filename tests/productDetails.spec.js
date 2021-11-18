const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    expect(productDetails).toBeInstanceOf(Function);
    // Teste se productDetails é uma função. **
    expect(productDetails('Alcool gel', 'Máscara')).toBeInstanceOf(Array);
    // Teste se o retorno da função é um array.
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
    // Teste se o array retornado pela função contém dois itens dentro.
    const array = productDetails('Alcool gel', 'Máscara');
    expect (array[0] && array[1]).toBeInstanceOf(Object);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(productDetails('Alcool gel', 'Máscara')[0]).toMatchObject(array[0]);
    expect(productDetails('Alcool gel', 'Máscara')[1]).toMatchObject(array[1]);
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(array[0].details.productId.includes('123')).toBeTruthy();
    expect(array[1].details.productId.includes('123')).toBeTruthy();
    // Teste se os dois productIds terminam com 123.
  });
});
