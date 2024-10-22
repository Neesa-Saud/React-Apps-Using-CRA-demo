function choice(items)
{
    let index = math.floor(math.random()*items.length);
    return items[index];
}
function remove(items,item)
{
    let index = items.indexOf(item);
    let arr = items.slice(0,index);
    let brr = items.slice(index+1);
    let crr =[...arr,...brr]
    return crr;
}
export {choice,remove};