/* @author: jamesduan */
import { StackNavigator } from 'react-navigation';

import Login from './scenes/Login'

const stackNavigatorConfig = {
  headerMode: 'none',
  initialRouteName: 'login',
  mode: 'modal'
}

const routeConfigs = {
  // Advertisement: {screen: Advertisement},
  // ModalDemo: { screen: ModalDemo}
  login: { screen: Login },
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
