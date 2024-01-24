class Shape {
   constructor(color) {
    this.color = color;
   } 
   setColor() => {
    
   }
}

class Circle extends Shape {
  constructor() {
    render () {
       `<circle cx="150 cy="100 r="80" fill= "${shape.color}"`
    }
  }
}

class Triangle extends Shape {
  constructor() {
    render(){
  `<polygon points="150, 18 244, 182 56, 182" fill="${shape.color}" />`
}
  }
}

//need to add polygon points to match a square
class Square extends shape {
  constructor() {
     render(){
  `<polygon points="235,235 164,235 164,164 235,164"  fill="${shape.color}" />`
}
  }
}


