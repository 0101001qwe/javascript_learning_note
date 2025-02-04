setTimeout(function()
{
    console.log(this);
})



var names = ["avf","asf","fasf"]
names.forEach(function(item){
console.log(item,this);
},"abc"
)
names.map(function(item)
{
console.log(item,this);
},"adf")