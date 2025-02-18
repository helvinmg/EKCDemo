const express=require("express")
const app=express()

app.get("/",(req,res)=>
{
    res.send("<h1>hello from express</h1>")
})
app.get("/about",(req,res)=>
{
        res.send("<h1>About Page</h1>")
})
app.get("/contact",(req,res)=>
{
            res.send("<h1>Contact Page</h1>")
})
app.get("/services",(req,res)=>
{
            res.send("<h1>Service Page</h1>")
})
app.use((req,res)=>{
    res.send("<h1>404 Page Not Found</h1>")
})
app.listen(4500,()=>console.log("Express server is running on 4500"))

