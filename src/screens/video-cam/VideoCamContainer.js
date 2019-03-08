import React from 'react';
import VideoCam from './VideoCam';

export default class VideoCamContainer extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){}

  render(){
    return <VideoCam navigation={this.props.navigation}/>
  }
}
