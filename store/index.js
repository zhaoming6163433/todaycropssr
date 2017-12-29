export const state = () => ({
	userinfo:{
        username:'',
        userid:''
    }
})

export const mutations = {
	SAVE_USER_INFO(state, obj) {
		state.userinfo = obj;
	}
}
