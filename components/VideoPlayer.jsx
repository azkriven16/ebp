"use client";
import React, { useEffect } from "react";
import {
  Player,
  BigPlayButton,
  LoadingSpinner,
  ControlBar,
  ReplayControl,
  ForwardControl,
  VolumeMenuButton,
} from "video-react";
import "node_modules/video-react/dist/video-react.css";
import { DownloadButton } from "./VideoDownload";
import HLSSource from "./HlsSrc";
import { QualityBtn } from "./QualityBtn";
import { qualityStore } from "@/context";

export default ({ anime }) => {
  const currentQuality = qualityStore((state) => state.currentQuality);
  return (
    <div>
      <Player autoPlay={false}>
        {currentQuality ? (
          <HLSSource isVideoChild src={currentQuality?.url} />
        ) : (
          <HLSSource isVideoChild src={anime.sources[2].url} />
        )}

        <BigPlayButton position="center" />
        <LoadingSpinner />
        <ControlBar autoHide={false}>
          <ReplayControl seconds={5} order={2.1} />
          <VolumeMenuButton vertical />
          <ForwardControl seconds={5} order={3.1} />
          <QualityBtn data={anime.sources} order={7} />
          <DownloadButton order={8} />
        </ControlBar>
      </Player>
    </div>
  );
};
