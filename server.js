const express=require("express")
const app=express()

app.get("/",(req,res)=>
{
    res.send("<h1>Welcome to Ecommerce Website</h1>")
})
//Dynamic Route Using URL Parameter
app.get("/products/:id",(req,res)=>
{
        let prodid=req.params.id
        res.send(`<h1>Details of product with id ${prodid} </h1>`)
})
//http://localhost:4500/search?name=redmi&cate=mobile
app.get("/search",(req,res)=>
{  
    if(req.query.name && req.query.cate)
        res.send(`<h1>Details for searched product with name ${req.query.name} and Category ${req.query.cate}</h1>`)
    else
        res.send('<h1> search require both name & category</h1>')
})
app.listen(4500,()=>console.log("Express server is running on 4500"))