import { useReactMediaRecorder } from "react-media-recorder";

const RecordVoices = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: false },{
      type: "audio/wav"
    });

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <audio src={mediaBlobUrl}  autoPlay loop />
    </div>
  );
};
export default RecordVoices