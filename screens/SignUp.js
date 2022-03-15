import React,{useEffect, useState} from "react";
import ModelButton from "../components/ModelButton";
import { View, StyleSheet, ImageBackground, Dimensions, Text } from "react-native";

import * as Yup from "yup";
import SubmitButton from "../components/SubmitButton";
import colors from "../config/colors";
import FormikForm from "../components/FormikForm";
import FormikFormField from "../components/FormikFormField";
import PickerComponent from "../components/PickerComponent";
import Screen from "../components/Screen";
import {signup} from '../api/authenticate'


const { width, height } = Dimensions.get("window");

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("invalid format").required("Email is required"),
  language:Yup.string(),
  password: Yup.string()
    .min(8,'Length should be atleast 8')
    .required("Password is required"),
});

function SignUp({navigation}) {

  const [visibility,setVisibility] = useState(false);
  const handleVisibility = ()=>{
    setVisibility(!visibility);
  }
  
  
  const pickerItems = [
    { id: "1", name: "English" },
    { id: "2", name: "Hindi" },
  ];

  

  const [selectedItem,setItem] = useState('Language');
  const selectItem = (item)=>{
    setItem(item);
    handleVisibility();
    
  }

  const createNewUser = (values)=>{
    values.primaryLanguage = selectedItem
    signup(values);
  }



  return (
    <>
      <ImageBackground
        style={styles.background}
        source={require("../assets/bg_1.png")}
      >
        <Screen>
          

          <View style={styles.form}>
            <FormikForm
              initialValues={{ name: "", email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values)=>{createNewUser(values)} }
            >
              
              <FormikFormField
                icon="account"
                placeholder="Name"
                name="name"
                textContentType="username"
              />
              <FormikFormField icon="email" placeholder="Email" name="email" />
              <PickerComponent
                icon1="ab-testing"
                icon2="chevron-down"
                selectedItem={selectedItem}
                items={pickerItems}
                handleVisibility={handleVisibility}
                visibility={visibility}
                selectItem={selectItem}
              />
              <FormikFormField
                icon="lock"
                placeholder="Password"
                name="password"
                secureTextEntry={true}
                textContentType="password"
              />
              <SubmitButton title="Register" />
            </FormikForm>
          </View>
        </Screen>
      </ImageBackground>
      
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
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
    top: 100,
    alignItems: "center",
  },
});

export default SignUp;
