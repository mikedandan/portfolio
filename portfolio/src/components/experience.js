import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <h5 style={{marginTop:'0px'}}>{this.props.jobTitle}</h5>
          <p>{this.props.jobDescriptionOne}</p>
          <p>{this.props.jobDescriptionTwo}</p>
          <p>{this.props.jobDescriptionThree}</p>
          <p>{this.props.jobDescriptionFour}</p>
          <p>{this.props.jobDescriptionFive}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
