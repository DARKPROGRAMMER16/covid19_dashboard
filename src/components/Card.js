import React, { Fragment } from 'react';
import CountUp from 'react-countup';

const Card = ({title,cases,desc,lastupdate,color}) => {
    // console.log(confirmed);
    return (
        <Fragment>
            <div className="col-md-4 mt-5">
                <div className="card" style={{borderBottom: `10px solid ${color}`}}>
                    <div className="card-body">
                        <h3 className="card-title">{title}</h3>
                        <hr/>
                        <p className="card-text text-center"><CountUp start={0} end={cases} duration={2} seperator=","/></p>
                        <p className="text-center">{desc}</p>
                        <hr/>
                        <p className="text-center">last update : {new Date(lastupdate).toDateString()}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Card
