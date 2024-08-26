function receivesAFunction(callback)
{
    callback();
}

function returnsANamedFunction()
{
    return function coolfunc()
    {

    }
}

function returnsAnAnonymousFunction()
{
    return function()
    {

    }
}