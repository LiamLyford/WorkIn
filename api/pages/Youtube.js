import React, { Component } from 'react';

const API = 'AIzaSyBCWpKcCGcUzuwMJPqdfo8GeKs6eoJO9SM'
const maxResults = 10;
var playlistID = 'PLOzDu-MXXLliO9fBNZOQTBDddoA3FzZUo'
var URL = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API}&part=snippet&playlistId=${playlistID}&maxResults=10`



class Youtube extends Component {

    constructor(props) {
        super(props);

        this.state = {
            resultYT: ''
        }
    }

    httpGet = (theUrl) => {
        return new Promise((resolve, reject) => {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", theUrl, false); // false for synchronous request
            xmlHttp.send(null);
            if (xmlHttp.responseText) {
                resolve(xmlHttp.responseText)
            } else {
                reject({
                    error: 'Something went wrong'
                })
            }

        });
    }

    jsonParse = async () => {
        var jsonFormat = await this.httpGet(URL)
        var object = JSON.parse(jsonFormat);
        console.log(object)
        var video_url = object.items[0].snippet.resourceId.videoId;
        // console.log(video_url)
        this.setState({
            resultYT: video_url
        })
        return video_url
    }



    render() {
        console.log(this.jsonParse());
        return (
            <div className="container">
                <header>
                    <img src="" alt="" className="logo" />
                </header>

                <section id="video">
                    <iframe width="560" height="315" src={this.state.resultYT} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </section>

                <main>

                    <article>

                        <img src="" alt="" className="thumb" />

                        <div className="details">
                            <h4>Title</h4>
                            <p>Description here</p>
                        </div>

                    </article>
                    <article>

                        <img src="" alt="" className="thumb" />

                        <div className="details">
                            <h4>Title</h4>
                            <p>Description here</p>
                        </div>

                    </article>
                    <article>

                        <img src="" alt="" className="thumb" />

                        <div className="details">
                            <h4>Title</h4>
                            <p>Description here</p>
                        </div>

                    </article>

                </main>

            </div>
        );
    }
}

export default Youtube