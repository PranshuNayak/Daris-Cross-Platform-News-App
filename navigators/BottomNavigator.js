import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Account from "../screens/Account";
import BookMarks from "../screens/BookMarks";
import AllScreenNavigator from "./AllScreensNavigator";
import SearchScreen from "../screens/SearchScreen";
import BottomTabIcons from "../components/BottomTabIcons";
import NavigationTheme from "../config/NavigationTheme";

const Tab = createBottomTabNavigator();

const BottomNavigator = ({userDetails}) => (
  <NavigationContainer theme={NavigationTheme}>
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#034694" },
        headerStyle: { backgroundColor: "#034694" },
        headerTitleStyle: { color: "white" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={AllScreenNavigator}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarButton: () => (
            <BottomTabIcons
              size={20}
              name="home-outline"
              text="Home"
              onPress={() => navigation.navigate("Home")}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <BottomTabIcons
              size={20}
              name="search-outline"
              onPress={() => navigation.navigate("Search")}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Bookmarks"
        component={BookMarks}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <BottomTabIcons
              size={20}
              name="bookmark-outline"
              onPress={() => navigation.navigate("Bookmarks")}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <BottomTabIcons
              size={20}
              name="person-outline"
              onPress={() => navigation.navigate("Account")}
            />
          ),
        })}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default BottomNavigator;
