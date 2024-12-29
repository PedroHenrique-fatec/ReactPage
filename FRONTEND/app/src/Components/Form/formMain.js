import React, {useState} from "react";
import RegisterForm from "./register";
import LoginForm from "./login";

function Form() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin((prev) => !prev);
    }

return (
    <div>
      {isLogin ? (
        <LoginForm toggleForm={toggleForm} />
      ) : (
        <RegisterForm toggleForm={toggleForm} />
      )}
    </div>
)
}

export default Form;