
import {findAllUsers, createUser, findUser, deleteUser} from "../controller/user.controller"

import { Router } from "express";
const route = Router()

//create
route.post('/', createUser)

//find all users
route.get('/', findAllUsers);

//find user
route.get('/:id', findUser); 

//delete user
route.delete('/:id', deleteUser)

export default route;