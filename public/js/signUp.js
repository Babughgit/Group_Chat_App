document.getElementById('signup_form').addEventListener('submit',async function(e)
{
    e.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phonenumber=document.getElementById('phoneNumber').value;
    const password=document.getElementById('password').value;

    try{
        const response=await fetch('/signup',
            {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(
                    {
                        name:name,
                        email:email,
                        password:password,
                        phonenumber:phonenumber
                    },
                ),
            }
        );
        const data=response.json();
        if(response.ok)
        {
            console.log('login succefull');
        }
        else{
            console.log(error);
        }
    }
    catch(error){
  console.log('error',error);
    }
})