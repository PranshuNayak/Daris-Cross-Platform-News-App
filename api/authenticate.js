const authSignup = async (user)=>{
    await fetch('http://192.168.43.241:5000/authenticate/signup',{
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)
    })
   
}

const authSignin = async (user)=>{

    const result = await fetch('http://192.168.43.241:5000/authenticate/signin',{
        method:'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(user)
    })
   const userDetails = await result.json();
   return userDetails;
}



module.exports={authSignup,authSignin};