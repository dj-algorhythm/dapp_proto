import React from 'react';

function CaseFile(caseId, caseCreator, phase, assignedOfficer) {
    return (
        <div className="container">
            <p className="text-end">Case File#:000{ caseId }</p>
            <p className="text-end">Created on:{ /*TODO: */}</p>
            <h3>Case Subject</h3>
            <div className="row">
                <div className="col">
                    <h4>Summary</h4>
                    <div className="container border">
                        <p>Description - Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                        <div className="row">
                            <p className="col">Assigned Officer:</p>
                            <div className="col">
                                <p>Name</p>
                                <p>[ -- eth address -- ]</p>
                            </div>
                        </div>
                        <div className="row">
                            <p className="col">Phase:</p>
                            <p className="col">{ phase }</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h4>Actions</h4>
                    <p className="text-center"><button className="btn btn">Assign case</button></p>
                    <p className="text-center"><button className="btn btn">Update</button></p>
                </div>
            </div>
        </div>
    );
}

export default CaseFile;