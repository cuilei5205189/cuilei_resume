! function () {
    var view = document.querySelector('section.message')
    var model = {
        initAV: function () {
            var APP_ID = '2mAdlmTn6AMp3gyTXN4UIPwo-gzGzoHsz'
            var APP_KEY = 'BxUx2BwagN6WQBPR4pRW1lgX'
            AV.init(APP_ID, APP_KEY)
        },
        fetch: function () {
            var query = new AV.Query('Message')
            return query.find() //Promise对象
        },
        save: function (name, content) {
            var Message = AV.Object.extend('Message')
            var message = new Message()
            return message.save({
                'name': name,
                'content': content
            })
        }
    }


    var controller = {
        view: null,
        messageList: null,
        model: null,
        init: function (view, model) {
            this.view = view
            this.myForm = view.querySelector('#formMessage')
            this.messageList = view.querySelector('#messageList')
            this.model = model
            this.model.initAV()
            this.loadMessage()
            this.bindEvents()
        },
        loadMessage: function () {
            this.model.fetch().then((messages) => {
                // var content = messages[1].get('content');
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
            this.model.save(name, content).then(function (object) {
                // window.location.reload()
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name} :  \n${object.attributes.content}`
                messageList.appendChild(li)
                alert('🙏感谢留言')
                myForm.querySelector('input[name=content]').value = ''
                myForm.querySelector('input[name=name]').value = ''
            })
        }
    }
    // 存储服务
    controller.init(view, model)
}()





// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function () {
//     console.log(arguments)
// })