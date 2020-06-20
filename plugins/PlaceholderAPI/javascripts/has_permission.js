var haspermission = "%player_has_permission_permission.test%";

// create a function with the name you want
function permission() {

// if the haspermission variable that we created before return yes (true boolean)
// the js placeholder will return what we set in the return down
   if (haspermission === "yes") {
       return "это круто";
   }

// if the haspermission varibale wasnt true it will return what we set down
   else {
       return "это не круто";
   }
}
// by this we are calling the function to run
permission();