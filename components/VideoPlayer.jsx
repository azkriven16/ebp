"use client";
import React from "react";
import {
  Player,
  BigPlayButton,
  LoadingSpinner,
  ControlBar,
  ReplayControl,
  ForwardControl,
} from "video-react";
import "node_modules/video-react/dist/video-react.css";
import { DownloadButton } from "./VideoDownload";
import HLSSource from "./HlsSrc";
import { QualityBtn } from "./QualityBtn";

export default () => {
  return (
    <div className="relative">
      <Player autoPlay={false}>
        <HLSSource
          isVideoChild
          src="https://www054.vipanicdn.net/streamhls/3f7a6aaab4892e2e104530832ae828d3/ep.9.1686024951.360.m3u8"
        />
        <BigPlayButton position="center" />
        <LoadingSpinner />
        <ControlBar autoHide={false}>
          <ReplayControl seconds={5} order={2.1} />
          <ForwardControl seconds={5} order={3.1} />
          <QualityBtn order={7} />
          <DownloadButton order={8} />
        </ControlBar>
      </Player>
    </div>
  );
};
