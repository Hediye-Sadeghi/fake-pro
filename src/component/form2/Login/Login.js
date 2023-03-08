import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar"
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "./../../validators/rules";
import Input from './../../FormDet/Input';
import Button from './../../FormDet/Button';
import { useForm } from './../../hooks/useForm';
import AuthContext from './../../context/authContext';
import Footer from "../../Footer"


export default function Login() {

  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [isGoogleRecaptchaVerify, setIsGoogleRecaptchaVerify] = useState(false)
 
  const [formState, onInputHandler] = useForm(
    {
      username: {
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

  const userLogin = (event) => {
    event.preventDefault();

    const userData = {
      identifier: formState.inputs.username.value,
      password: formState.inputs.password.value,
    };

    fetch(`https://fake-pro-62cfd-default-rtdb.firebaseio.com/users.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
     })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          return res.text().then((text) => {
            throw new Error(text);
          });
        } else {
          return res.json();
        }
      })
      .then((result) => {
        swal({
          title: "با موفقیت لاگین شدید",
          icon: "success",
          buttons: "ورود به پنل",
        }).then((value) => {
          navigate("/");
        });
        authContext.login({}, result.accessToken);
      })
      .catch((err) => {
        swal({
          title: "همچین کاربری وجود ندارد",
          icon: "error",
          buttons: "تلاش دوباره",
        });
      });
    };

  const onChangeHandler = () => {
    console.log('گوگل ری‌کپچا وریفای شد`');
    setIsGoogleRecaptchaVerify(true)
  }

  return (
    <>
      <Navbar />
      <section className="flex justify-center overflow-hidden relative">
        <div className="flex flex-col items-center shadow-xl my-10 p-10 rounded-lg border-b-4 border-orange-500">
          <span className="text-lg font-bold text-blue-900 pb-1">ورود به حساب کاربری</span>
          <span className="text-md text-blue-700">
            خوشحالیم دوباره میبینیمت دوست عزیز :)
          </span>
          <div className="flex justify-center bg-blue-50 p-3 rounded-lg my-4">
            <span className="text-lg text-blue-500 leading-8">کاربر جدید هستید؟</span>
            <Link className="bg-orange-300 py-1 px-2 text-lg rounded-lg mr-3 hover:bg-orange-200 " to="/register">
              ثبت نام
            </Link>
          </div> 
          <form action="#" className="w-full">
            <div className="relative">
              <Input
                className="w-full shadow-sm p-3 rounded-lg mb-4 focus:outline-none"
                id="username"
                type="text"
                placeholder="نام کاربری یا آدرس ایمیل"
                element="input"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(20),
                  // emailValidator(),
                  
                ]}
                onInputHandler={onInputHandler}
              />
              <i className="absolute top-3 left-5 leading-8 text-gray-400 fa fa-user"></i>
            </div>
            <div className="relative">
              <Input
                element="input"
                id="password"
                type="password"
                className="w-full shadow-sm p-3 rounded-lg mb-4 focus:outline-none"
                placeholder="رمز عبور"
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputHandler={onInputHandler}
              />

              <i className="absolute top-3 left-5 leading-8 text-gray-400 fa fa-lock-open"></i>
            </div>
            <div className="login-form__password recaptcha-parent">
              <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChangeHandler} />
            </div>
            <Button
              className={`flex items-center relative w-full p-3 rounded-lg bg-orange-500 ${
                (formState.isFormValid && isGoogleRecaptchaVerify)
                  ? "bg-blue-500"
                  : "bg-orange-500"
              }`}
              type="submit"
              onClick={userLogin}
              disabled={(!formState.isFormValid || !isGoogleRecaptchaVerify)}
            >
              <i className="text-lg text-blue-900 pr-2 fas fa-sign-out-alt"></i>
              <span className="mx-auto text-lg text-blue-900 font-bold">ورود</span>
            </Button>
            <div className="flex justify-between mt-3">
              <label className="flex items-center">
                <input
                  className="ml-3"
                  type="checkbox"
                />
                <span className="text-gray-500">
                  مرا به خاطر داشته باش
                </span>
              </label>
              <label className="text-gray-500">
                <a  href="#">
                  رمز عبور را فراموش کرده اید؟
                </a>
              </label>
            </div>
          </form>
          <div className="w-full mt-3 text text-blue-900 ">
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
