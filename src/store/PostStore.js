import { observable, action, makeObservable } from "mobx";
import { initData } from "./initData";

export class PostStore {
    posts = [];

    addPost(title, body, image, author, dateCreate, likes) {
        const post = {
            title: title,
            body: body,
            image: image,
            author: author,
            dateCreate: dateCreate,
            likes: likes
        }
        this.posts.unshift(post);
    }

    init() {
        this.posts = [...initData];
    }

    constructor() {
        makeObservable(this, {
            posts: observable,
            addPost: action,
        })
        this.init();
    }
}

const postStore = new PostStore();

export default postStore;