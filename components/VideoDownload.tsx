import { useRef } from "react";
import classNames from "classnames";

interface DownloadButtonProps {
  player: {
    currentSrc: string;
  };
  className?: string;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  player,
  className,
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleClick = () => {
    // Handle click event
  };

  const { currentSrc } = player;

  return (
    <a
      ref={buttonRef}
      className={classNames(className, {
        "video-react-control": true,
        "video-react-button": true,
      })}
      href={
        "https://gogohd.net/download?id=MjA1NTIz&token=PSlzXw1XrraMl7oltts4Hw&expires=1686854428"
      }
      target="_blank"
      download
      style={{
        backgroundImage:
          "url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXoiLz4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      tabIndex={0}
      onClick={handleClick}
    />
  );
};
