import { configureStore } from "@reduxjs/toolkit"

import reducer from "./reducer"

const store = configureStore({
    reducer
    // reducer: reducer将reducer函数分配到state树的每个节点
    // 在名字相同时可以简写
});

export default store;