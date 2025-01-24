 document.getElementById('login_form').addEventListener('submit',async function(e)
{
    e.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;

    try{

        const response=await fetch('/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name:email,
                password:password
            }),
        });
        const data=await response.json();
        if(response.ok)
        {
            console.log("login successfull");        
        }
        else{
            console.log("error")
        }

    }
    catch(error)
    {
        console.log('error',error);
    }
})