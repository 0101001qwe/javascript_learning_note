function foo()
{
    const name="why"
    const age=18
    function bar()
    {
        debugger
        console.log(name);
    }
    return bar
}
const fn=foo()
fn()