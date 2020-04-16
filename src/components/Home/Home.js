import React from 'react';
import uml from '../../assets/home_uml.png';
import { codify } from '../../assets/deflate';

const Home = () => {

    function send(e) {
        let text = document.querySelector('#text-uml').value;
        text = unescape(encodeURIComponent(text));
        let sendBtn = e.target;
        sendBtn.classList.add('is-loading');
        codify(text).then(data => {
            document.querySelector('#img-uml').src = `https://www.plantuml.com/plantuml/img/${data}`;
            setTimeout(()=> {
                sendBtn.classList.remove('is-loading');
            }, 500)
        })
    }

    return (
        <div className="container is-fluid is-flex body-container">
            <div className="text">
                <textarea defaultValue="Rebeca -> Joe : Hi" id="text-uml" spellCheck="false" />
                <button className="button is-action" onClick={send}>Send</button>
            </div>
            <div className="image">
                <img src={uml} alt="uml-graph" id="img-uml" />
            </div>
        </div>
    );
}

export default Home;
