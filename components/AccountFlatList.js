import React from 'react';
import { View,StyleSheet,FlatList } from 'react-native';
import AccountListComponent from "../components/AccountListComponent";

function AccountFlatList({data}) {
  return (
      <View >
           <FlatList
       contentContainerStyle={{marginTop:20, justifyContent: 'center'}}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AccountListComponent icon={item.icon} text={item.text} />
        )}
        ItemSeparatorComponent={()=>(<View style={styles.separator}/>)}
      />
      </View>
  );
}

const styles = StyleSheet.create({
    separator:{
        height:2,
        backgroundColor:'#4475ad'
      }
})


export default AccountFlatList;
