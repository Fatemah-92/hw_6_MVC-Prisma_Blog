import {createPost, deleteAllPost, deleteOnePost, findAllPosts, findOneUserPost, updatePost} from "../controller/post.controller"

import { Router } from "express";
const route = Router()

//create
route.post('/', createPost);

//find all posts
route.get('/', findAllPosts);

//find user post
route.get('/:id', findOneUserPost);

//update post
route.put('/:id', updatePost);

//delete all posts for user
route.delete('/deletePosts/:id', deleteAllPost)

//delete one post
route.delete('/deletePost/:id', deleteOnePost)

export default route;