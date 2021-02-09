class Vec
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }
    plus(a)
    {
        return new Vec(this.x+a.x , this.y+a.y);
    }
    minus(b)
    {
        return new Vec(this.x-b.x , this.y-b.y);
    }
    get length()
    {
        return Math.sqrt(this.x*this.x + this.y*this.y)
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
//→ Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5