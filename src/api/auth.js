const { default: horizonApiAxios } = require(".");

const userloginauth = (credentials) => {
    return horizonApiAxios
        .post(`/auth/loginwithmobile`, credentials)
        .then(response => {
            if (response.status === 201 && response.data.user.is_admin === true) {
                localStorage.setItem('horizon_token', response.data.token);
                localStorage.setItem('login_user', JSON.stringify(response.data.user));
                return { status: true, message: 'Login success' };
            } else {
                return { status: false, message: 'Invalid credentials' };
            }
        })
        .catch(error => {
            return { status: false, message: error.response.data.message };
        });
}

export {
    userloginauth
}