var getUser = (id,callback)=>{
  var user= {
    name:'nrk'
  }
  setTimeout(()=>{
    callback(user);
  },3000);
};


getUser(5,(user)=>{
  console.log('user name '+user.name);
});
