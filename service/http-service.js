var baseUrl = 'http://127.0.0.1:9002'

function _post(data, url, header = {}) {
}

function userLogin(data) {
	wx.request({
		url: baseUrl + '/user/login',
		data: data,
		method: 'POST',
		success: (res)=>{
			console.log('user_login_success')
			console.log(res)
		}
	})
}

module.exports = {
	userLogin: userLogin,
}