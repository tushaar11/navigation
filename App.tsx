import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// // class HomeScreen extends React.Component {
// //   render()
// //   {
    
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Home Screen</Text>
// //       <Text>{this.props.route.params?this.props.route.params.greet:''}</Text>
// //       <Button
// //         title="Go to Details"
// //         onPress={()=> this.props.navigation.navigate('Details',{greet:'love you'})}
// //       />
// //     </View>
// //   );
// //   }
// // }


// // class DetailsScreen extends React.Component {
// //   render()
// //   {
   
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       {/* <Text>{this.props.navigation.getParam('greet')}</Text> */}
     
// //       <Text>Details Screen</Text>
// //       <Text>{this.props.route.params.greet}</Text>
// //       <Button
// //       title="go to home"
// //       onPress={() => this.props.navigation.navigate('Home',{greet:"i love you too"}) }
// //       />
// //     </View>
// //   );
// //   }
// // }

// class HomeScreen extends React.Component {
//   render()
//   {
    
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => this.props.navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
//   }
// }


// class NotificationsScreen extends React.Component {
//   render()
//   {
   
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => this.props.navigation.goBack()} title="Go back home" />
//     </View>
//   );
//   }
// }

// // const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator();

// function App() {
//   return (
//     // <NavigationContainer>
//     //   <Stack.Navigator   initialRouteName="Home" 
//     //   screenOptions={{
        
//     //     headerStyle: {
//     //       backgroundColor: '#f4511e',
//     //     },
//     //     headerTintColor: '#fff',
//     //     headerTitleStyle: {
//     //       fontWeight: 'bold',
//     //     },
//     //   }}>
          
//     //     <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'My home' }}/>
//     //     <Stack.Screen name="Details" component={DetailsScreen} 
        
//     //     />
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>

//   );
// }

// export default App;

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}
const Stack  = createStackNavigator();
// const Main = () => <View><Text>mai main hu</Text></View>
// function Home({ navigation }) {
//   return(
//   <Stack.Navigator>
//       <Stack.Screen name="Main" component={Main} options={{
//           headerLeft: () => <Ionicons name="md-menu" size={32} color="green"
//               onPress={() => navigation.openDrawer()}
//             />
//     }} />
//   </Stack.Navigator>
//   );
// }

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

// const navigation = useNavigation();

function Root() {
  return (
    <Drawer.Navigator initialRouteName="Home"  >
        <Drawer.Screen name="Home" component={HomeScreen} Options={{title:'home'}}/>
        <Drawer.Screen name="Notifications" component={NotificationsScreen} Options={{title:'Notifications'}} />
      </Drawer.Navigator>
  );
}

 class App extends React.Component {
   render()
     {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={ ({navigation}) =>({
        headerLeft: ()=> (<Ionicons name="md-menu" size={32} color="green" onPress={() => navigation.dispatch(DrawerActions.toogleDrawer() ) }/>),
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',

        headerTitleStyle: {
          fontWeight: 'bold'
        },
      } 
    ) }>
      
      <Stack.Screen name="Root" component={Root} />

      </Stack.Navigator>

  
    </NavigationContainer>
  );
    }
}
export default App;