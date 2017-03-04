

let Box = function(name, width, height, depth) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.depth = depth;
};

Box.prototype.getVolume = function() {
  return this.width * this.height * this.depth;
};

// console.log(Box.getVolume(4, 5, 6))

Box.prototype.compare = function(box1, box2) {
  if(box1.getVolume() == box2.getVolume()) {
    return true;
  }
}

export default Box;
