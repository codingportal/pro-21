class ground {
  constructor(x, y, width, height,) {
    var options = {
      isStatic: true
    };
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(0, height - 1, width * 2, 1, options);
    World.add(world, this.body);
  }


  display() {
    var pos = this.body.position;
    push()
    groundOBJ = createSprite(0, 1,height - 1, width * 2)
    pop()

  }
}
class leftSide {
  constructor(x, y, width, height,) {
    var options = {
      isStatic: true
    };
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(500,-100, height - 1, width * 2, options);
    World.add(world, this.body);
  }


  display() {
    var pos = this.body.position;
    push()
    OBJ = createSprite(500, -100, height - 1, width * 2)
    pop()

  }
}
class rightSide {
  constructor(x, y, width, height,) {
    var options = {
      isStatic: true
    };
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(500, -100, height - 1, width * 2, options);
    World.add(world, this.body);
  }


  display() {
    var pos = this.body.position;
    push()
    groundOBJ = createSprite(600, -100, height - 1, width * 2)
    pop()

  }
}