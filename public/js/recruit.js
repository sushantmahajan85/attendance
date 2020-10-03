

const passValueApi = async (name,gender,roll,branch,phone,place,timeDevote,otherSocities,Hobbies,des,message,famous,rateQ1,rateQ2,rateQ3,rateQ4,rateQ5,value)=>{
    const result = await axios({
        method:"POST",
        url:"/api/recruit",
        data:{
            name,gender,roll,branch,phone,place,timeDevote,otherSocities,Hobbies,des,message,famous,rateQ1,rateQ2,rateQ3,rateQ4,rateQ5,value
        }
    });
}
console.log("js started");
document.getElementById("recruit_form").addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const roll = document.getElementById("roll").value;
    const branch = document.getElementById("branch").value;
    const phone = document.getElementById("phone").value;
    const place = document.getElementById("place").value;
    const timeDevote = document.getElementById("timeDevote").value;
    const otherSocities = document.getElementById("otherSocities").value;
    const Hobbies = document.getElementById("Hobbies").value;
    const des = document.getElementById("des").value;
    const message = document.getElementById("message").value;
    const famous = document.getElementById("famous").value;
    const rateQ1 = document.getElementById("rateQ1").value;
    const rateQ2= document.getElementById("rateQ2").value;
    const rateQ3= document.getElementById("rateQ3").value;
    const rateQ4= document.getElementById("rateQ4").value;
    const rateQ5= document.getElementById("rateQ5").value;
    const value= document.getElementById("value").value;
    console.log(name);
    passValueApi(name,gender,roll,branch,phone,place,timeDevote,otherSocities,Hobbies,des,message,famous,rateQ1,rateQ2,rateQ3,rateQ4,rateQ5,value);
});