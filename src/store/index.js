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
        studentComment: [
            {overstep: false, isHidden: false, name: '朱莹', time: '02/01 12:23', content:'还会记得回家的解决房价还会发毒贩夫妇付付付电动蝶阀多ffff', like: false},
            {overstep: false, isHidden: false, name: '朱莹', time: '02/01 12:23', content:'还会记得回家的解决房价还会发毒贩夫妇付付付电动蝶阀多付付付付啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', like: false},
            {overstep: false, isHidden: false, name: '朱莹', time: '02/01 12:23', content:'还会记得回家的解决房价还会发毒贩夫妇付付付电动蝶阀多付付付付', like: false},
            {overstep: false, isHidden: false, name: '朱莹', time: '02/01 12:23', content:'还会记得回家的解决房价还会发毒贩夫妇付付付电动蝶阀多付付付付', like: false},
        ],
    },
    mutations:{
        changeComment(state, commentItem) {
            const commentTotal = state.commentTotal;
            commentTotal.unshift(commentItem);
            state.commentTotal = commentTotal;
        },
        changeStudentComment(state, commentItem) {
            const studentComment = state.studentComment;
            studentComment.unshift(commentItem);
            this.studentComment = studentComment;
        }
    },
    actions:{

    },
    getters:{
        getComment(state) {
            return state.commentTotal;
        },
        getStudentComment() {
            return state.studentComment;
        }
    },
    modules:{

    }
})