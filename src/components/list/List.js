import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './list.css';

const List = (props) => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    setVideoList(props.videoList);
  }, [props.videoList]);

  return (
    <div className="list__container">
      <div>
        <h3 className="list__header">Next Videos</h3>
      </div>
      {videoList.map((video) => (
        <div key={video.id}>
          <div className="list__video-wrapper">
            <div>
              <Link to={`/video/${video.id}`}>
                <img
                  src={video.image}
                  alt="video-list-images"
                  className="list__image"
                />
              </Link>
            </div>
            <div>
              <h3 className="list__details-tablet">{video.title}</h3>
              <p className="list__channel-name">{video.channel}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;