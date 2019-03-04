import {StyleSheet} from 'react-native';

let CIRCLE_RADIUS = 45;
export const styles = StyleSheet.create({
  circle: {
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    width: '100%',
    height : 50,
    padding : 5,
    marginBottom : 50
  },
  cameraShot: {
    flex : 0.5,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor: 'transparent',
    // width : 50,
    // height : 50,
    // borderRadius : 50,
    // borderWidth : 5,
    // borderColor : '#d4d4d4'
  },
  dragTextCircle : {
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    width : 40,
    height : 40,
    borderRadius : 50,
  },
  dragText : {
    justifyContent : 'center',
    alignItems : 'center',
    width : 40,
    height : 40
  },
  shadowIcon : {
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 1.0,
  },
  keyboardInputHidden : {
    flexDirection : 'column',
    justifyContent : 'flex-end',
    alignItems : 'flex-end',
  },
  colorWhiteCircle : {
    backgroundColor: 'white',
    width : 35,
    height : 35,
    borderRadius : 50,
    padding : 5,
    borderWidth : 2,
    borderColor : '#d4d4d4'
  },
  colorBlackCircle : {
    backgroundColor: 'black',
    width : 35,
    height : 35,
    borderRadius : 50,
    borderWidth : 2,
    borderColor : '#d4d4d4'
  },
  colorYellowCircle : {
    backgroundColor: 'yellow',
    width : 35,
    height : 35,
    borderRadius : 50,
    borderWidth : 2,
    borderColor : '#d4d4d4'
  },
  colorGreenCircle : {
    backgroundColor: 'green',
    width : 35,
    height : 35,
    borderRadius : 50,
    borderWidth : 2,
    borderColor : '#d4d4d4'
  },
  colorBlueCircle : {
    backgroundColor: 'blue',
    width : 35,
    height : 35,
    borderRadius : 50,
    borderWidth : 2,
    borderColor : '#d4d4d4'
  },
  colorPurpleCircle : {
    backgroundColor: 'purple',
    width : 35,
    height : 35,
    borderRadius : 50,
    borderWidth : 2,
    borderColor : '#d4d4d4'
  },
  colorRedCircle : {
    backgroundColor: 'red',
    width : 35,
    height : 35,
    borderRadius : 50,
    borderWidth : 2,
    borderColor : '#d4d4d4'
  },
  inputTextStyle : {
    height: 50,
    width: '100%',
    backgroundColor : 'rgba(52, 52, 52, 0.5)',
    padding : 5,
    marginBottom : 50}
});
