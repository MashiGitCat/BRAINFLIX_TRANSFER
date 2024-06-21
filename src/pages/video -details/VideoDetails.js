import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Main from "../../components/main/Main";
import axios from "axios";

const VideoPage = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://project-2-api.herokuapp.com/videos?api_key=2b1296cc-5054-4a8d-8059-46193c584ab8"
        );
        setVideos(response.data);

        if (response.data.length > 0) {
          const videoDetailsResponse = await axios.get(
            `https://project-2-api.herokuapp.com/videos/${id}?api_key=2b1296cc-5054-4a8d-8059-46193c584ab8`
          );
          setVideoDetails(videoDetailsResponse.data);
          setVideos(videos => videos.filter(video => video.id !== id));
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {videoDetails && <Main videos={videos} videoDetails={videoDetails} />}
    </div>
  );
};

export default VideoPage;
