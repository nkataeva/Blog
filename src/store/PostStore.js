import { observable, action, makeObservable, computed } from "mobx";
import { initData } from "./initData";

export class PostStore {
    posts = [];

    addPost(newPost) {
        this.posts.unshift(newPost);
    }

    get getPostById() {
        return (index) => this.posts[index];
    }

    likePost(index) {
        this.posts[index].likes += 1;
    }

    editPost(index, newPost) {
        this.posts[index] = newPost;
    }

    deletePost(index) {
        this.posts.splice(index, 1);
    }

    init() {
        this.posts = [...initData];
    }

    constructor() {
        makeObservable(this, {
            posts: observable,
            getPostById: computed,
            likePost: action,
            editPost: action,
            deletePost: action,
            addPost: action,
        })
        this.init();
    }
}

const postStore = new PostStore();

export default postStore;