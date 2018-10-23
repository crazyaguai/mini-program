//index.js
//获取应用实例
const app = getApp()
import indexData from '../../data/index_data.js'

Page({
    data: {
		indexData: indexData
    },
    onLoad: function() {

    },
	onShareAppMessage: function (res) {
		return {
			title: '爨舍',
			path: 'pages/index/index',
			imageUrl: 'http://wx4.sinaimg.cn/mw690/a4006e99ly1fw7su00exvj20ml0u47wh.jpg'
		}
	},
	goMap(e){
		let id = e.target.dataset.yarn
		let item = this.data.indexData.show_yard[id]
		wx.openLocation({
			latitude: item.map.latitude,
			longitude: item.map.longitude,
			scale: '18',
			name: item.title
		})
	},
	goPage(e){
		let index = e.currentTarget.dataset.yard
		wx.navigateTo({
			url: '/pages/yard/yard?id='+index
		})
	}
})