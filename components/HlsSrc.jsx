import React, { Component } from "react";
import Hls from "hls.js";

export default class HLSSource extends Component {
  constructor(props, context) {
    super(props, context);
    this.hls = new Hls();
  }

  componentDidMount() {
    // `src` is the property obtained from this component
    // `video` is the property passed from the `Video` component
    // `video` is the html5 video element
    const { src, video } = this.props;
    // load hls video source using hls.js
    if (Hls.isSupported()) {
      this.hls.loadSource(src);
      this.hls.attachMedia(video);
      this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    }
  }

  componentDidUpdate(prevProps) {
    // Handle changes in the video source
    if (prevProps.src !== this.props.src) {
      this.hls.loadSource(this.props.src);
      this.hls.attachMedia(this.props.video);
    }
  }

  componentWillUnmount() {
    // destroy hls video source
    if (this.hls) {
      this.hls.destroy();
    }
  }

  render() {
    return (
      <source
        src={this.props.src}
        type={this.props.type || "application/x-mpegURL"}
      />
    );
  }
}
