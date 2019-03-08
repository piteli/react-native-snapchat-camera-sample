import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, PanResponder, Animated, TextInput, KeyboardAvoidingView, CameraRoll } from 'react-native';
import { Camera, Permissions } from 'expo';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants, takeSnapshotAsync } from 'expo';
import {styles} from './styles';

export default class CaptureCamera extends React.Component {

    render() {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }}
            type={this.props.type}
            flashMode={this.props.flashMode}
            ref={ref => { this.props.setCameraRef(ref)}}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'column',
              }}
              ref={view => {
                this.props.setContainer(view);
              }}>
              <View
              style={{
                flex: 0.2,
                flexDirection : 'row'
              }}>
                <TouchableOpacity
                style={{padding : 30, flex : 0.5,justifyContent : 'flex-start',alignItems : 'flex-start'}}
                  onPress={() => this.props.camCapture ? this.props.close() : this.props.navigation.goBack()}>
                  {this.props.camCapture ?
                  <Ionicons style={styles.shadowIcon} name="md-close" size={30} color="#d4d4d4" />
                    :
                  <Ionicons style={styles.shadowIcon} name="ios-arrow-round-back" size={30} color="#d4d4d4" />

                }
                </TouchableOpacity>
                {this.props.camCapture ?
                <View style={{padding : 30, flex : 0.5, flexDirection : 'column',alignItems : 'flex-end'}}>
                <TouchableOpacity style={this.props.tbuttondisable ? styles.dragTextCircle : styles.dragText}
                  onPress={() => this.props.tbuttondisable ? console.log("lala") : this.props.inputHiddenEnable(true)}>
                  <MaterialCommunityIcons style={styles.shadowIcon} name="format-text" size={30} color="#d4d4d4"/>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.saveToCameraRollAsync()}>
                  <Ionicons style={[{marginTop : 20, marginRight : 10}, styles.shadowIcon]} name="md-download" size={30} color="#d4d4d4" />
                </TouchableOpacity>
                </View>
                :
                null
                }
              </View>
              {this.props.dragText ?
                  <View
                  style={{
                    flex: 0.5,
                    flexDirection : 'column',
                    flexDirection : 'column',
                    justifyContent : 'flex-end',
                  }}>
                  <Animated.View
                  {...this.props._panResponder.panHandlers}
                  style={[this.props.panStyle, styles.circle]}
                >
                <Text
                style={{height: 'auto', width: '100%', color : this.props.colorTextInput}}
                >{this.props.inputValue}</Text>
                </Animated.View>
                </View>
                :
                this.props.inputHidden ?
                <View
                style={{
                  flex: 0.5,
                  flexDirection : 'column',
                  justifyContent : 'flex-end',
                }}>
                <View style={{flexDirection : 'row', justifyContent : 'space-between', alignItems : 'center', padding : 10, backgroundColor : 'rgba(52, 52, 52, 0.5)'}}>
                <TouchableOpacity onPress={() => this.props.changeColor('white')} style={styles.colorWhiteCircle}></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.changeColor('black')} style={styles.colorBlackCircle}></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.changeColor('green')} style={styles.colorGreenCircle}></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.changeColor('blue')} style={styles.colorBlueCircle}></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.changeColor('purple')} style={styles.colorPurpleCircle}></TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.changeColor('red')} style={styles.colorRedCircle}></TouchableOpacity>
                </View>
                <TextInput
                  style={[styles.inputTextStyle, {color : this.props.colorTextInput}]}
                  placeholder={'Enter Caption here'}
                  ref={(ref) => this.props.setInput(ref)}
                  placeholderTextColor={'#d4d4d4'}
                  returnKeyType='done'
                  onBlur={this.props.onBlurInput}
                  onChangeText={(text) => this.props.setInputValue(text)}/>
              </View>
                :
                <View
                style={{
                  flex: 0.5,
                  flexDirection : 'row',
                  justifyContent : 'center',
                  alignItems : 'center'
                }}>
                </View>
              }
              {!this.props.camCapture ?
                            <View
                            style={{
                              flex: 0.3,
                              flexDirection : 'row',
                              alignItems : 'center'
                            }}>
                              <TouchableOpacity
                              style={{padding : 30, flex : 0.25, marginTop : 50,justifyContent : 'flex-end',alignItems : 'flex-end'}}
                                onPress={() => this.props.enableFlashMode()}>
                                {this.props.flashMode === 'on' ?
                                <Ionicons style={[{marginRight : 10}, styles.shadowIcon]} name="md-flash" size={40} color="#d4d4d4" />
                                :
                                <Ionicons style={styles.shadowIcon} name="md-flash-off" size={40} color="#d4d4d4" />
                              }
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.cameraShot} onPress={() => {
                                this.props.pausePreview();
                                this.props.snap();
                                }}>
                              <FontAwesome name="circle-o" size={100} style={[{ color: '#d4d4d4' }, styles.shadowIcon]} />
                                </TouchableOpacity>
                              <TouchableOpacity
                              style={{padding : 30, flex : 0.25, marginTop : 50 ,flexDirection : 'column',alignItems : 'flex-start'}}
                                onPress={() => this.props.enableFrontCamMode()}>
                                <Ionicons style={styles.shadowIcon} name="ios-reverse-camera" size={40} color="#d4d4d4" />
                              </TouchableOpacity>
                              </View>
                  :
                  <View
                  style={{
                    flex: 0.3,
                    flexDirection : 'row',
                    alignItems : 'flex-end',
                    justifyContent : 'flex-end'
                  }}>
                  <TouchableOpacity
                  style={{padding : 30}}
                    onPress={() => this.props.navigation.goBack()}>
                    <Ionicons name="md-send" size={40} color="#d4d4d4" />
                  </TouchableOpacity>
                  </View>
                }
            </View>
          </Camera>
        </View>
        );
    }
  }
