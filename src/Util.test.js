import {expect} from 'chai';
import Util from './Util';

describe("Util", function() {
  it("Can filter out a specific number", function(){
    // Arrange
    let arrayWithoutTwos = [1, 3, 4, 5, 6, 7];
    let expectedResult = arrayWithoutTwos.slice();
    // Act
    let result = Util.removeNumbers(arrayWithoutTwos, 2);
    // Assert
    expect(result).to.eql(arrayWithoutTwos);
  });
  it("Can filter out a specific number", function(){
    // Arrange
    let arrayWithSomeCaps = ['Dog', 'cat', 'pig'];
    let expectedResult = ['cat', 'pig']
    // Act
    let result = Util.removeCaptitalizedStrings(arrayWithSomeCaps);
    // Assert
    expect(result).to.eql(expectedResult);
  });
  it("Can filter out a specific number", function(){
    // Arrange
    let arrayWithSomeNums = [1,2,3,4,5,6];
    let expectedResult = [1,3,5]
    // Act
    let result = Util.removeEvenNumbers(arrayWithSomeNums);
    // Assert
    expect(result).to.eql(expectedResult);
  });
});
