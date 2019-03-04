import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, PanResponder, Animated, TextInput, KeyboardAvoidingView, CameraRoll } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants, takeSnapshotAsync } from 'expo';
import {styles} from './styles';
import CaptureCamera from './Camera';

export default class CameraContainer extends React.Component {

  constructor(props){
    super(props);
    this.initiateStates();
    this.initiateInstances();
  }

  initiateStates(){
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1),
      dragText : false,
      textIcon : false,
      flashMode : 'off',
      photo : null,
      camCapture : false,
      inputHidden : false,
      inputValue : null,
      tbuttondisable : false,
      colorTextInput : 'white',
      imageDownload : false
    };
  }

  initiateInstances(){
    this.camera = null;
    this.input = null;
    this._container = null;
    this.getCameraRef = this.getCameraRef.bind(this);
    this.setCameraRef = this.setCameraRef.bind(this);
    this.setInput = this.setInput.bind(this);
    this.setContainer = this.setContainer.bind(this);
    this.onBlurInput = this.onBlurInput.bind(this);
    this.saveToCameraRollAsync = this.saveToCameraRollAsync.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.enableFlashMode = this.enableFlashMode.bind(this);
    this.pausePreview = this.pausePreview.bind(this);
    this.setInputValue = this.setInputValue.bind(this);
    this.inputHiddenEnable = this.inputHiddenEnable.bind(this);
    this.snap = this.snap.bind(this);
    this.enableFrontCamMode = this.enableFrontCamMode.bind(this);
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset({x: 0, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
        Animated.spring(
          this.state.scale,
          { toValue: 1.1, friction: 3 }
        ).start();
      },

      onPanResponderMove: Animated.event([
        null, {dx: 0, dy: this.state.pan.y},
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
        Animated.spring(
          this.state.scale,
          { toValue: 1, friction: 3 }
        ).start();
      }
    });
  }


  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  setContainer(ref){
    this._container = ref;
  }

  setInput(ref){
    this.input = ref;
  }

  dragTextEnable(){
    this.setState({dragText : this.state.dragText ? false : true});
  }

  inputHiddenEnable(bool){
    this.setState({inputHidden : bool, tbuttondisable : true},() => {
      if(this.state.inputHidden){
        console.log(this.input);
        this.input.focus();
      }
    });
  }

  enableFlashMode(){
    this.setState({flashMode : this.state.flashMode === 'on' ? 'off' : 'on'});
  }

  enableFrontCamMode(){
    this.setState({type : this.state.type === Camera.Constants.Type.back ?
      Camera.Constants.Type.front : Camera.Constants.Type.back});
  }

  capturePicture(){
    let takePicture = async () => {this.camera.takePictureAsync({ skipProcessing: true }).then((data) => {
      this.setState({
          //takeImageText: "PICTURE TAKEN",
          photo: data.uri
      }, () => {
        alert(data.uri);
      })
    })
    }
  }

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({skipProcessing : true, quality : 1});
      this.setState({photo : photo.uri, camCapture : true, imageDownload : true});
    }
  }

  onBlurInput(){
    this.setState({dragText : true, inputHidden : false});
  }

  close(){
    this.resumePreview();
    this.setState({
      dragText : false,
      textIcon : false,
      flashMode : 'off',
      photo : null,
      camCapture : false,
      inputHidden : false,
      inputValue : null,
      tbuttondisable : false,
      colorTextInput : 'white'});
  }

  changeColor(color){
    this.setState({colorTextInput : color}, () => {
      this.input.setNativeProps({text: ''});
      this.input.setNativeProps({text: this.state.inputValue});
    })
  }

  setCameraRef(ref){
    this.camera = ref;
  }

  getCameraRef(){
    return this.camera;
  }

  setInputValue(text){
    this.setState({inputValue : text});
  }

  pausePreview(){
    this.camera.pausePreview();
  }

  resumePreview(){
    this.camera.resumePreview();
  }

  saveToCameraRollAsync = async () => {
    this.setState({imageDownload : true});
    let result = await takeSnapshotAsync(this._container, {
      format: 'png',
      result: 'file',
    });
    let saveResult = await CameraRoll.saveToCameraRoll(result, 'photo');
    alert('successfully saved in Photo Gallery');
    this.setState({imageDownload : false});
  }


  render() {
    const { hasCameraPermission } = this.state;
    let rotate = '0deg';
    // let imageStyle = {transform: [{translateX}, {translateY}, {rotate}, {scale}]};
    const panStyle = {
      transform: this.state.pan.getTranslateTransform()
    }
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return <CaptureCamera hasCameraPermission={this.state.hasCameraPermission} imageDownload={this.state.imageDownload}
                            type={this.state.type} pan={this.state.pan}
                            scale={this.state.scale} tbuttondisable={this.state.tbuttondisable}
                            dragText={this.state.dragText} textIcon={this.state.textIcon}
                            flashMode={this.state.flashMode} photo={this.state.photo}
                            camCapture={this.state.camCapture} colorTextInput={this.state.colorTextInput}
                            inputHidden={this.state.inputHidden} inputValue={this.state.inputValue}
                            navigation={this.props.navigation} saveToCameraRollAsync={this.saveToCameraRollAsync}
                            changeColor={this.changeColor} enableFlashMode={this.enableFlashMode}
                            pausePreview={this.pausePreview} snap={this.snap} enableFrontCamMode={this.enableFrontCamMode}
                            setCameraRef={this.setCameraRef} getCameraRef={this.getCameraRef} inputHiddenEnable={this.inputHiddenEnable}
                            setContainer={this.setContainer} setInput={this.setInput} setInputValue={this.setInputValue}
                            onBlurInput={this.onBlurInput} panStyle={panStyle} rotate={rotate} _panResponder={this._panResponder}/>;
    }
  }
  }
