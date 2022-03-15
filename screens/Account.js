import React,{useContext} from "react";
import { View, StyleSheet,Text } from "react-native";

import AccountFlatList from "../components/AccountFlatList";
import { globalContext } from "../context/userContext";
import AccountPrimaryInfo from "../components/AccountPrimaryInfo";

function Account() {
  const data_1 = [
    { id: "1", icon: "globe", text: "United States" },
    { id: "2", icon: "language", text: "English" },
    { id: "3", icon: "list", text: "Favourite Topics" },
    { id: "4", icon: "lock", text: "Change password" },
    { id: "5", icon: "log-out", text: "Logout" },
  ];

  
  const {user} = useContext(globalContext);

  return (
    <View style={styles.container}>
      <AccountPrimaryInfo email={user.email} name={user.name} />
     <AccountFlatList data={data_1}  />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
 
});

export default Account;
