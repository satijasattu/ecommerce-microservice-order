import { Request, Response } from "express";
import {orderList} from "../mockData/mockdata"

export const getOrderDetailsForPostgres = (req:Request,res:Response)=>{
    res.status(200).json(orderList)
};

export const getOrderDetailsForMongo = (req:Request,res:Response)=>{
    res.status(200).json(orderList)
};
