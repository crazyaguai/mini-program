//yard.js
//获取应用实例
import indexData from '../../data/index_data.js'

Page({
    data: {
		indexData: indexData,
		yard_data: {},
		indicatorDots: true,
		autoplay: false,
		interval: 5000,
		duration: 1000,

		//地图相关数据
		latitude: '',
		longitude: '',
		markers: [],
		//坐标点（连线）
		polyline: [],
		//坐标点（连接起来的圈）
		controls: [],
		showMap: true

    },
	onLoad: function (options) {
		var id = options.id
		for (let d of this.data.indexData.show_yard){
			if(d.id == id){
				this.setData({
					yard_data: d,
					latitude: d.map.latitude,
					longitude: d.map.longitude,
					markers: d.map.markers
				})
			}
		}
    },
	regionchange(e) {
		console.log(e.type)
	},
	markertap(e) {
		console.log(e.markerId)
	},
	controltap(e) {
		console.log(e.controlId)
	},
	onShareAppMessage: function (res) {
		return {
			title: '爨舍',
			path: 'pages/index/index',
			imageUrl: 'http://wx4.sinaimg.cn/mw690/a4006e99ly1fw7su00exvj20ml0u47wh.jpg'
		}
	},
	goMap(){
		wx.openLocation({
			latitude: this.data.latitude,
			longitude: this.data.longitude,
			scale: '18',
			name: this.data.yard_data.title
		})
	}
})