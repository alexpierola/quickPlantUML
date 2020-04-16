import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import imgUml1 from '../../assets/ab_uml1.png';

const About = () => {
    
    let uml1 = `@startuml
:Hello world;
:This is 
the **beggining**;
@enduml`;

    return (
        <div className="container is-fluid body-container">
            <section className="usage">
                <div className="ab-title big">
                    <FontAwesomeIcon icon={faHashtag} />
                    <h1 className="text text-b">Usage</h1>
                </div>
                <h1>All you need to do is write your UML text in the box and send, then you will get your diagram. For example this text:</h1>
                <pre>{uml1}</pre>
                <h1>Will be transformed in this image:</h1>
                <img src={imgUml1} alt="uml1"/>
                <h1 className="has-text-weight-bold	">To download right click and save as...</h1>
            </section>
            <section className="demo mt-1">
                <div className="ab-title big">
                    <FontAwesomeIcon icon={faHashtag} />
                    <h1 className="text text-b">Diagrams</h1>
                </div>
                <h1>This web uses the UML language from plantUML:</h1>
                <div className="ab-title lit mt-1">
                    <FontAwesomeIcon icon={faAngleRight} />
                    <a className="text companion" href="https://plantuml.com/en/sequence-diagram">Sequence</a>
                </div>
                <div className="ab-title lit mt-1">
                    <FontAwesomeIcon icon={faAngleRight} />
                    <a className="text companion" href="https://plantuml.com/en/activity-diagram-beta">Activity</a>
                </div>
                <div className="ab-title lit mt-1">
                    <FontAwesomeIcon icon={faAngleRight} />
                    <a className="text companion" href="https://plantuml.com/en/use-case-diagram">Usecase</a>
                </div>
                <div className="ab-title lit mt-1">
                    <FontAwesomeIcon icon={faAngleRight} />
                    <a className="text companion" href="https://plantuml.com/en/class-diagram">Class</a>
                </div>
                <div className="ab-title lit mt-1">
                    <FontAwesomeIcon icon={faAngleRight} />
                    <a className="text companion" href="https://plantuml.com/en/">Many more...</a>
                </div>
            </section>
        </div>
    );
}

export default About;
