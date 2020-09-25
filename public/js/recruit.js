

const passValueApi = async (name,gender,roll,branch,CG,phone,place,timeDevote,food,message)=>{
    const result = await axios({
        method:"POST",
        url:"/api/recruit",
        data:{
            name,gender,roll,branch,CG,phone,place,timeDevote,food,message
        }
    });
}

document.getElementById("recruit_form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const roll = document.getElementById("roll").value;
    const branch = document.getElementById("branch").value;
    const CG = document.getElementById("CG").value;
    const phone = document.getElementById("phone").value;
    const place = document.getElementById("place").value;
    const timeDevote = document.getElementById("timeDevote").value;
    const food = document.getElementById("food").value;
    const message = document.getElementById("message").value;
    
    passValueApi(name,gender,roll,branch,CG,phone,place,timeDevote,food,message);
});