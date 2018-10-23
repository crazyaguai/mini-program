import indexData from '../../data/index_data.js'

Component({
	data: {
		showDialog: false,
		vertical: false,
		actions: [
			{
				name: '13810129804'
			},
			{
				name: '13810759878'
			}
		]
	},
    properties: {
    },
    methods: {
		call: function () {
			this.setData({showDialog: true})
		},
		handleClick: function (data) {
			let index = data.detail.index
			if (index == 2) {
				this.setData({ showDialog: false })
				return
			}
			wx.makePhoneCall({
				phoneNumber: this.data.actions[index].name,
			})
			this.setData({ showDialog: false })
		},
		handleCancel: function () {
			this.setData({ showDialog: false })
		}
	},
});
