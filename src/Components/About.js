import UserContext from "../utils/UserContext";
import {useContext} from "react";

const About = () => {
  const { setUserName, loggedinUser } = useContext(UserContext);

  return (
    <div className="text-center m-4 p-4">
      <p className="text-2xl">Welcome, to About Us Page</p>

      <div className="m-2 p-4">
        Loggedin User : 
        <UserContext.Consumer>
          {({ loggedinUser }) => <span className="font-bold"> {loggedinUser}</span>}
        </UserContext.Consumer>
      </div>
      <div>
        <label>User Name : </label>
        <input
          type="text"
          className="border border-solid border-black rounded-lg p-[5px] m-4"
          value={loggedinUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};
export default About;
