import {prisma} from "../config/db";
import {Request, Response } from "express";

//create
export const createUser = async (req: Request, res: Response)=> {
    const {username, password, email, role} = req.body;
    let user = await prisma.user.create({
        data: {
            username,
            password,
            email,
            role
            
        }
    })
    res.json({"message": "user created", "user": user});
}

//find all users
export const findAllUsers = async (req: Request, res: Response)=> {
    let users = await prisma.user.findMany();
    console.log(users);
    res.json(users);
}

//find one user
export const findUser = async (req: Request, res: Response)=> {
    try {
        let user = await prisma.user.findFirst({
            where: {
                id: req.params.id
            }
        })
        if(! user) {
            res.json({"message": "Not created yet!"});
        } else {
            res.json({"message": `Welcome ${user.username}`, user});
        }
    } catch (error) {
        res.json({"message": error})
    }
    
}

//delete
export const deleteUser = async (req: Request, res: Response)=> {
    try {
        let deletedUser = await prisma.user.delete({
            where: {
                id: req.params.id
            }
        })
        res.json({"message": "user deleted", "deletedUser": deletedUser});
    }catch(error){
        res.json({"message": error})
    }     
}

