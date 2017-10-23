let httpInterceptor = ($injector) => {
    'ngInject';

    return {
        response: (res) => {
            return res.data;
        },
        responseError: (err) => {
            const _Notification = $injector.get('Notification');
            _Notification.error(err.data.error.message);
        }
    };
}

export default httpInterceptor;