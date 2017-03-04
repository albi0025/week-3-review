import {expect} from 'chai';
import Box from './Box';
// const Box = require('./Box');

describe("Box", function() {
  it("Can get volume of box", function(){
    const box = new Box(4,5,6);
    // Act
    let result = box.getVolume();
    let expectedResult = 120;
    // Assert
    expect(result).to.eql(expectedResult);
  });
  // describe("Box", function() {
  //   it("Compare volume of boxes", function(){
  //     const box1 = new Box("box1",4,5,6);
  //     const box2 = new Box("box2",4,5,6);
  //     // Act
  //     let result1 = name.getVolume();
  //     let result2 = name.getVolume();
  //     let expectedResult = true;
  //     // Assert
  //     expect(result).to.eql(expectedResult);
  //   });
 });
