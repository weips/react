import * as Api from 'api'
export default {
  namespace: 'login',
  state: {
    isLogin: false,
    user: {}
  },
  subscriptions: {

  },
  effects: {
    *signin ({payload}, {put, call}) {
      yield call(Api.signin, payload)
      // yield put({type: 'switchLoginStatus'})
    },
    *login ({payload}, {put, call}) {
      yield call(Api.login, payload)
    }
  },
  reducers: {
    switchLoginStatus (state) {
      return {
        ...state,
        isLogin: !state.isLogin
      }
    }
  }
}