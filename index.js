import express from "express";

const app= express()

app.get('/',(req,res)=>{
    console.log('In The Main Route')
    res.send('In the main Route')
})
app.get('/admin',(req,res)=>{
    console.log('In The Admin Route')
    res.send('In the Admin Route')
})

app.listen(3000,console.log(`Server Start at 3000`))


