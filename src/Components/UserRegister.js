import React, {useState} from "react";
const UserRegister = () =>{

    const userData = ({
        fname  : "Laxshmi",
        lname  : "Priya",
        age    : "28",
        gender :  "Male",
        ismarried : true,
        country : "India"
    });

    const[user, setUser] = useState(userData);

    const handleChange = (e)=>{ console.log("hello")
        const name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({...user, [name] : value})
    }

    return(
        <>

            <table border="1">
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{user.fname}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{user.lname}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{user.age}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{user.gender}</td>
                    </tr>
                    <tr>
                        <td>ismarried</td>
                        <td>{user.ismarried ? "Married" : "Not Married"}</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{user.country}</td>
                    </tr>
                </tbody>
            </table>
            <div className="register-form">
                <h2>User Register</h2>
                <div className="form-wrapper">
                    <div className="row">
                        <label>First Name:</label>
                        <input type="text" name="fname" onChange={handleChange} value={user.fname}/>
                    </div>
                    <div className="row">
                        <label>Last Name:</label>
                        <input type="text" name="lname" onChange={handleChange} value={user.lname}/>
                    </div>
                    <div className="row">
                        <label>Age:</label>
                        <input type="text" name="age" onChange={handleChange} value={user.age}/>
                    </div>
                    <div className="row">
                        <label>Gender:</label>
                        Male
                        <input type="radio" name="gender" onChange={handleChange} checked={user.gender == "Male"} value="Male"/>
                        Female
                        <input type="radio" name="gender" onChange={handleChange} checked={user.gender =="Female"} value="Female"/>
                    </div>
                    <div className="row">
                        <label>Is Married:</label>
                        <input type="checkbox"  onChange={handleChange} name="ismarried" checked={user.ismarried}/>
                    
                    </div>
                    <div className="row">
                        <label>Country:</label>
                        <select name="country" value={user.country} onChange={handleChange}>
                            <option>Select Country</option>
                            <option>India</option>
                            <option>Canada</option>
                            <option>USA</option>
                        </select>
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserRegister;

