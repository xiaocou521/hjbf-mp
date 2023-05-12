<template name="FooterTabbar">
	<view>
		<u-tabbar :model="tabbarListStore.current" :list="tabbarListStore.list" :active-color="$themeColor" height="100"
			inactive-color="#aaaaaa" @change="change">
		</u-tabbar>
	</view>
</template>

<script>
	import {
		mapState,
		mapGetters,
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {};
		},
		computed: {
			...mapGetters('tabbarList', ['tabbarListStore'])
		},
		methods: {
			change(index) {
				if (index === 0) {
					// this.setFirstPagePath('/pages/order/OrderHome')
					// uni.reLaunch({
					//     url: '/pages/order/OrderHome'
					// });
				}
			},
			...mapMutations('tabbarList', [
				'setMyHomeCount', 'setFirstPagePath'
			]),
		}

	}
</script>

<style style="scss">

</style>
