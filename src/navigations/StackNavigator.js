import { StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import CameraIndex from '../screens/camera';
import HomeIndex from '../screens/home';
import VideoCamIndex from '../screens/video-cam';

const RootStack = createStackNavigator(
  {
    home: {
      screen: HomeIndex,
      navigationOptions: {
        header: null,
        },
    },
    camera: {
      screen: CameraIndex,
      navigationOptions: {
        header: null,
        },
    },
    video: {
      screen: VideoCamIndex,
      navigationOptions: {
        header: null,
        },
    },
  },
  {
    initialRouteName: 'home',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
  );

const AppStack = createAppContainer(RootStack);

export default AppStack;
