import React from 'react';
import ProLayout, {PageContainer} from '@ant-design/pro-layout';
import Target from './pages/target/sales'
import dva from 'dva';
import createLoading from 'dva-loading';
import complexMenu from './complexMenu';

// 创建应用
const app = dva();
app.use(createLoading())
// 注册 Model
app.model({
  namespace: 'count',
  state: {
    txt: ''
  },
  reducers: {
    add(state, {payload}) {
      console.log(state, payload);
      return {
        ...state,
        txt: payload
      }
    },
  },
  effects: {
    * addAfter1Second({payload}, {call, put}) {
      const res = yield call(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(payload)
          }, 2000)
        })
      });
      console.log(res);
      yield put({type: 'add', payload: res});
    },
  },
});
app.model({
  namespace: 'count1',
  state: {
    txt: ''
  },
  reducers: {
    add(state, {payload}) {
      console.log(state, payload);
      return {
        ...state,
        txt: payload
      }
    },
  },
  effects: {
    * addAfter1Second({payload}, {call, put}) {
      const res = yield call(() => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(payload)
          }, 2000)
        })
      });
      console.log(res);
      yield put({type: 'add', payload: res});
    },
  },
});


// const {breadcrumb, menuData} = getMenuData(
//   routes,
//   menu,
//   formatMessage,
//   menuDataRender,
// )

// 注册视图
app.router(() =>
  <ProLayout
    style={{minHeight: '100vh'}}
    location={{
      pathname: '/articles/new',
    }}
    route={{
      routes: complexMenu,
    }}
    disableContentMargin
    layout="top"
  >
    <ProLayout
      location={{
        pathname: '/home/overview',
      }}
      route={{
        routes: complexMenu,
      }}
      navTheme="light"
      menuHeaderRender={false}
    >
      <PageContainer content="欢迎使用">
        <Target/>
      </PageContainer>
    </ProLayout>
  </ProLayout>);
// 启动应用
app.start('#app');