window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = '2mAdlmTn6AMp3gyTXN4UIPwo-gzGzoHsz'
            var APP_KEY = 'BxUx2BwagN6WQBPR4pRW1lgX'
            AV.init(APP_ID, APP_KEY)
        },
        fetch: function () {
            var query = new AV.Query(resourceName)
            return query.find() //Promise对象
        },
        save: function (object) {
            var X = AV.Object.extend(resourceName)
            var x = new X()
            return x.save(object)
        },
    }
}