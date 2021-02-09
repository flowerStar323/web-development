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
[Symbol.iterator] ()
{
    return new GroupIteretor(this);
}

}

class GroupIteretor 
{
    constructor (group)
    {
        this.group = group;
        this.index =0;
    }

    next()
    {
        if (this.index >= this.group.members.length)
        return {done : true};
        let result = 
        {
            value : this.group.members[this.index] ,
            done : false
        }
        this.index++;
        return result;
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c