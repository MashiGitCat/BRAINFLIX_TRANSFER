import Thumbnail from "../../assets/images/Upload-video-preview.jpg";
import { Link } from 'react-router-dom';
import "./uploadPage.css";

const Upload = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;

        if (!title || !description) {
            alert("Please fill in all fields.");
            return;
        }
    };

    return (
        <form onSubmit={handleSubmit} className="upload__outer-wrapper">
            <div className="upload__items-wrapper">
                <div>
                    <h2 className="upload__heading"> Upload video</h2>
                </div>
                <div className="upload__container">
                <div className="upload__container-tablet">  
                <div className="upload__container-desktop">
                    <div>
                    <h3 className="upload__input-heading">
                            Video Thumbnail
                        </h3>
                        <img className="upload__thumbnail" src={Thumbnail} alt="upload-video-thumbnail" />
                    </div>
                        
                    <div className="upload__video-details">
                        <div>
                        <h3 className="upload__input-heading">
                            Title your video
                        </h3>
                        </div>
                        <input className=" upload__video-title" type="text" name="title" placeholder="Add a title to your video" />
                        <div>
                            <h3 className="upload__input-heading">
                                Add a video description
                            </h3>
                            < textarea className="upload__video-description" name="description" placeholder="Add a description to your video"></textarea>
                        </div>
                    </div>
                    </div>
                    <div className="upload__button-wrap-tablet">
                        <div className="upload__button-container-tablet">
                        <Link to="/">
                        <button className="upload__video-button">
                            Publish
                        </button>
                    </Link>
                        </div>
                    
                    <div className="upload__button-container-tablet">
                    <button className="upload__video-cancel-button">
                        Cancel
                    </button>
                    </div>
                    </div>
            </div>
            </div>
            </div>
        </form>

    );
}

export default Upload;