import express from "express";

const additems = async(req ,res) =>{
    const {name , description , price , category , image} = req.body;
    if(!name || !description || !price || !category || !image || name.trim==="" || description.trim===""|| price.trim===""|| category.trim===""){
        return res.status(200).send("Some Field Is Missing")
    }
}