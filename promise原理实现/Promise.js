const Promise = (function () {

    const PEDDING = Symbol('pedding')
    const RESOLVE = Symbol('resolve')
    const REJECT = Symbol('reject')

    return class Promise {
        constructor(exca) {
            this.currentStatus = PEDDING;


            function resolve(value) {

            }

            function reject(value) {

            }
        }
        then(success, fail) {

        }
    }
})()