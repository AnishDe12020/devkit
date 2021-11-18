import { useState, useEffect, ChangeEvent } from "react";

import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Image,
  Link,
  Progress,
  Textarea,
} from "@chakra-ui/react";
import FileUpload from "@/components/Common/FileUpload";
const ffmpeg = createFFmpeg({ log: true });

interface IVideo {
  videoFile: File;
  videoURL: string;
}

const MP4ToGIF = (): JSX.Element => {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState<IVideo>();
  const [gif, setGif] = useState<string>();
  const [convertProgress, setConvertProgress] = useState(0);
  const [convertLogs, setConvertLogs] = useState<string[]>([]);

  const load: () => void = async () => {
    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
    }

    ffmpeg.setProgress(({ ratio }) => {
      console.log(ratio);
      if (ratio >= 0 && ratio <= 1) {
        setConvertProgress(ratio * 100);
      }
    });

    ffmpeg.setLogger(({ message }) => {
      console.log(message);
      setConvertLogs(prev => [...prev, message + "\n"]);
    });
    setReady(true);
  };

  useEffect(() => {
    load();
  }, []);

  const handleVideoUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    const fileList = e.target.files;
    if (!fileList) return;
    const file = fileList[0];
    setVideo({ videoFile: file, videoURL: URL.createObjectURL(file) });
  };

  const handleConvert: () => void = async () => {
    if (!video) return;
    ffmpeg.FS(
      "writeFile",
      "toBeConverted.mp4",
      await fetchFile(video?.videoFile as File)
    );
    await ffmpeg.run("-i", "toBeConverted.mp4", "-f", "gif", "converted.gif");
    const data = ffmpeg.FS("readFile", "converted.gif");

    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: "image/gif" })
    );
    setGif(url);
  };

  return (
    <>
      <Alert status="info" mb={4} borderRadius={8}>
        <AlertIcon />
        Conversions are done locally using FFMPEG.WASM and hence nothing is
        uploaded to the cloud and this can be done offline. That said this task
        is quiet resource intensive.
      </Alert>
      <FileUpload
        onChange={handleVideoUpload}
        label="Upload Video"
        accept="video/*"
        w={{ base: "100%", md: "auto" }}
      />
      {video && (
        <Box mt={4} maxW="500px">
          <video controls src={video?.videoURL} />
        </Box>
      )}
      <Box>
        <Button
          onClick={handleConvert}
          mt={4}
          disabled={!ready || !video?.videoURL}
          w={{ base: "100%", md: "auto" }}
        >
          Convert to GIF
        </Button>
        <Textarea
          mt={4}
          isReadOnly
          value={convertLogs}
          placeholder="Conversion Logs"
        />
        <Progress mt={2} value={convertProgress} borderRadius={8} />
      </Box>
      {gif && (
        <Box mt={4} maxW="500px">
          <Image src={gif} alt="Converted GIF" />
        </Box>
      )}

      <Button
        mt={4}
        as={Link}
        href={gif}
        download
        disabled={!gif}
        w={{ base: "100%", md: "auto" }}
      >
        Download GIF
      </Button>
    </>
  );
};

export default MP4ToGIF;
