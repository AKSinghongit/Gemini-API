import { GoogleGenAI } from "@google/genai";
import express from "express";
const ai = new GoogleGenAI({ apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"});
const app=express()
app.use(express.json())
app.post("/genrate",async(req,res)=>{
    const {prompt} = req.body;
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  res.json({response:response.text})
})
app.listen(3001,()=> console.log("Started....."))


