import { defineStore } from 'pinia'
import { computed, ref } from "vue";
import { getUsers } from "@/services/users.service.js";
import { getPosts } from "@/services/posts.service.js";

export const usePostsStore = defineStore('posts', () => {
    const allPosts = ref( null )
    const filteredPosts = ref(null)
    async function initializeStore() {
        let users = await getUsers()
        allPosts.value =  await getPosts()
        for (let post of allPosts.value) {
            post.author = users.filter((a) => a.id === post.userId)[0]
        }
        filteredPosts.value = allPosts.value
    }

    function filterByName(name){
        filteredPosts.value = allPosts.value.filter((post) =>{
            return post.author.name.toLowerCase().includes(name.toLowerCase())
        })
    }

    return { allPosts, filteredPosts, initializeStore, filterByName }
})