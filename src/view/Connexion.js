import { useEffect, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Services/Contents/AuthProvider";
import axios from "../api/axios";

const LoginUrl = "/auth";

const Connexion = (props) => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LoginUrl,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
    } catch (e) {
      if (!e?.response) {
        setErrMsg("No Server Response");
        console.log("No Server Response")
      } else if (errMsg.response?.status === 400) {
        setErrMsg("Missing Username or Password");
        console.log("Missing Username or Password")
      } else if (errMsg.response?.status === 401) {
        setErrMsg("Unauthorized");
        console.log("Unauthorized")
      } else {
        setErrMsg("Login Failed");
        console.log("Login Failed")
      }
      errRef.current.focus();
    }
    console.log(user, pwd);

    setSuccess(true);
  };

  return (
    <div>
      <div className="container-fluid py-10">
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center md:space-x-10">
          <div className="flex w-full h-full">
            <img
              src={require("../image/conseil.jpg")}
              className={"h-hull w-full"}
            />
          </div>
          <div className="flex flex-col space-y-7 py-5">
            <span className="font-bold text-3xl text-secondary">
              Connexion Patient
            </span>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 text-center flex-col"
            >
              <input
                type="mail"
                name="mail"
                id="mail"
                autoComplete="off"
                ref={userRef}
                onChange={(e) => setUser(e.target.value)}
                value={user}
                className="w-full border-2 h-11 p-1 rounded-sm"
                placeholder="Votre mail"
                required
              />
              <input
                type="password"
                name="mdp"
                id="mdp"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                className="w-full border-2 h-11 p-1 rounded-sm"
                placeholder="Votre mot de passe"
                required
              />
              <div className="font-bold text-end">
                <Link to="#" className="text-primary">
                  Mots de passe oublié
                </Link>
              </div>
              <button
                className="h-10 w-40 bg-[#a5000a] rounded-md text-white"
              >Se connecter</button>
            </form>
            <div className="text-md text-primary">
              <i class="fa fa-fingerprint me-2"></i>
              <Link to="#">Cree un compte patient</Link>
            </div>
            <hr />
            <div className="text-md text-primary">
              <i class="fa fa-fingerprint me-2"></i>
              <Link to="#">Connexion Docteur</Link>
            </div>
            <div className="text-md text-primary">
              <i class="fa fa-fingerprint me-2"></i>
              <Link to="/inscription">Cree un compte Docteur</Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
