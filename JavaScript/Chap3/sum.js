function range (start,end,step=1)
{
    let list =[];   
    for (let i=start;i<(end+1);i+=step) list.push(i);   
    return list;
}

function sum (list) 
{
    let total =0;
    for (let i of list)
    total+=i;
    return total
}
console.log(range(1,100))
console.log(sum(range(1,100)))