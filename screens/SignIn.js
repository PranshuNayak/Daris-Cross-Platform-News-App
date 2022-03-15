import React,{useContext} from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

import { authSignin } from "../api/authenticate";
import * as Yup from "yup";
import SubmitButton from "../components/SubmitButton";
import colors from "../config/colors";
import FormikForm from "../components/FormikForm";
import FormikFormField from "../components/FormikFormField";
import { globalContext } from "../context/userContext";

const { width, height } = Dimensions.get("window");

const validationSchema = Yup.object().shape({
  email: Yup.string().email("invalid format").required("Email is required"),
  password: Yup.string()
    .min(8, "Length should be atleast 8")
    .required("Password is required"),
});

function SignIn({ navigation }) {
  const {sigin} = useContext(globalContext);
  const gotoSignUp = () => {
    navigation.navigate("Signup");
  };

  const login = async (values)=>{
    const res = await authSignin(values);
    if(res){
      sigin(res);
    }

  }

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg_1.png")}
    >
      <View style={styles.branding}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.image}
        />
        <Text style={styles.text}>Daris , news at your fingertips</Text>
      </View>
      <View style={styles.form}>
        <FormikForm
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => login(values)}
        >
          <FormikFormField icon="email" placeholder="Email" name="email" />
          <FormikFormField
            icon="lock"
            placeholder="Password"
            name="password"
            secureTextEntry={true}
            textContentType="password"
          />
          <SubmitButton title="Login" />
        </FormikForm>
        <TouchableWithoutFeedback onPress={gotoSignUp}>
          <Text style={styles.signup}>Don't have a account ? Sign up</Text>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
  },
  branding: {
    position: "absolute",
    top: 60,
    left: 65,
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: colors.black,
    fontSize: 17,
  },
  image: {
    width: 100,
    height: 100,
  },
  form: {
    width: width,
    position: "absolute",
    top: 250,
    alignItems: "center",
  },
  signup: {
    color: colors.blue,
    fontSize: 15,
    textDecorationStyle: "solid",
    textDecorationColor: colors.blue,
    textDecorationLine: "underline",
    marginTop: 5,
  },
  separator: {
    height: 20,
  },
});

export default SignIn;
