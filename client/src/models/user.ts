/*
 * @Description: 用户
 * @Author: LuckRain7
 * @Date: 2020-05-09 12:39:59
 */
export default {
    // model的命名空间，区分多个model
    namespace: 'user',
    // 初始状态
    state: {
        inf: {
            name: 'rain',
            age: '18',
            token: '',
        },
        isLogin: 0
    },
    // 异步操作
    effects: {},
    // 更新状态
    reducers: {
        addUser(state, action) {
            state.inf = action.user
            return state
        }
    },
};