const express=require('express');
const app=express();
const path=require('path');
const port=5000;

app.use('/public',express.static(path.join('public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'.','views','signUp.html'));
});

app.post('/signup',(req,res)=>
{
    const name=req.body;
    console.log(name);
})


app.listen(port,()=>
{
    console.log('server running');
})

