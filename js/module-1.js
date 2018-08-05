//1.0

! function () {
    var person = {
        name: 'frank',
        age: 18
    }

    window.growUp = function () {
        return person.age
    }
}()

// 1.立即执行函数使得person无法被外部访问
// 2.闭包使得匿名函数可以操作 person
// 3.windos.growUp 保存了匿名函数的地址
// 4.任何地方都可以使用 window.growUp 操场person
// 5.但是不能直接访问person

//2.0

var accessor = function(){
    var person = {
        name: 'cui',
        age: 18,
    }
    return function () {
        person.age += 1
        return person.age
    }
}

var growUp = accessor()
growUp()