
function fn1(name){
    var result = name+" fn1 处理过 "

    fn2(result)

    fn3("fn3")

    console.log("haha it's over")
}

function fn2(arg){
    return arg +" fn2 处理过 "
}

function fn3(arg){
    return arg +" fn3 处理过 "
}

fn1("hoho")

