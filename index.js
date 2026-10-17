import express from "express";

const app= express()

app.get('/',(req,res)=>{
    console.log('In The Main Route')
    res.send('In the main Route')
})

app.listen(3000,console.log(`Server Start at 3000`))


