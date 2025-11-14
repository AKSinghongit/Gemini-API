import { GoogleGenAI } from "@google/genai";
import express from "express";
const ai = new GoogleGenAI({ apiKey: "AIzaSyBBw4EtoIFMN8-9xjDWzlGlTd1v0N_3wKI"});
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
