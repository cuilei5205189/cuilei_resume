// 存储服务
var {
    Query,
    User
} = AV;
AV.init('2mAdlmTn6AMp3gyTXN4UIPwo-gzGzoHsz', 'BxUx2BwagN6WQBPR4pRW1lgX');

let myForm = document.querySelector('#formMessage')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('Message')
    var message = new Message()
    message.save({
        'content': content
    }).then(function (object) {
        console.log('成功');
        console.log(object);
        alert('🙏留言')
    })
})



// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function () {
//     console.log(arguments)
// })