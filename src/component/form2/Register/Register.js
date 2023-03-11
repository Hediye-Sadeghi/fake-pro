import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../../validators/rules";
import AuthContext from "../../context/authContext";
import Input from "../../FormDet/Input";
import {Button} from "../../commen/Button";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

export default function Register() {
  const authContext = useContext(AuthContext);
  console.log(authContext);

  const [formState, onInputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      username: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const registerNewUser = (event) => {
    event.preventDefault();

    const newUserInfos = {
      name: formState.inputs.name.value,
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.password.value,
    };

    fetch(`https://fake-pro-62cfd-default-rtdb.firebaseio.com/users.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserInfos),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        authContext.login(result.user, result.accessToken);
      });

    console.log("User Register");
  };

  return (
    <>
      <Navbar />
      <section className="flex justify-center overflow-hidden relative">
        <div className="flex flex-col items-center shadow-xl my-10 p-10 rounded-lg border-b-4 border-orange-500">
          <span className="text-lg font-bold text-blue-900 pb-1">ساخت حساب کاربری</span>
          <span className="text-md text-blue-700">
            خوشحالیم قراره به جمع ما بپیوندی
          </span>
          <div className="flex justify-center bg-blue-50 p-3 rounded-lg my-4">
            <span className="text-lg text-blue-500 leading-8">
              قبلا ثبت‌نام کرده‌اید؟{" "}
            </span>
            <Link className="bg-orange-300 text-blue-900 py-1 px-2 text-lg rounded-lg mr-3 hover:bg-orange-200" to="/login">
              وارد شوید
            </Link>
          </div>
          <form action="#" className="w-full">
            <div className="relative">
              <Input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="w-full my-2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                element="input"
                id="name"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(6),
                  maxValidator(20),
                ]}
              />
              <i className="absolute top-3 left-5 leading-8 text-gray-400 fa fa-user"></i>
            </div>
            <div className="relative">
              <Input
                type="text"
                placeholder="نام کاربری"
                className="w-full my-2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                element="input"
                id="username"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                ]}
              />
              <i className="absolute top-3 left-5 leading-8 text-gray-400 fa fa-user"></i>
            </div>
            <div className="relative">
              <Input
                type="text"
                placeholder="آدرس ایمیل"
                className="w-full my-2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                element="input"
                id="email"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  maxValidator(25),
                  emailValidator(),
                ]}
              />
              <i className="absolute top-3 left-5 leading-8 text-gray-400 fa fa-envelope"></i>
            </div>
            <div className="relative">
              <Input
                type="password"
                placeholder="رمز عبور"
                className="w-full my-2 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                element="input"
                id="password"
                onInputHandler={onInputHandler}
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
              />
              <i className="absolute top-3 left-5 leading-8 text-gray-400 fa fa-lock-open"></i>
            </div>
            <Button
              className={`flex items-center relative p-3 rounded-lg bg-orange-500 ${
                formState.isFormValid
                  ? "login-form__btn-success"
                  : "login-form__btn-error"
              }`}
              type="submit"
              onClick={registerNewUser}
              disabled={!formState.isFormValid}
            >
              <i className="text-lg text-blue-900 pr-2 fa fa-user-plus"></i>
              <span className="mx-auto text-lg text-blue-900 font-bold">عضویت</span>
            </Button>
          </form>
          <div className="w-full mt-3 text text-blue-900">
            <span className="font-semibold leading-8">سلام کاربر محترم:</span>
            <ul className="list-disc text-right leading-8">
              <li className="login__des-item">
                لطفا از مرورگر های مطمئن و بروز مانند گوگل کروم و فایرفاکس
                استفاده کنید.
              </li>
              <li className="login__des-item">
                ما هرگز اطلاعات محرمانه شمارا از طریق ایمیل درخواست نمیکنیم.
              </li>
              <li className="login__des-item">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}