class PGroup
{
constructor(members)
{
this.members=members;
}
has (value)
{
    return this.members.includes(value);
}
add(to_add)
{
    if (!this.has(to_add))
       return new PGroup(this.members.concat([to_add]));
    return this;

}
delete(to_remove)
{
    if (this.has(to_remove))
    return new PGroup(this.members.filter(v => v !== to_remove));
    return this;
}

}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false