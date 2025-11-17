import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Dashboard()
{

    const navigate = useNavigate();

    //logout button
    const handleLogout = async () => {
        try {
        await signOut(auth); // Logs out the user
        console.log("User signed out");
        navigate("/login"); // Redirect to login page
        } catch (error) {
        console.error("Logout error:", error.message);
        alert("Error logging out. Please try again.");
        }
    };


    const handlesavedata = async () =>{
        navigate('/savedata');
    };


    const handlechat = async () =>{
        navigate('/chatbox');
    };


    const handlechatnew = async () =>{
        navigate('/chatboxnew');
    };


    return(
        <div className="">
            <h1>Welcome Admin!</h1>
            <button onClick={handlesavedata}>Save Data</button>
            <button onClick={handlechat}>Chat Engine</button>
            <button onClick={handlechatnew}>Chat Engine New</button>
            <button onClick={handleLogout}>Logout</button>

         </div>
    );

}

export default Dashboard;