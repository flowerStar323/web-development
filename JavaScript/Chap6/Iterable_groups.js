class Group
{
constructor()
{
this.members=[]
}
has (value)
{
    return this.members.includes(value);
}
add(to_add)
{
    if (!this.has(to_add))
        this.members.push(to_add);

}
delete(to_remove)
{
    if (this.has(to_remove))
       //delete this.members.indexOf(to_remove);
       this.members = this.members.filter(v => v !== to_remove);
}
static from (it_obj)
{
    let group = new Group;
    for (let element of it_obj)
    group.add(element);
    return group;
}

}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
console.log(group)

group.add(10);
console.log(group)
group.delete(10);
console.log(group)

console.log(group.has(10));
// → false