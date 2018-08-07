! function () {
    var view = View('section.message')
    var model = Model({
        resourceName: 'Message',
    })
    var controller = Controller({
        init: function (view,model) {
            this.messageList = null
            this.myForm = view.querySelector('#formMessage')
            this.messageList = view.querySelector('#messageList')
            this.loadMessage()
            this.bindEvents()
        },
        loadMessage: function () {
            model.fetch().then((messages) => {
                let array = messages.map((item) => item.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name} :  \n${item.content}`
                    this.messageList.appendChild(li)
                })
            }, function (error) {
                alert('提交失败，请改天来留言')
            }).then(() => {}, (error) => {
                console.log(error)
            })
        },
        bindEvents: function () {
            this.myForm.addEventListener('submit', (e) => {
                e.preventDefault()
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.myForm
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            model.save({
                'name': name,
                'content': content
            }).then(function (object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name} :  \n${object.attributes.content}`
                messageList.appendChild(li)
                alert('🙏感谢留言')
                myForm.querySelector('input[name=content]').value = ''
                myForm.querySelector('input[name=name]').value = ''
            })
        }
    })
    controller.init(view,model)
    console.log(controller)
    
}()





// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function () {
//     console.log(arguments)
// })