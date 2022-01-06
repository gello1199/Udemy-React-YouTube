import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import Videodetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
   
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos, search] = useVideos('hockey')

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])
   

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <Videodetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                        onVideoSelect={setSelectedVideo} 
                        videos={videos} 
                        />
                    </div>
                </div>
           </div>
        </div>
    );

}

export default App;
