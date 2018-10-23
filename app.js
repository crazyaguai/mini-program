const httpService = require('./service/http-service.js')

//app.js
App({
    onLaunch: function() {
    },
	onShow: ()=>{
		console.log('show')
	},
    globalData: {
        userInfo: null
    }
})