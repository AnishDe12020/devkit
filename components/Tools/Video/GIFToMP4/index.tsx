import { useState, ChangeEvent } from "react";

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

interface IGif {
  gifFile: File;
  gifURL: string;
}

const MP4ToGIF = (): JSX.Element => {
  const [gif, setGif] = useState<IGif>();
  const [video, setVideo] = useState<string>();
  const [convertProgress, setConvertProgress] = useState(0);
  const [convertLogs, setConvertLogs] = useState<string[]>([]);

  const load: () => void = async () => {
    if (!ffmpeg.isLoaded()) {
      setConvertLogs(prev => [...prev, "Loading FFMPEG...\n"]);
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

    setConvertLogs(prev => [...prev, "FFMPEG Loaded!\n"]);
  };

  const handleGifUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    const fileList = e.target.files;
    if (!fileList) return;
    const file = fileList[0];
    setGif({ gifFile: file, gifURL: URL.createObjectURL(file) });
  };

  const handleConvert: () => void = async () => {
    if (!gif) return;
    await load();
    ffmpeg.FS(
      "writeFile",
      "toBeConverted.gif",
      await fetchFile(gif?.gifFile as File)
    );
    await ffmpeg.run(
      "-i",
      "toBeConverted.gif",
      "-movflags",
      "faststart",
      "-pix_fmt",
      "yuv420p",
      "-f",
      "mp4",
      "converted.mp4"
    );
    const data = ffmpeg.FS("readFile", "converted.mp4");

    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: "video/mp4" })
    );
    setVideo(url);
    setConvertLogs(prev => [...prev, "Conversion completed!\n"]);
  };

  return (
    <>
      <Alert status="info" mb={4} borderRadius={8}>
        <AlertIcon />
        Conversions are done locally using FFMPEG.WASM and hence nothing is
        uploaded to the cloud and this can be done offline. That said this task
        is quite resource intensive.
      </Alert>
      <FileUpload
        onChange={handleGifUpload}
        label="Upload GIF"
        accept=".gif"
        w={{ base: "100%", md: "auto" }}
      />
      {gif && (
        <Box mt={4} maxW="500px">
          <Image src={gif?.gifURL} alt="GIF to be converted" />
        </Box>
      )}
      <Box>
        <Button
          onClick={handleConvert}
          mt={4}
          disabled={!gif?.gifURL}
          w={{ base: "100%", md: "auto" }}
        >
          Convert to Video
        </Button>
        <Textarea
          mt={4}
          h="300px"
          isReadOnly
          value={convertLogs}
          placeholder="Conversion Logs"
        />
        <Progress mt={2} value={convertProgress} borderRadius={8} />
      </Box>
      {video && (
        <Box mt={4} maxW="500px">
          <video controls src={video} />
        </Box>
      )}

      <Button
        mt={4}
        as={Link}
        href={video}
        download
        disabled={!video}
        w={{ base: "100%", md: "auto" }}
      >
        Download Video
      </Button>
    </>
  );
};

export default MP4ToGIF;
