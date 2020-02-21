import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        commentTotal: [
            {name: '赵起超',content: '好的护肤就是疯狂就看电视看看书看书 '},
            {name: '赵起超',content: '好的护肤就是疯狂就看电视看看书看书 '},
            {name: '赵起超',content: '好的护肤就是疯狂就看电视看看书看书 '},
            {name: '赵起超',content: '好的护肤就是疯狂就看电视看看书看书 '},
            {name: '赵起超',content: '好的护肤就是疯狂就看电视看看书看书 '},
            {name: '赵起超',content: '好的护肤就是疯狂就看电视看看书看书 '},
            {name: '赵起超',content: '好的护肤就是疯狂就看电视看看书看书 '},
            {name: '赵起超',content: '好的护肤就是疯狂就看电视看看书看书 '},
            {name: '赵起超',content: '好的护肤就是疯狂就看电视看看书看书 '},
            {name: '赵起超',content: '好的护肤就是疯狂就看电视看看书看书 '},
            {name: '赵起超',content: '好的护肤就是疯狂就看电视看看书看书 '},
            {name: '赵起超',content: '好的护肤就是疯狂就看电视看看书看书 '},
            {name: '赵起超',content: '好的护肤就是疯狂就看电视看看书看书 '},
          ],
        count: 0
    },
    mutations:{
        addCount(state, num) {
            state.count = state.count + 1;
        },
        changeComment(state, commentItem) {
            state.commentTotal = state.commentTotal.unshift(commentItem);
        }
    },
    actions:{

    },
    getters:{
        getCount(state) {
            return state.count;
        },
        getComment(state) {
            return state.commentTotal;
        }
    },
    modules:{

    }
})