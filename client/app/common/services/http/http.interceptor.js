class HttpInterceptor {
    constructor($injector, $q) {
        'ngInject';

        this._$injector = $injector;
        this._$q = $q;
    }

    /**
     * response - handles all response from a server
     * @param {*} res - response object
     * @return - data from response object
     */
    response = (res) => {
        return res.data;
    }

    /**
     * responseError - handles errors from a server, shows them in a notification popup
     * @param {*} err - error's object
     * @return - promise of error
     */
    responseError = (err) => {
        const _Notification = this._$injector.get('Notification');

        _Notification.error(err.data.error.message);
        return this._$q.reject(err);
    }
}

export default HttpInterceptor;