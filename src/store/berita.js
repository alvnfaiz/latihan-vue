import axios from "axios"

const state = ()=>({
    berita :[]
})
const mutations = {
    fetchNews(state,params){
        state.berita = params
    },
    
}

const actions = {
    fetchNews({commit}){
        axios.get('https://saurav.tech/NewsAPI/everything/cnn.json')
        .then(
            (response)=>{
                // console.log(response.data.articles)
                // console.log(state)
                commit('fetchNews',response.data.articles)
            }
        )
    },
    fetchNewsMore(store){
        axios.get('https://saurav.tech/NewsAPI/everything/cnn.json',
        {
            params:{
                pageSize:5,
                page:5
            }
        })
        .then(
            (response)=>{
                console.log(response)
                store.commit('fetchNews',[
                    ...store.state.berita,
                    ...response.data.articles
                ]
                )
            }
        )
    }
    
}
export default {
    state,mutations,actions
}