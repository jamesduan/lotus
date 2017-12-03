/* @author: jamesduan */
import { StackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native'

import Login from './scenes/Login'
import Home from './scenes/Home'

const stackNavigatorConfig = {
  headerMode: 'none',
  initialRouteName: 'login',
  mode: 'none',
  transitionConfig : () => ({
  	transitionSpec: {
  		duration: 0,
  		timing: Animated.timing,
  		easing: Easing.step0,
  	},
  })
}

const routeConfigs = {
  // Advertisement: {screen: Advertisement},
  // ModalDemo: { screen: ModalDemo}
  login: { screen: Login },
  home: { screen: Home}
  // FingerPrintAuthentication: { screen: FingerPrintAuthentication },
  // HomeDrawerRouter: {
  //   screen: HomeDrawerRouter,
  //   navigationOptions: ({navigation}) => ({
  //     gesturesEnabled: false
  //   }),
  // },
  // AuthenticationInitial: { screen: AuthenticationInitial },
  // Register: { screen: Register},
  // LoginPage: {
  //   screen: LoginPage,
  //   navigationOptions: ({navigation}) => ({
  //     gesturesEnabled: false
  //   })
  // },
  // GesturePasswordSetup: {screen: GesturePasswordSetup},
  // IDCStackRouter: { screen: IDCStackRouter },
  // CameraDemo: { screen: CameraDemo },
  // IDCRoomList: { screen: IDCRoomList},
  // IDCRoomInspection: { screen: IDCRoomInspection},
  // IDCRoomInspectionDetail: { screen: IDCRoomInspectionDetail},
}

export default Router = StackNavigator(routeConfigs, stackNavigatorConfig);
