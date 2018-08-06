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
    let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message')
    var message = new Message()
    message.save({
        'name': name,
        'content': content
    }).then(function (object) {
        // window.location.reload()
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name} :  \n${object.attributes.content}`
        messageList.appendChild(li)
        alert('🙏感谢留言')
        myForm.querySelector('input[name=content]').value = ''
        myForm.querySelector('input[name=name]').value = ''
    })
})


var query = new AV.Query('Message');
query.find().then(function (messages) {
    // var content = messages[1].get('content');
    let array = messages.map((item) => item.attributes)
    array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = `${item.name} :  \n${item.content}`
        messageList.appendChild(li)
    })
}, function (error) {
    alert('提交失败，请改天来留言')
}).then(() => {}, (error) => {
    console.log(error)
})



// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function () {
//     console.log(arguments)
// })