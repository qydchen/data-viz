import React, { Component } from 'react';
import * as d3 from 'd3';

class Canvas extends Component {
  constructor(props) {
    super(props);
    this.initCanvas =  this.initCanvas.bind(this);
  }

  componentDidMount() {
    this.initCanvas()
  }

  initCanvas() {
    const { node } = this;
    d3.select(node)
  }

  render() {
    return (
      <svg ref={node => this.node = node} width={500} height={500}>
      </svg>
    )
  }
}

export default Canvas;
