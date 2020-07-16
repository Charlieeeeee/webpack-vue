1. 标签名：y-loading
2. 用法和入参：

    提供两个局部方法，使用之前先在使用页面import引入loading文件夹下的loading.js文件
    此时提供 Loading.open(parmas) Loading.close()两个方法

    Loading.open(parmas)
        parmas  可选参数 为一个对象：
            {
                showloading, //是否显示loading  （Boolean） 默认为true
                showModal //是否显示模态框 （Boolean） 默认为true
            }
    (2) Loading.close() 关闭loading

3、使用：
    import Loading from "../../lib/components/loading/view/loading.js"

    Loading.open({
        showloading:true,
        showModal:false
        })


        或

    Loading.open()
