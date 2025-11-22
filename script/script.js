
let userData = []
// User Data - firstName, lastName, email
let memberData = []
// Membership Data - membership, membershipID
let indexData = []
// User - Membership - userIndex, MembershipIndex
function addUser(){   
    const firstName =  document.getElementById("firstName").value 
    const lastName =  document.getElementById("lastName").value 
    const email =  document.getElementById("email").value
    userData.push([firstName, lastName, email])
}
function addMembershipToUser(){ 
    const emailElement =  document.getElementById("email").value  
    let userIndex = -1;
    let chosenEmail = "";
    // Get name from Society and Info and set it
    for (let i = 0; i < userData.length; i++){
        if (userData[i][2] == email){
                userIndex = i;   
        }
    }
    for (let i = 0; i < userData.length; i++){
        if (userData[i][2] == email){
                userIndex = i;   
        }
    }
    const membership =  document.getElementById("membership").value 
    const membershipID =  document.getElementById("membershipID").value
    memberData.push([membership, membershipID])
}