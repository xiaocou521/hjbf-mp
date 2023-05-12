import MUTATION_TYPES from '../mutation_type.js' // 引入
const store = {
	namespaced: true,
	state: {
		list: [{
				iconPath: "file-text",
				selectedIconPath: "file-text-fill",
				text: '订单',
				isDot: false,
				customIcon: false,
				pagePath: '/pages/order/OrderHome',
			},
			// {
			// 	iconPath: "bag",
			// 	selectedIconPath: "bag-fill",
			// 	text: '样例',
			// 	isDot: false,
			// 	customIcon: false,
			// 	pagePath: '/pages/example/ExampleHome',
			// },
			{
				iconPath: "account",
				selectedIconPath: "account-fill",
				text: '我的',
				isDot: false,
				customIcon: false,
				pagePath: '/pages/my/MyHome',
			},
		],
		current: 0
	},
	getters: {
		tabbarListStore: state => {
			return state
		}
	},
	mutations: {
		[MUTATION_TYPES.setMyHomeCount]: (state, count) => {
			state.current = count
			state.list[4].count = count
			// this.$set(state.list[0], 'count', count)
		},
		[MUTATION_TYPES.setFirstPagePath]: (state, pagePath) => {
			// state.current = count
			state.list[0].pagePath = pagePath
			// this.$set(state.list[0], 'count', count)
		}
	},
	actions: {}
}
export default store
